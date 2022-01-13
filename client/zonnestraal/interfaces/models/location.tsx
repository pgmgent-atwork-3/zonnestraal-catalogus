import {Media} from './media';
import {Library} from './library';

export interface Location {
  id: number;
  language: string;
  extra_id: number;
  title: string;
  street: string;
  number: string;
  zip: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  show_overview: string;
  created_on: Date;
  edited_on: Date;
  media: Media;
  library: Library;
}