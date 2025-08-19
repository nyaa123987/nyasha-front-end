type Paragraph2Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Paragraph2Props) {
  return (
    <p
      onClick={onClick}
       className="text-[10px] md:text-[18px] max-w-xl mx-auto"
    >
      {children}
    </p>
  );
}
