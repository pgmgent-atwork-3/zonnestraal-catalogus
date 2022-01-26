import { Location } from "graphql";
import { LibraryTypes } from './libraryTypes'

export interface Library {
  [x: string]: any;
  length: number;
  id: number;
  serial: number;
  title: string;
  description: string;
  publisher: string;
  author: string;
  year: number;
  location: Location;
  created_on: Date;
  edited_on: Date;
  hidden: string;
  type: LibraryTypes;
  language: string;
  meta_id: number;
  /* rent: [LibraryRent!]!
  reservation: [LibraryReservation!]! */
}