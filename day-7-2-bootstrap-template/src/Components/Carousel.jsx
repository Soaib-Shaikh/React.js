import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

export default function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <Swiper
        navigation={true}
        autoplay={{ delay: 2500 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper overlay-bottom"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="carousel-slide-wrapper">
            <img className="w-100" src="img/carousel-1.jpg" alt="Slide 1" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="carousel-slide-wrapper">
            <img className="w-100" src="img/carousel-2.jpg" alt="Slide 2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
