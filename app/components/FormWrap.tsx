const FormWrap = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div className="
        min-h-fit
        flex
        justify-center
        pb-12
        pt-24">
            <div className="
            max-w-[650px]
            w-full
            flex
            flex-col
            gap-6
            items-center
            shadow-slate-200
            shadow-lg
            rounded-2xl
            bg-white
            p-4
            md:p-8">
                {children}
            </div>
        </div>
     );
}
 
export default FormWrap;