import {
  AdjustmentsHorizontalIcon,
  ArrowDownIcon,
  BarsArrowDownIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import type { Tour } from "../types/types";
import { useState, type Dispatch, type SetStateAction } from "react";

export default function TSortModal({
  show,
  selected,
  onSelect,
  onClose,
  tours,
  setTours,
}: {
  show: boolean;
  selected: string;
  onSelect: (value: string) => void;
  onClose: () => void;
  tours: Tour[];
  setTours: Dispatch<SetStateAction<Tour[]>>;
}) {
  const [sortedTours, setSortedTours] = useState<Tour[]>([]);
  if (!show) return null;

  const options = [
    {
      label: "Рекомендуемые",
      icon: <StarIcon className="w-[18px] h-[18px] text-blue-600" />,
      sortBy: "rating",
      order: "desc",
    },
    {
      label: "Самые дешевые",
      icon: <ArrowDownIcon className="w-[18px] h-[18px] text-blue-600" />,
      sortBy: "price",
      order: "asc",
    },
    {
      label: "Сначала дорогие",
      icon: <BarsArrowDownIcon className="w-[18px] h-[18px] text-blue-600" />,
      sortBy: "price",
      order: "desc",
    },
    {
      label: "Низкая цена и высокий рейтинг",
      icon: (
        <AdjustmentsHorizontalIcon className="w-[18px] h-[18px] text-blue-600" />
      ),
      sortBy: "priceThenRating",
      order: "asc",
    },
  ];

  function sortTours(tours: Tour[], sortBy: string, order: "asc" | "desc") {
    return [...tours].sort((a, b) => {
      if (sortBy === "price") {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return order === "asc" ? priceA - priceB : priceB - priceA;
      }

      if (sortBy === "rating") {
        const ratingA = parseFloat(a.hotel.detail?.ratings.overall || "0");
        const ratingB = parseFloat(b.hotel.detail?.ratings.overall || "0");
        return order === "asc" ? ratingA - ratingB : ratingB - ratingA;
      }

      if (sortBy === "priceThenRating") {
        const priceDiff = parseFloat(a.price) - parseFloat(b.price);
        if (priceDiff !== 0) return order === "asc" ? priceDiff : -priceDiff;

        const ratingA = parseFloat(a.hotel.detail?.ratings.overall || "0");
        const ratingB = parseFloat(b.hotel.detail?.ratings.overall || "0");
        return ratingB - ratingA;
      }

      if (sortBy === "date") {
        const dateA = new Date(
          `${a.check_in.slice(0, 4)}-${a.check_in.slice(
            4,
            6
          )}-${a.check_in.slice(6, 8)}`
        ).getTime();
        const dateB = new Date(
          `${b.check_in.slice(0, 4)}-${b.check_in.slice(
            4,
            6
          )}-${b.check_in.slice(6, 8)}`
        ).getTime();
        return order === "asc" ? dateA - dateB : dateB - dateA;
      }

      return 0;
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end bg-[#09101D99] backdrop-blur-md">
      <div className="bg-[#EBF0F5] w-full rounded-t-2xl p-5 max-w-md shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="w-[50px] h-[6px] bg-blue-600 rounded-[10px]"></div>
        </div>
        <h2 className="text-[18px] font-semibold leading-[22px] text-gray-900 mb-[15px] font-urbanist">
          Сортировка
        </h2>
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <label
              key={opt.label}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer bg-white"
            >
              <span className="flex items-center gap-2 text-[17px] leading-[22px] text-[#141414] font-urbanist">
                {opt.icon}
                {opt.label}
              </span>
              <input
                type="radio"
                checked={selected === opt.label}
                onChange={() => {
                  onSelect(opt.label);
                  const sorted = sortTours(
                    tours,
                    opt.sortBy,
                    opt.order as "asc" | "desc"
                  );

                  setSortedTours(sorted);
                }}
                className="accent-[#0077FF] w-6 h-6 max-w-[20px] max-h-[20px]"
              />
            </label>
          ))}
        </div>
        <button
          onClick={() => {
            setTours(sortedTours);
            onClose();
          }}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 font-urbanist"
        >
          Применить
        </button>
      </div>
    </div>
  );
}
