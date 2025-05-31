import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
import { formatUsdToUzs } from "../utils/utils";

export default function TourCard({
  title,
  location,
  description,
  price,
  image,
  nights,
  adult,
  star,
}: {
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
  nights: number;
  adult: number;
  star: string;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4 border border-[#EBF0F5]">
      <div className="relative">
        <img
          src={`https://travel-api.bpm-tripusk.uz/storage/${image}`}
          alt={title}
          className="w-full h-[200px] object-cover rounded-2xl"
        />
        <div className="absolute top-2 left-2 bg-white text-yellow-500 text-xs px-2 py-1 rounded-md font-semibold">
          ★ <span className="font-medium text-black">{star}</span>
        </div>
        <button
          className="absolute top-2 right-2 bg-white p-1 rounded-full"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <HeartIconSolid className="w-5 h-5 text-[#0054A2]" />
          ) : (
            <HeartIcon className="w-5 h-5 text-[#0054A2]" />
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold leading-snug text-[#141414] mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{location}</p>

        <div className="flex items-center gap-2 text-blue-700 text-lg mb-2 tourcard-icons">
          <span>✈️</span>+<span>🏨</span>+<span>🚗</span>+<span>🍽</span>+
          <span>🎧</span>
        </div>

        <p className="tourcard-description mb-2 line-clamp-2">{description}</p>

        <div className="tourcard-badge-scroll">
          <span className="tourcard-badge">№ 1 из 70 отелей в Ganh Dau</span>
          <span className="tourcard-badge">Очаровательный</span>
          <span className="tourcard-badge">Очень чисто</span>
        </div>

        <div className="tourcard-price-container">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              За {adult}x туристов <br /> {nights} ночей
            </p>
            <p className="text-blue-700 font-bold text-base">
              от {formatUsdToUzs(11000, Number(price))} сум
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
