const CTA = () => {
    return (
        <div className="w-full h-96 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 to-emerald-200 rounded-[30px] p-8">
            {/* "Are you ready?" Text */}
            <div className="text-black text-2xl font-normal font-roboto capitalize mb-2">
                are you ready?
            </div>

            {/* Main Heading */}
            <div className="text-white text-5xl font-normal font-['Righteous'] capitalize text-center mb-8 max-w-[500px]">
                be a part of the next big thing
            </div>

            {/* Get Started Button */}
            <button className="w-80 cursor-pointer h-20 px-5 py-6 bg-neutral-950 rounded-[83px] flex items-center justify-center gap-2.5 hover:bg-neutral-900 transition-colors">
                <span className="text-white text-2xl font-semibold font-roboto uppercase leading-7">
                    Get Started
                </span>
            </button>
        </div>
    );
};

export default CTA;