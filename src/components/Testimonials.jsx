// Testimonials.jsx
import React from "react";
import Card from "./Card"; // Import the Card component

const Testimonials = () => {
    return (
        <section className="my-30 h-fit flex flex-col w-full items-center justify-center bg-transparent">
            <h1 className="w-52 h-6 text-center justify-start text-white text-2xl font-semibold font-['Roboto'] uppercase leading-7">
                Testimonials
            </h1>
            <p className="w-[550px] h-32 text-center justify-start mt-3 text-white text-6xl font-normal font-['Outfit'] capitalize leading-[58px]">
                read what others have to say
            </p>
            <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
                <Card image="/images/pic1.png" name="Olivia Cole" />
                <Card image="/images/pic2.png" name="Evan White" />
                <Card image="/images/pic3.png" name="Jessica Page" />
            
            </div>
        </section>
    );
};

export default Testimonials;