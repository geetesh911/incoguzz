import config from "@/configs";
import { DbConfig } from "@/common/interfaces/db.interface";

const { connectionString }: DbConfig = config.get("dbConfig");

export const mongodbConnection = {
  url: connectionString,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
