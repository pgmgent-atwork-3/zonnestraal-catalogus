import { Library } from "../models/library";

export interface GetAllBooks {
  length: number;
  filter: any;
  allBooks: Library[];
}