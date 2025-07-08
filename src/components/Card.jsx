// Card.jsx
import React from "react";

const Card = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center relative w-80 mt-10 h-[250px] bg-blue-950 rounded-[20px]">
            <img
                src={image}
                alt="profile"
                className="w-32 h-32 rounded-full object-cover absolute -top-16 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-full flex-col items-center mt-10">
                <p className="w-44 mt-10 h-6 text-center justify-start text-white text-2xl font-bold font-['Roboto'] capitalize leading-7 tracking-[3.75px]">
                    {name}
                </p>
                <p className="w-72 h-24 text-center justify-start text-white text-xl font-normal font-['Roboto']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
                </p>
            </div>
        </div>
    );
};

export default Card;