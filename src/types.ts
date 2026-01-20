import XqlArray from "./types/Array";
import XqlBoolean from "./types/Boolean";
import XqlDate from "./types/Date";
import XqlEnum from "./types/Enum";
import XqlFile from "./types/File";
import XqlJson from "./types/Json";
import XqlMap from "./types/Map";
import XqlNumber from "./types/Number";
import XqlObject, { XqlObjectShape } from "./types/Object";
import XqlRecord from "./types/Record";
import XqlSet from "./types/Set";
import XqlString from "./types/String";
import XqlTuple from "./types/Tuple";
import XqlUnion from "./types/Union";

export type XqlInstanceType =
   | XqlArray<any>
   | XqlBoolean
   | XqlDate
   | XqlEnum<any>
   | XqlFile
   | XqlMap<any, any>
   | XqlNumber
   | XqlObject<XqlObjectShape>
   | XqlRecord<XqlInstanceType, XqlInstanceType>
   | XqlSet<any>
   | XqlString
   | XqlTuple<any>
   | XqlUnion<any>
   | XqlJson<Record<string, any>>


export type XanvTransformCallback<T> = (value: T) => T;
export type XqlCheckCallback<T> = (value: T) => void;



// Utility type to infer the TypeScript type from your schema
// Helper to decrement recursion depth
type Dec<N extends number> =
   N extends 5 ? 4 :
   N extends 4 ? 3 :
   N extends 3 ? 2 :
   N extends 2 ? 1 :
   N extends 1 ? 0 :
   0;

export type Infer<T, Depth extends number = 5> =
   Depth extends 0 ? any : // stop recursion
   T extends { meta: { optional: true; nullable: true } } ? InferType<T, Dec<Depth>> | null | undefined :
   T extends { meta: { optional: true } } ? InferType<T, Dec<Depth>> | undefined :
   T extends { meta: { nullable: true } } ? InferType<T, Dec<Depth>> | null :
   InferType<T, Dec<Depth>>;

type InferType<T, Depth extends number> =
   T extends XqlString ? string :
   T extends XqlNumber ? number :
   T extends XqlBoolean ? boolean :
   T extends XqlDate ? Date :
   T extends XqlFile ? File | Blob :
   T extends XqlEnum<infer U> ? U[number] :
   T extends XqlArray<infer U> ? Infer<U, Depth>[] :
   T extends XqlTuple<infer U extends XqlInstanceType[]> ? { [K in keyof U]: Infer<U[K], Depth> } :
   T extends XqlUnion<infer U extends XqlInstanceType[]> ? Infer<U[number], Depth> :
   T extends XqlMap<infer K, infer V> ? Map<Infer<K, Depth>, Infer<V, Depth>> :
   T extends XqlSet<infer U> ? Set<Infer<U, Depth>> :
   T extends XqlRecord<infer K, infer V> ? Record<Infer<K, Depth>, Infer<V, Depth>> :
   T extends XqlJson ? Record<string, any> :
   T extends XqlObject<infer O> ? { [K in keyof O]: Infer<O[K], Depth> } :
   any;



