import React from "react";
import house from "../assets/house.jpeg";

function Navigation() {
  return (
    <div className="h-screen text-white">
      <img
        src={house}
        alt="background-image"
        className="object-cover w-full brightness-50"
      />

      <div className="absolute left-1/2 flex text-center justify-center gap-3 text-xl font-bold top-4">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/services">Services</a>
        <a href="/property">Property Managment</a>
        <a href="/investors">Investors</a>
        <a href="/buy">Buy Plot</a>
      </div>

      <div className="absolute top-1/2 left-1/3 flex flex-col justify-center text-center font-bold uppercase gap-5">
        <h1 className="text-4xl">Tuza assets ltd</h1>
        <h1 className="text-2xl">
          Propety Managment for Rwandan Diaspora and <br /> for the Diplomates
          in Rwanda
        </h1>
      </div>
    </div>
  );
}

export default Navigation;
