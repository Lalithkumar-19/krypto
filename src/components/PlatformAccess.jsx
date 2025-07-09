const PlatformAccess = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row-reverse w-full md:h-[489px] mt-10">
          
            <div className="md:w-[50%] w-full h-full">
                <img 
                    className="w-full h-full object-cover" 
                    src="/images/access-image.png" 
                    alt="platform access illustration" 
                />
            </div>

          
            <div className="flex flex-col md:w-[50%] w-full px-5 md:pl-10 pt-10 md:pt-28 pb-10 md:pb-0">
                <span className="text-neutral-200 mb-2 text-xl font-semibold font-['Roboto'] leading-7">
                    24/7 access
                </span>
                
                <h2 className="w-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Outfit'] capitalize leading-[1.2] md:leading-[58px]">
                    sell your NFTs from anywhere at any time
                </h2>
                
                <p className="w-full md:w-96 text-white text-lg font-normal font-['Roboto'] leading-7 mt-4">
                    With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time.
                </p>
                
                <button className="primary-button capitalize mt-6 md:mt-8 w-full sm:w-auto px-6 py-3">
                    Get started
                </button>
            </div>
        </section>
    )
}

export default PlatformAccess