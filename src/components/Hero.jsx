const Hero = () => {
    return (
        <section className="flex flex-col-reverse gap-8 md:flex-row w-full px-4 md:px-0 md:mt-10">
          
            <div className="flex flex-col md:w-[50%] items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-['Outfit'] leading-tight text-white capitalize">
                    discover and collect rare NFTs
                </h1>
                
                <p className="w-full md:w-96 text-white text-lg font-normal font-['Roboto'] leading-7 mt-4 md:mt-3 opacity-80">
                    The most secure marketplace for buying and selling unique crypto assets.
                </p>
                
                <div className="flex flex-col sm:flex-row mt-8 w-full justify-center md:justify-start gap-4">
                    <button className="w-full sm:w-48 md:w-64 h-16 md:h-20 bg-indigo-400 hover:bg-indigo-500 rounded-full uppercase cursor-pointer transition-colors duration-300 font-semibold">
                        Buy NFTs
                    </button>
                    <button className="w-full sm:w-48 md:w-64 h-16 md:h-20 bg-transparent hover:bg-white/10 border border-white rounded-full uppercase cursor-pointer transition-colors duration-300 font-semibold">
                        Sell NFTs
                    </button>
                </div>
            </div>

           
            <div className="md:w-[50%] flex justify-center">
                <img
                    className="w-full max-w-2xl object-contain"
                    src="/images/hero-image.png"
                    alt="NFT collection showcase"
                />
            </div>
        </section>
    )
}

export default Hero;