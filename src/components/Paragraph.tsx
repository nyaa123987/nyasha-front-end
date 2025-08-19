type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ParagraphProps) {
  return (
    <p
      onClick={onClick}
       className="text-[13px] md:text-[18px] text-center max-w-xl mx-auto"
    >
      {children}
    </p>
  );
}
