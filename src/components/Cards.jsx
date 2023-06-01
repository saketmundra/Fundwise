import React from "react";
import { double, single, triple } from "../assets";

const Cards = () => {
  return (
    <>
      <div className="w-full py-[3rem] px-4 bg-white">
        <div className="text-[#00df9a] font-bold text-4xl text-center">
          Subscribe to opportunities curated for you
        </div>
        <br />
        <br />
        <br />
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 ">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src="https://ds0zssdpdgkzg.cloudfront.net/Equity_bd_50c3a05367_674af5ea2a.webp"
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Equity linked instruments
            </h2>
            <p className="text-center text-xl ">
              Subscribe to gain access to exclusive high return opportunities in
              growing businesses.
            </p>
            <div>
              <p className="py-2 border-b mx-8 mt-8">Expected Return</p>
              <p className="py-2 border-b mx-8 ">Risk</p>
              <p className="py-2 border-b mx-8 ">Liquidity</p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src="https://ds0zssdpdgkzg.cloudfront.net/Fixed_income_bd_b932249cc7_23f5279964.webp"
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Fixed Income instruments
            </h2>
            <p className="text-center text-xl ">
              Enjoy regular payouts and dividends with high yield investment opportunities.
            </p>
            <div>
              <p className="py-2 border-b mx-8 mt-8">Expected Return</p>
              <p className="py-2 border-b mx-8 ">Risk</p>
              <p className="py-2 border-b mx-8 ">Liquidity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
