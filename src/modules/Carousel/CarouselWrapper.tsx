import React from "react";
import Carousel from "./Carousel";
import Button from "../../shared/Button/Button";
import { data } from "../../shared/data";

const CarouselWrapper = () => {
  const date: number = new Date().getFullYear();
  return (
    <div>
      <Carousel movieRow={false} show={2}>
        {data.map((item) => {
          return (
            <div
              className="flex relative w-full bg-[#3A69DF] rounded-xl h-full overflow-hidden mr-2"
              key={item.id}
            >
              <div className="flex w-32">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-full rounded-tl-xl rounded-bl-xl"
                ></img>
                <div className="absolute right-0 bg-white border rounded-bl-2xl rounded-tr-2xl p-2">
                  <p className="text-sm font-sans whitespace-nowrap text-[#3A69DF] font-bold">
                    {item.status}
                  </p>
                </div>
              </div>
              <div className="text-white w-full flex flex-col ml-2 rounded-xl">
                <div>
                  <p className="text-sm font-sans whitespace-nowrap text-white font-extralight pt-2">
                    {date} - {item.time} minutes
                  </p>
                </div>
                <div className="py-4">
                  <h2 className="text-xl font-sans whitespace-nowrap text-white font-bold">
                    {item.title}
                  </h2>
                </div>
                <div>
                  <p className="text-sm font-sans whitespace-nowrap text-white font-medium ">
                    (Season {item.series})
                  </p>
                </div>
                <div className="py-4">
                  <Button
                    color="gray"
                    className="text-white font-sans normal-case text-m font-light text-ellipsis"
                  >
                    Watch now
                  </Button>
                </div>
              </div>
              <div className="flex absolute bottom-0 w-2/3 bg-gradient-to-r from-yellow-600 via-orange-400 to-red-500 h-2">
                <span className="flex justify-end absolute -bottom-1 w-full ml-2">
                  🔥
                </span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
