import { injectable } from "tsyringe";
import { Context, IBuildContext } from "../interfaces/context.interface";

@injectable()
class ContextHelper {
  async buildContext(context: IBuildContext): Promise<Context> {
    return context;
  }
}
export default ContextHelper;
