
const PlatformAccess = () => {
    return (
        <section className="flex  flex-row-reverse mt-10 w-full h-[489px]">
            <div className="md:w-[50%] h-fit ">
                <img className="w-full h-full " src="/images/access-image.png" alt="hero img" />
            </div>


            <div className="flex flex-col md:w-[50%] pl-10 pt-28 ">
                <span className="w-32 h-7 justify-start text-neutral-200 mb-2 text-xl font-semibold font-['Roboto'] leading-7">24/7 access</span>
                <p className="w-full h-28 justify-start text-white text-6xl font-normal font-['Outfit'] capitalize leading-[58px]">sell your NFTs from anywhere at any time</p>
                <p className="w-96 h-24 justify-center text-white text-lg font-normal font-['Roboto'] leading-7 mt-4 ">
                With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time.</p>
            <button className="primary-button capitalize ">
                Get started
            </button>

        </div>

        </section >
    )
}

export default PlatformAccess
