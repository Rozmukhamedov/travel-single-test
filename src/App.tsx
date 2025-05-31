import "./App.css";
import { useEffect, useState, type CSSProperties } from "react";
import TButton from "./components/TButton";
import TSortModal from "./components/TSortModal";
import TTourCard from "./components/TTourCard";
import THeader from "./components/THeader";
import TTourOperatorInfo from "./components/TTourOperatorInfo";
import {
  FunnelIcon,
  BarsArrowDownIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { useTours } from "./hook/queries/useTours";
import { PuffLoader } from "react-spinners";
import type { Tour } from "./types/types";

export default function Home() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState("Рекомендуемые");

  const { data, isLoading, error } = useTours({
    town_from_inc: 1853,
    tour_operator_id: 4,
    state_id: 9,
    checkin: "20250712",
    nights: 7,
    towns: [427],
    adult: 1,
    childs: 0,
    tour_somo_id: 427,
    page: 1,
    lang: "ru",
  });

  useEffect(() => {
    if (data?.data) {
      setTours(data.data);
    }
  }, [data]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#0054A2",
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <PuffLoader
          size={150}
          color={"#0054A2"}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );

  return (
    <div className="max-w-md mx-auto bg-[#EBF0F5] h-screen pb-20">
      <THeader />
      <div className="p-[10px]">
        <TTourOperatorInfo />
        <div className="flex gap-2 mb-4">
          <TButton icon={<FunnelIcon className="w-5 h-5 text-[#0054A2]" />}>
            Фильтры
          </TButton>
          <TButton
            onClick={() => setShowModal(true)}
            icon={<BarsArrowDownIcon className="w-5 h-5 text-[#0054A2]" />}
          >
            Сортировка
          </TButton>
          <TButton
            variant="primary"
            icon={<MapIcon className="w-5 h-5 text-white" />}
          >
            Карта
          </TButton>
        </div>
        {tours?.map((tour: Tour) => (
          <TTourCard
            key={tour.id}
            title={tour.hotel.name}
            location={`${tour.hotel.detail.location.country}, ${tour.hotel.detail.location.city}`}
            description={tour.hotel.short_description}
            price={tour.price}
            image={tour.hotel.main_photo}
            nights={tour.nights}
            adult={tour.adult}
            star={tour.hotel.star_alt}
          />
        ))}
        <TSortModal
          show={showModal}
          onClose={() => setShowModal(false)}
          selected={sort}
          onSelect={setSort}
          tours={tours}
          setTours={setTours}
        />
      </div>
    </div>
  );
}
