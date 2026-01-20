// XqlObject.ts
import XanvType from "../XanvType";
import { Infer, XqlInstanceType } from "../types";

export type XqlObjectShape = Record<string, XqlInstanceType | any>;

class XqlObject<O extends XqlObjectShape = any> extends XanvType<{ [K in keyof O]: Infer<O[K]> }> {
   public readonly arg?: O;

   constructor(arg?: O) {
      super();
      this.arg = arg;
   }

   protected check(value: any): { [K in keyof O]: Infer<O[K]> } {
      const result: any = {};
      for (const key in this.arg) {
         const itemType = this.arg[key];
         result[key] = itemType.parse(value[key]);
      }
      return result;
   }
}


export default XqlObject;
