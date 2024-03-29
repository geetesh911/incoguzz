import { Router } from "express";
import IndexController from "@/common/controllers/index.controller";
import { Routes } from "@/common/interfaces/routes.interface";

class IndexRoute implements Routes {
  public path = "/";
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
