const FormWrap2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        flex
        justify-center
        pb-12
        pt-12
        "
    >
      <div
        className="
         dark:!bg-light
            max-w-[650px]
            w-full
            flex
            flex-col
            gap-6
            items-center
            shadow-sm
            shadow-slate-200
            rounded-md
            p-4
            md:p-8"
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap2;
