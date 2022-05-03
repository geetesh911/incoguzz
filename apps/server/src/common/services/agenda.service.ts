import Agenda from "agenda";
import config from "@/configs";
import { singleton } from "tsyringe";

@singleton()
export class BaseAgendaService {
  public agenda = new Agenda({
    db: {
      address: config.get("dbConfig.connectionString"),
      collection: "agendaJobs",
    },
  });
}
