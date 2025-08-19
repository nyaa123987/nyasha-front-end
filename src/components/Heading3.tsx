type Heading3Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Heading3Props) {
  return (
    <h3
      onClick={onClick}
       className="text-sm md:text-2xl md:font-bold mb-[1vh] md:mb-[5vh]"
    >
      {children}
    </h3>
  );
}
