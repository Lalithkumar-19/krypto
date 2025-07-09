const Footer = () => {
    return (
        <footer className="bg-transparent text-white px-6 py-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
            
                <div>
                    <p className="text-3xl font-bold font-['Outfit'] capitalize">krypto</p>
                </div>

              
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">krypto</p>
                    <nav className="text-[16px] flex flex-col font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <a href="#" className="cursor-pointer hover:opacity-100 transition-opacity">Home</a>
                        <a href="#" className="cursor-pointer hover:opacity-100 transition-opacity">About</a>
                        <a href="#" className="cursor-pointer hover:opacity-100 transition-opacity">Buy NFTs</a>
                        <a href="#" className="cursor-pointer hover:opacity-100 transition-opacity">Sell NFTs</a>
                    </nav>
                </div>

            
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">Market</p>
                    <nav className="text-[16px] font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Browse NFTs</p>
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Buy NFTs</p>
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Sell NFTs</p>
                    </nav>
                </div>

            
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-2">Contact</p>
                    <nav className="text-[16px] font-normal font-['Roboto'] leading-loose space-y-1 opacity-80">
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Email</p>
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">LinkedIn</p>
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Instagram</p>
                        <p className="cursor-pointer hover:opacity-100 transition-opacity">Twitter</p>
                    </nav>
                </div>

           
                <div>
                    <p className="text-2xl font-bold font-['Outfit'] capitalize mb-3">Join Our Newsletter</p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-white/10 text-white placeholder-white/50 font-['Roboto'] text-lg px-3 py-2 rounded-sm border border-white/20 focus:outline-none focus:border-white/50 transition-colors"
                        />
                        <button className="w-full bg-white/10 hover:bg-white/20 cursor-pointer rounded-sm py-2 uppercase font-semibold font-['Roboto'] text-2xl leading-7 transition-colors">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;