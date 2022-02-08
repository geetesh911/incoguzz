import { Service } from "typedi";

@Service()
class ValidationHelper {
  validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }
}

export default ValidationHelper;
