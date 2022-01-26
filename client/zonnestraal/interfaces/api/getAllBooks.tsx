import { Library } from "../models/library";

export interface GetAllBooks {
  slice: any;
  length: number;
  filter: any;
  allBooks: Library[];
}