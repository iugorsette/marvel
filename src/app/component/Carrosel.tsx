import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Events } from "../services/events";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export const EventCarousel = () => {
  const events: any[] = Events();

  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        infiniteLoop={true}
        emulateTouch={true}
        interval={5000}
        autoPlay={true}
        showArrows={false}
      >
        {events.map((event) => (
          <div key={event.id}>
            <div className="h-72 w-full bg-zinc-900 bg-center">
              <Image
                src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                alt={event.name}
                width={1048}
                height={1048}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
