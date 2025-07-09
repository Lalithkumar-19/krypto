import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navlist = ["About", "pricing", "Contact", "Buy Nfts"];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            id="navbar"
            className={`flex flex-row w-full sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#17144c]" : "bg-transparent"
                }`}
        >
            <div className="flex flex-row justify-between w-full items-center p-4 md:p-5">
                <span className="text-white text-xl font-bold font-['Outfit'] uppercase leading-7">
                    Krypto
                </span>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex w-auto justify-evenly gap-10">
                    {navlist.map((item, ind) => (
                        <li
                            key={ind}
                            className="opacity-80 hover:opacity-100 cursor-pointer w-28 h-8 justify-start text-white text-xl font-normal font-['Roboto'] leading-7"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#3B5877] bg-opacity-95">
                    <ul className="flex flex-col items-center py-4">
                        {navlist.map((item, ind) => (
                            <li
                                key={ind}
                                className="w-full text-center py-3 hover:bg-gray-700 cursor-pointer text-white text-xl font-normal font-['Roboto'] leading-7"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;