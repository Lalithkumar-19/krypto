const Footer = () => {
    return (
        <footer className="bg-[#05022C] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Logo */}
                <div>
                    <p className="text-3xl font-bold font-['Outfit'] capitalize">krypto</p>
                </div>

                {/* Krypto Links */}
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">krypto</p>
                    <nav className="text-[16px] flex flex-col font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <a href="#" className="cursor-pointer">Home</a>
                        <a href="#" className="cursor-pointer">About</a>
                        <a href="#" className="cursor-pointer">Buy NFTs</a>
                        <a href="#" className="cursor-pointer">Sell NFTs</a>
                    </nav>
                </div>

                {/* Market Links */}
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">Market</p>
                    <nav className="text-[16px] font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <p>Browse NFTs</p>
                        <p>Buy NFTs</p>
                        <p>Sell NFTs</p>
                    </nav>
                </div>

                {/* Contact Links */}
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">Contact</p>
                    <nav className="text-[16px] font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <p>Email</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </nav>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-3">Join Our Newsletter</p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-zinc-300/25 text-white placeholder-white/50 font-['Roboto'] text-lg px-3 py-2 rounded-sm"
                        />
                        <button className="w-full bg-blue-950 cursor-pointer rounded-sm py-2 uppercase font-semibold font-['Roboto'] text-2xl leading-7">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
