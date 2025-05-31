import { PencilIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function THeader() {
  return (
    <div className="bg-white rounded-b-xl flex items-center justify-between px-[10px] py-[20px]">
      {/* Левая кнопка */}
      <button className="p-[13px] flex items-center justify-center bg-[#EBF0F5] rounded-lg shadow-sm hover:bg-[#dce3eb] transition">
        <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
      </button>

      {/* Центр: направление и дата */}
      <div className="flex flex-col items-center px-4 py-2 bg-[#EBF0F5] rounded-xl shadow-sm w-[70%]">
        <span className="text-sm font-medium text-gray-800">
          Москва – Ташкент
        </span>
        <span className="text-xs text-gray-500">28–31 августа, 2 взрослых</span>
      </div>

      {/* Правая кнопка */}
      <button className="p-[13px] flex items-center justify-center bg-[#EBF0F5] rounded-lg shadow-sm hover:bg-[#dce3eb] transition">
        <PencilIcon className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
