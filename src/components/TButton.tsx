import type { ReactNode } from "react";
import classNames from "classnames";

interface TButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary";
  icon?: ReactNode;
}

export default function TButton({
  children,
  onClick,
  variant = "default",
  icon,
}: TButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-[16px] leading-[18px] font-normal font-manrope text-center gap-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-offset-0 active:scale-95";

  const sizeStyles =
    variant === "primary"
      ? "w-[120px] h-[50px] px-4 bg-[#0054A2] text-white hover:bg-[#003f7d]"
      : "w-[160px] h-[50px] px-4 bg-white text-black border border-gray-200 hover:bg-gray-100";

  return (
    <button onClick={onClick} className={classNames(baseStyles, sizeStyles)}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </button>
  );
}
