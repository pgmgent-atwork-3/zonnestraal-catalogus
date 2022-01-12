import { Media } from "./media";

  export interface MediaTypes {
    id: number;
    title: string;
    created_on: Date;
    edited_on: Date;
    language: string;
    meta_id: number;
    media: Media;
  }