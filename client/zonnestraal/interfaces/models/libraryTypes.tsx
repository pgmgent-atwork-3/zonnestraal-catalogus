import { Library } from "./library";

export interface LibraryTypes {
  id: number;
  title: String
  language: String
  created_on: Date;
  meta_id: number;
  edited_on: Date;
  library: Library;
}