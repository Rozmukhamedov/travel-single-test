import logo from "../assets/images/logo.svg";

export default function TTourOperatorInfo() {
  return (
    <div className="bg-white rounded-2xl px-[13px] mb-[10px]">
      <div className="flex items-center gap-4 py-[11px]">
        <img
          src={logo}
          alt="Prestige Travel"
          width={106}
          height={37}
          className="object-contain"
        />
        <div className="w-px h-[37px] bg-blue-500" />
        <p className="text-[14px] font-medium leading-[18.47px] tracking-[0.005em] text-black font-urbanist">
          Тур предоставляется надёжным туроператором
        </p>
      </div>
      <div className="h-px w-full bg-gray-200" />
      <p className="text-center text-[16px] font-medium leading-[125%] tracking-[0.005em] text-black py-[11px] font-urbanist">
        Мы подобрали для вас только лучшие отели
      </p>
    </div>
  );
}
