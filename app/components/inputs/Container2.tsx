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
      xl:px-20
      md:px-2
      px-4
      h-full
      w-full
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container2;
