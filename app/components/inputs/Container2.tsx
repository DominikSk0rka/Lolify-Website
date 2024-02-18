interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container2: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`   
      max-h-w-[1920px]
      mx-auto
      h-full
      w-full
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container2;
