import config from "@/configs";
import { DbConfig } from "@/common/interfaces/db.interface";

const { connectionString }: DbConfig = config.get("dbConfig");

export const dbConnection = {
  url: connectionString,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
