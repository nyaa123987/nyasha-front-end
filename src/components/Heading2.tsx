type Heading2Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Heading2Props) {
  return (
    <h2
      onClick={onClick}
       className="text-xl md:text-4xl md:font-bold mb-[3vh] md:mb-[5vh] text-center"
    >
      {children}
    </h2>
  );
}
