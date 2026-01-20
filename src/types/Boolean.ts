import XanvType from "../XanvType";

class XqlBoolean extends XanvType<boolean, unknown> {
   protected check(value: unknown): boolean {
      if (typeof value !== "boolean") {
         throw new Error(`Value should be a boolean, received ${typeof value}`);
      }
      return value;
   }
}

export default XqlBoolean;
