import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the schema using a class
@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

// Create a Mongoose schema based on the Cat class
export const CatSchema = SchemaFactory.createForClass(Cat);

// Define the document interface
export type CatDocument = Cat & Document;
