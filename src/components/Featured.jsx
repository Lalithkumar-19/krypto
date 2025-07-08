

const Featured = () => {
    return (
        <section className="flex flex-col w-full my-10 ">
            <h1 className="w-60 h-10 justify-start text-white text-3xl font-medium font-['Outfit'] uppercase leading-loose">Featured on</h1>
            <div className="flex flex-row w-full justify-evenly items-center mt-5  felx-wrap bg-blue-950 h-32 rounded-sm">

                <img
                    src="/images/company-1.png"
                    className="w-64 h-20 opacity-75"
                    alt="featured img"
                />
                <img
                    src="/images/company-2.png"
                    className="w-56 h-7 opacity-75"
                    alt="featured img"
                />
                <img
                    src="/images/company-3.png"
                    className="w-24 h-10 opacity-75"
                    alt="featured img"
                />
                <img
                    src="/images/company-4.png"
                    className="w-40 h-8 opacity-75"
                    alt="featured img"
                />

            </div>
        </section>
    )
}

export default Featured
