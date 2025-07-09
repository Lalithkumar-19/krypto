const Featured = () => {
    return (
        <section className="flex flex-col w-full my-10 px-4 md:px-0">
            <h1 className="text-white text-2xl md:text-3xl font-medium font-['Outfit'] uppercase leading-loose mb-5 md:mb-0">
                Featured on
            </h1>
            
            <div className="flex flex-wrap justify-center md:flex-row w-full gap-8 md:gap-4 lg:gap-8 py-8 md:py-6 items-center bg-blue-950 rounded-sm">
                <img
                    src="/images/company-1.png"
                    className="w-40 md:w-48 lg:w-64 h-auto max-h-16 object-contain opacity-75 hover:opacity-100 transition-opacity"
                    alt="company logo"
                />
                <img
                    src="/images/company-2.png"
                    className="w-32 md:w-40 lg:w-56 h-auto max-h-8 object-contain opacity-75 hover:opacity-100 transition-opacity"
                    alt="company logo"
                />
                <img
                    src="/images/company-3.png"
                    className="w-20 md:w-24 h-auto max-h-10 object-contain opacity-75 hover:opacity-100 transition-opacity"
                    alt="company logo"
                />
                <img
                    src="/images/company-4.png"
                    className="w-32 md:w-40 h-auto max-h-8 object-contain opacity-75 hover:opacity-100 transition-opacity"
                    alt="company logo"
                />
            </div>
        </section>
    )
}

export default Featured;