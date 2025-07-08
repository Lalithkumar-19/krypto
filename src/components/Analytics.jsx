
const Analytics = () => {
    return (
        <section className="flex  flex-row mt-10 w-full h-[489px]">
            <div className="md:w-[50%] h-fit ">
                <img className="w-full h-full " src="/images/analytics-image.png" alt="hero img" />
            </div>


            <div className="flex flex-col md:w-[50%] pl-10 pt-28 ">
                <span className="w-32 h-7 justify-start text-neutral-200 mb-2 text-xl font-semibold font-['Roboto'] leading-7">Analytics</span>
                <p className="w-full h-28 justify-start text-white text-6xl font-normal font-['Outfit'] capitalize leading-[58px]">built-in analytics to track your nfts</p>
                <p className="w-96 h-24 justify-center text-white text-lg font-normal font-['Roboto'] leading-7 mt-4 pl-1">Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
                <button className="primary-button capitalize ">
                    View Our pricing
                </button>

            </div>

        </section>
    )
}

export default Analytics
