"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";

import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import { Tweet } from "react-tweet";

interface Item {
  img: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  return (
    <section className="flex justify-center items-center">
      <ul
        role="list"
        className="flex flex-col space-y-4  sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-8 ml-4 mr-20"
      >
        <li className="max-w-xl">
          <Tweet id="1764363199049072743" />
        </li>
        <li className="max-w-xl">
          <Tweet id="1699156822643671427" />
        </li>
        <li className="max-w-xl">
          <Tweet id="1724490887147978793" />
        </li>
      </ul>
    </section>
  );
}
