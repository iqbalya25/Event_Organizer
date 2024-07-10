import { Category } from "./categoryType";
import { Company } from "./companyType";
import { EventType } from "./eventTypeType";
import { Rating } from "./ratingType";
import { Speaker } from "./speakerType";
import { Topic } from "./topicType";

// export interface Event {
//   name: string;
//   address: string;
//   city: string;
//   websiteUrl: string;
//   imageUrl: string;
//   description: string | null;
//   descriptionDetail: string | null;
//   dateStart: Date;
//   dateEnd: Date;
//   hourStart: string;
//   hourEnd: string;
//   capacity: number;
//   eventTyoeId: number;
//   categories: Category[];
//   companies: Company[];
//   topics: Topic[];
//   speakers: Speaker[];
//   ratings: Rating[];
//   eventType: EventType;
// }

export interface Event {
  name: string;
  address: string;
  city: string;
  websiteUrl: string;
  imageUrl: string;
  description: string | null;
  descriptionDetail: string | null;
  dateStart: Date;
  dateEnd: Date;
  hourStart: string;
  hourEnd: string;
  capacity: number;
  eventTypeId: number;
  topics: { name: string; imgUrl: string }[];
  categories: {
    id: number;
    name: string;
    eventId: number;
    description: string;
    descriptionDetail: string | null;
    quota: number;
    price: number;
  }[];
  companies: {
    id: number | null;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    websiteUrl: string;
    profileUrl: string;
    about: string | null;
    slug: string;
    products: any[];
  }[];
  speakers: {
    name: string;
    profileImgUrl: string | null;
    position: string;
    about: string | null;
    companyName: string;
    eventId: number;
    slug: string;
  }[];
  ratings: any[];
  eventType: {
    id: number;
    name: string;
  };
}
