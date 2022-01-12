import { MediaTypes } from "./mediaTypes";
import {Location} from './location';

export interface Media {
  id: number;
  title: string;
  description: string;
  location: Location;
  created_on: Date;
  edited_on: Date;
  hidden: string;
  type: MediaTypes;
  show_home: string;
  language: string;
  meta_id: number;
}