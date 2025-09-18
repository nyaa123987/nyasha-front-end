type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, className = "", onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`capitalize cursor-pointer text-[12px] md:text-xl px-2 py-1 md:px-4 md:py-2 
        bg-white text-[#7B1FEA] rounded shadow-lg 
        hover:bg-[#7B1FEA] hover:text-white transition active:opacity-[0.5] 
        ${className}`}
    >
      {children}
    </button>
  );
}
