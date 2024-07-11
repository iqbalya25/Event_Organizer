// src/types/eventTypes.ts
export interface MonthEvents {
  id: number;
  name: string;
  address: string;
  city: string;
  websiteUrl: string;
  imageUrl: string;
  description: string | null;
  descriptionDetail: string | null;
  dateStart: string;
  dateEnd: string;
  hourStart: string;
  hourEnd: string;
  capacity: number;
  eventTypeId: number;
  topics: Topic[];
  categories: Category[];
  companies: Company[];
  speakers: Speaker[];
  ratings: Rating[];
  eventType: EventType;
}

interface Topic {
  name: string;
  imgUrl: string;
}

interface Category {
  id: number;
  name: string;
  eventId: number;
  description: string;
  descriptionDetail: string | null;
  quota: number;
  price: number;
}

interface Company {
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
}

interface Speaker {
  name: string;
  profileImgUrl: string | null;
  position: string;
  about: string | null;
  companyName: string;
  eventId: number;
  slug: string;
}

interface Rating {
  userId: number | null;
  eventId: number | null;
  rating: number;
  review: string;
}

interface EventType {
  id: number;
  name: string;
}
