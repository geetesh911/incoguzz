process.env["NODE_CONFIG_DIR"] = __dirname + "/configs";

import "reflect-metadata";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "@/configs";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import { connect, set } from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import http, { Server } from "http";
import { mongodbConnection } from "@databases";
import { Routes } from "@/common/interfaces/routes.interface";
import { errorMiddleware } from "@/common/middlewares/error.middleware";
import { logger, stream } from "@utils/logger";
import PassportProvider from "@/auth/providers/passport.provider";
import Container, { Service } from "typedi";
import ContextHelper from "./common/helpers/context.helper";
import PrismaService from "./common/services/prisma.service";
import { createSchema } from "./utils/create-schema.util";
import { graphqlUploadExpress } from "graphql-upload";

@Service()
class App {
  public app: express.Application;
  public httpServer: Server;
  public port: string | number;
  public env: string;
  private readonly contextHelper = Container.get(ContextHelper);
  private readonly prisma = Container.get(PrismaService);

  constructor(routes: Routes[]) {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.port = process.env.PORT || 5000;
    this.env = process.env.NODE_ENV || "development";

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
    this.initializePassport();
  }

  public async listen() {
    const schema = await createSchema();

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
      context: async ({ req, res }) => {
        return this.contextHelper.buildContext({
          prisma: this.prisma,
          req,
          res,
        });
      },
    });

    await server.start();

    server.applyMiddleware({ app: this.app });

    await new Promise<void>(() => {
      return this.httpServer.listen({ port: this.port }, () => {
        logger.info(`=================================`);
        logger.info(`======= ENV: ${this.env} ========`);
        logger.info(`🚀 App listening on the port ${this.port}`);
        logger.info(`=================================`);
      });
    });
  }

  public getServer() {
    return this.app;
  }

  private async connectToDatabase() {
    if (this.env !== "production") {
      set("debug", true);
    }

    const conn = await connect(mongodbConnection.url);

    console.log(
      `MongoDB ${conn.connection.readyState === 1 ? "connected" : "error"}`,
    );
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.get("log.format"), { stream }));
    this.app.use(
      cors({
        origin: config.get("cors.origin"),
        credentials: config.get("cors.credentials"),
      }),
    );
    this.app.use(hpp());
    this.app.use(
      helmet({
        contentSecurityPolicy:
          process.env.NODE_ENV === "production" ? undefined : false,
      }),
    );
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(graphqlUploadExpress());
  }

  private initializePassport() {
    const passportProvider = new PassportProvider();
    passportProvider.initializePassport(this.app);
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use("/", route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: "REST API",
          version: "1.0.0",
          description: "Example docs",
        },
      },
      apis: ["swagger.yaml"],
    };

    const specs = swaggerJSDoc(options);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
