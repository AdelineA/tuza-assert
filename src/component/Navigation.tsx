import React from "react";
import house from '../assets/img/house.jpeg'
import LockCard from "./card/LockCard";
import Language from "./Language";

function Navigation() {
  return (
    <div className="h-screen text-white">
      <img
        src={house}
        alt="background-image"
        className="object-cover w-full brightness-50"
      />

      <div className="absolute left-2 lg:left-1/2 flex text-center justify-center gap-3 text-lg font-bold top-4">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/services">Services</a>
        <a href="/property">Property Managment</a>
        <a href="/investors">Investors</a>
        <a href="/buy">Buy Plot</a>
        <Language/>
      </div>

      <div className="absolute top-16 lg:top-1/3 left-5 lg:left-1/3 flex flex-col justify-center text-center font-bold uppercase gap-5">
        <h1 className="text-4xl">Tuza assets ltd</h1>
        <h1 className="text-2xl">
          Propety Managment for Rwandan Diaspora and <br /> for the Diplomates
          in Rwanda
        </h1>
      </div>
      <div className="absolute lg:bottom-20 left-10 ">
        <LockCard/>
      </div>
    </div>
  );
}

export default Navigation;
