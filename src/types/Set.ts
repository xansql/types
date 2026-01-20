import { XqlInstanceType } from "../types";
import XanvType from "../XanvType";

class XqlSet<T extends XqlInstanceType = any> extends XanvType<T> {

   private Xqltype: T;

   constructor(Xqltype: T) {
      super();
      this.Xqltype = Xqltype;
   }

   protected check(value: any): T {
      if (!(value instanceof Set)) {
         throw new Error(`Value should be a Set, received ${typeof value}`);
      }

      for (const item of Array.from(value)) {
         try {
            this.Xqltype.parse(item);
         } catch (error) {
            throw new Error(`Set item should be of type ${this.Xqltype.constructor.name}, received ${typeof item}`);
         }
      }
      return value as any
   }

   min(length: number) {
      return this.set("min", (v: any) => {
         if (v.size < length) {
            throw new Error(`Set size should be at least ${length} items, received ${v.size}`);
         }
      }, length);
   }

   max(length: number) {
      return this.set("max", (v: any) => {
         if (v.size > length) {
            throw new Error(`Set size should not exceed ${length} items, received ${v.size}`);
         }
      }, length);
   }


}

export default XqlSet;