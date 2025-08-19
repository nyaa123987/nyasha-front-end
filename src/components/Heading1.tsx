type Heading1Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Heading1Props) {
  return (
    <h1
      onClick={onClick}
       className="text-3xl md:text-5xl font-bold mb-4"
    >
      {children}
    </h1>
  );
}
