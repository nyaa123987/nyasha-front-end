type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick }: HeadingProps) {
  return (
    <h1
      onClick={onClick}
       className="text-4xl md:text-6xl font-bold mb-4"
    >
      {children}
    </h1>
  );
}
