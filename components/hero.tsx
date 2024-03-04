"use client";

import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/glow-bottom.svg";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const baseDate = new Date("2023-01-01");
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - baseDate.getTime();
  const baseNumber = 4700000 + Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const [currentNumber, setCurrentNumber] = useState(baseNumber);

  useEffect(() => {
    // Calculate the number of days since a fixed date, e.g., January 1, 2023
    const startDate = new Date("2023-01-01");
    const today = new Date();
    const daysDifference = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Increase by 20% based on the days difference
    const increase = Math.floor(baseNumber * 0.1 * daysDifference);
    const newNumber = baseNumber + increase;

    // Update the number in real-time every second
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => Math.floor(prevNumber + increase / (24 * 60 * 60)));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  // Format the number to the desired format (e.g., 4,7,00,000)
  const formattedNumber = currentNumber.toLocaleString("en-IN");

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-32 pb-8 md:pt-52 md:pb-8">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="mb-6"
              data-aos="fade-down"
            >
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <a
                  className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow"
                  href="https://github.com/explodinggradients/ragas"
                >
                  <span className="relative inline-flex items-center">
                    Checkout our GitHub{" "}
                    <svg
                      className="fill-current ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                    >
                      <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Open Source Evaluation Frameworks <br /> for RAG Applications
            </h1>
            <p
              className="text-xl text-slate-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Processing <span className="text-2xl font-extrabold">{formattedNumber}</span> evaluations monthly
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe5qC9uqhiHAShBLTPPmidqvb0ryJO74FBdY84NsjK0zf36Lw/viewform"
                >
                  Get Demo{" "}
                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out"
                  href="https://docs.ragas.io/"
                >
                  <svg
                    className="shrink-0 fill-slate-300 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Read the docs</span>
                </a>
              </div>
            </div>
          </div>
          <h1 className=" mt-3 text-center font-bold text-xl md:text-xl text-white    py-2">
            Engineers from these companies use our library to evaluate their RAG pipelines
          </h1>
        </div>
      </div>
    </section>
  );
}
