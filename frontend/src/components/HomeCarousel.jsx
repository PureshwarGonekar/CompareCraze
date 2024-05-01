import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel className=" h-[700px]">
      <div className="relative h-full w-full">
        <img
          src={require("../assets/images/mobilebg.jpg")}
          alt="Mobile Phones"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Compare the Latest Mobile Phones
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Find the perfect mobile phone for your needs. Compare prices,
              specifications, and features of the latest smartphones from top
              brands.
            </Typography>
            <Button size="lg" color="white" href="/mainpage">
              Explore Mobile Phones
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={require("../assets/images/laptopsbg.jpg")}
          alt="Laptops"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Find the Perfect Laptop
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover the best laptops for work, gaming, or everyday use.
              Compare prices, specifications, and user reviews to make an
              informed decision.
            </Typography>
            <Button size="lg" color="white">
              Explore Laptops
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={require("../assets/images/smartwatchbg.jpg")}
          alt="Smartwatches"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Stay Connected with the Latest Smartwatches
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Compare smartwatches from leading brands and find the perfect
              wearable device to track your fitness, receive notifications, and
              stay connected on the go.
            </Typography>
            <Button size="lg" color="white">
              Explore Smartwatches
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
