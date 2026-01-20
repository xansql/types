import React from 'react';
import { createRoot } from 'react-dom/client';

import { xt, Infer } from './src';

const ob = {
  array: xt.array(xt.string()),           // array of strings
  boolean: xt.boolean(),
  date: xt.date(),
  enum: xt.enum("active", "inactive"),    // enum with string values
  file: xt.file(),
  number: xt.number(),
  object: xt.object({ name: xt.string(), person: xt.object({ age: xt.number() }) }),
  record: xt.record(xt.string(), xt.number()),
  map: xt.map(xt.string(), xt.number()),
  set: xt.set(xt.number()),
  string: xt.string(),
  tuple: xt.tuple([xt.string(), xt.number()]),
  union: xt.union([xt.string(), xt.number()]),
  json: xt.json()
}

const schema = xt.object({
  array: xt.array(xt.string()).optional(),           // array of strings
  boolean: xt.boolean(),
  date: xt.date(),
  enum: xt.enum("active", "inactive"),    // enum with string values
  file: xt.file(),
  number: xt.number(),
  object: xt.object({ name: xt.string(), person: xt.object({ age: xt.number() }) }),
  record: xt.record(xt.string(), xt.number()),
  map: xt.map(xt.string(), xt.number()),
  set: xt.set(xt.number()),
  string: xt.string(),
  tuple: xt.tuple([xt.string(), xt.number()]),
  union: xt.union([xt.string(), xt.number()]),
  json: xt.json(),
});


let ar = xt.array(xt.string())
type AR = Infer<typeof ar>
// TypeScript will infer this type:
type SchemaType = Infer<typeof schema>;

const App = () => {
  return (
    <div style={{ fontFamily: 'monospace,math, sans-serif', textAlign: 'center', marginTop: '50px' }}>

      <div style={{ marginTop: "50px" }}>

      </div>
    </div>
  );
}
const rootEle = document.getElementById('root')
if (rootEle) {
  const root = createRoot(rootEle);
  root.render(<App />);
}
