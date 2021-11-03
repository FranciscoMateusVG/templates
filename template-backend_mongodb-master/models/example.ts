import { model, Schema, Model, Document, Types } from "mongoose";

export interface IExample extends Document {
  argument1: string;
  argumentId: Types.ObjectId;
}

const ExampleSchema: Schema = new Schema({
  argument1: { type: String, required: true },
  argumentId: { type: Types.ObjectId },
});

export const Example: Model<IExample> = model("Example", ExampleSchema);
