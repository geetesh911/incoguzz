import Agenda from "agenda";
import config from "@/configs";

export abstract class BaseAgendaService {
  public agenda = new Agenda({
    db: {
      address: config.get("dbConfig.connectionString"),
      collection: "agendaJobs",
    },
  });
}
