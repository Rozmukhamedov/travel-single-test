export interface Location {
  latitude: string;
  longitude: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
  address_string: string;
  geo_location_id: string;
  geo_location_name: string;
}

export interface RatingDetails {
  rating_1: number;
  rating_2: number;
  rating_3: number;
  rating_4: number;
  rating_5: number;
  count: number;
}

export interface Ratings {
  overall: string;
  rating_image: string;
  num_reviews: number;
  details: RatingDetails;
}

export interface Ranking {
  position: string;
  out_of: string;
  display_string: string;
}

export interface HotelDetail {
  id: number;
  hotel_key: number;
  name: string;
  location: Location;
  ratings: Ratings;
  ranking: Ranking;
  style: unknown;
  awards: unknown[];
}

export interface HotelPhoto {
  id: number;
  hotel_key: number;
  full_path: string;
}

export interface NearbyItem {
  item_index: number;
  title: string;
  description: string;
  distance: string;
}

export interface GptDetails {
  short_description: string;
}

export interface Hotel {
  hotel_key: number;
  name: string;
  main_photo: string;
  town_key: number;
  state_key: number;
  star_key: number;
  star: string;
  star_alt: string;
  hotel_url: string;
  order_number: number;
  widget: null;
  top_hotel_status: boolean;
  top_hotel_order: number;
  tour_operator_id: number;
  short_description: string;
  detail: HotelDetail;
  photos: HotelPhoto[];
  nearbyItems: NearbyItem[];
  gptDetails: GptDetails;
  tags: unknown[];
}

export interface Tour {
  id: string;
  hotel_key: number;
  adult: number;
  child: number;
  nights: number;
  price: string;
  price_old: string;
  state_id: number;
  town_from_id: number;
  town_name: string;
  check_in: string;
  check_out: string;
  tour_key: number;
  converted_price_number: number;
  converted_price_old: string;
  room: string;
  meal: string;
  hotel: Hotel;
}
