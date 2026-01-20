import XanvType from "../XanvType";

class XqlDate extends XanvType<Date, unknown> {
   protected check(value: unknown): Date {
      if (!(value instanceof Date) || isNaN(value.getTime())) {
         throw new Error(`Value should be a valid Date object, received ${typeof value}`);
      }
      return value;
   }
}

export default XqlDate;
