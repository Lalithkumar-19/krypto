
const Hero = () => {
    return (
        <section className="flex  flex-row mt-10  w-full h-[489px]">
            <div className="flex flex-col md:w-[50%] ">
                <h1
                    className="main-heading"
                >discover and collect rare NFTs
                </h1>
                <p
                    className="w-96 justify-center text-white text-lg font-normal font-['Roboto'] leading-7 mt-3 opacity-80">
                    The most secure marketplace for buying and selling unique crypto assets.
                </p>
                <div className="flex flex-row mt-5 w-full justify-start gap-4">
                    <button className="w-64 h-20 bg-indigo-400 rounded-[83px] uppercase cursor-pointer">
                        Buy Nfts
                    </button>
                    <button className="w-64 h-20 bg-transparent border border-white rounded-[83px] uppercase cursor-pointer">
                        Sell Nfts
                    </button>
                </div>

            </div>
            <img
                className="md:w-50% "
                src="/images/hero-image.png"
                alt="hero img" />

        </section>
    )
}

export default Hero;
