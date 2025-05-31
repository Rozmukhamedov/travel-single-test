// src/queries/useTours.ts
import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";

export interface TourQueryParams {
  town_from_inc: number;
  tour_operator_id: number;
  state_id: number;
  checkin: string;
  nights: number;
  towns: number[];
  adult: number;
  childs: number;
  tour_somo_id: number;
  page: number;
  lang: string;
}

const fetchTours = async (params: TourQueryParams) => {
  const { data } = await api.get("/tour-prices-content2", { params });
  return data;
};

export const useTours = (params: TourQueryParams) => {
  return useQuery({
    queryKey: ["tours", params],
    queryFn: () => fetchTours(params),
    placeholderData: (previousData) => previousData,
  });
};
