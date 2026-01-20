import XanvType from "./XanvType";
import XqlArray from "./types/Array";
import XqlBoolean from "./types/Boolean";
import XqlDate from "./types/Date";
import XqlEnum from "./types/Enum";
import XqlFile from "./types/File";
import XqlMap from "./types/Map";
import XqlNumber from "./types/Number";
import XqlObject, { XqlObjectShape } from "./types/Object";
import XqlRecord from "./types/Record";
import XqlSet from "./types/Set";
import XqlString from "./types/String";
import XqlTuple from "./types/Tuple";
import XqlUnion from "./types/Union";
import XqlJson from "./types/Json";

import {
   XqlInstanceType,
   XqlCheckCallback,
   Infer,
} from "./types";

export type {
   XqlInstanceType,
   XqlCheckCallback,
   Infer
};

export {
   XanvType,
   XqlArray,
   XqlBoolean,
   XqlDate,
   XqlEnum,
   XqlFile,
   XqlMap,
   XqlNumber,
   XqlObject,
   XqlRecord,
   XqlSet,
   XqlString,
   XqlTuple,
   XqlUnion,
   XqlJson,
};

export const xt = {
   array: <T extends XqlInstanceType>(type: T, length?: number) => new XqlArray<T>(type, length),
   boolean: () => new XqlBoolean(),
   date: () => new XqlDate(),
   enum: <T extends readonly (string | number)[]>(...values: T) => new XqlEnum<T>(values),
   file: () => new XqlFile(),
   number: (length?: number) => new XqlNumber(length),
   object: <T extends XqlObjectShape>(arg?: T) => new XqlObject<T>(arg),
   record: <K extends XqlInstanceType, V extends XqlInstanceType>(key: K, value: V) => new XqlRecord<K, V>(key, value),
   map: <K extends XqlInstanceType, V extends XqlInstanceType>(key: K, value: V) => new XqlMap<K, V>(key, value),
   set: <T extends XqlInstanceType>(type: T) => new XqlSet<T>(type),
   string: (length?: number) => new XqlString(length),
   tuple: <T extends XqlInstanceType[]>(type: T) => new XqlTuple<T>(type),
   union: <T extends XqlInstanceType[]>(types: T) => new XqlUnion<T>(types),
   json: () => new XqlJson(),
};

