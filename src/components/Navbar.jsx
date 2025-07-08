
const Navbar = () => {
    const navlist = ["About", "pricing", "Contact", "Buy Nfts"]
    return (

        <div className="flex flex-row w-full mt-5">
            <div className="flex flex-row justify-between w-full">
                <span className="w-[md:w-50%] h-8 justify-start text-white text-xl font-bold font-['Outfit'] uppercase leading-7">
                    Krypto
                </span>
                <ul className="flex w-[50%] justify-evenly gap-10 ">
                    {navlist.map((item, ind) => (
                        <li key={ind} className="opacity-80 cursor-pointer w-28 h-8 justify-start text-white text-xl font-normal font-['Roboto'] leading-7">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Navbar
