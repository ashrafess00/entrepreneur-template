import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Autoplay } from "swiper/modules";

export function Reviews() {
  return (
    <div className="p-20 pb-[15rem] pt-[10rem] bg-[#e9e9e7]  rounded-tl-4xl rounded-tr-4xl z-50  w-full text-slate-900">
      <h3 className="text-2xl font-semibold mb-10">Reviews</h3>
      <div className="">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {/* Slide one  */}
          <SwiperSlide>
            <div className="grid grid-cols-3 text-lg">
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsome text some text, some text, some text some text some
                  texto some text some textsome textsome textsome textsome
                  textsome textsome textsome text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsoxt, some text some text some texto some text some
                  textsome textsome textsome textsome textsome textsome textsome
                  text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsome text, some text, some text, some text some text some
                  texto some text some textsome textsome textsome textsome
                  textsome textsome textsome text, some text, some text, some
                  text some text some texto some text some textsome textsome
                  textsome textsome textsome textsome textsome text
                </p>
                <em>- Someone</em>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide two  */}
          <SwiperSlide>
            <div className="grid grid-cols-3 text-lg">
              <div>
                <p>
                  some text, somme textsome textsome textsome textsome textsome
                  textsome text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsoxt, some text some text some texto some text some
                  textsome textsome textsome textsome textsome textsome textsome
                  text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsome text, some text, some text, some text some text some
                  texto some text some textsome textsome textsome textsome
                  textsome textsome textsome text, some text, some text, some
                  text some text some texto some text some textsome textsome
                  textsome textsome textsome textsome textsome text
                </p>
                <em>- Someone</em>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide three  */}
          <SwiperSlide>
            <div className="grid grid-cols-3 text-lg">
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsome text some text, some text, some text some text some
                  texto some text some textsome textsome textsome textsome
                  textsome textsome textsome text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsoxt, some text some text some texto some text some
                  textsome textsome textsome textsome textsome textsome textsome
                  text
                </p>
                <em>- Someone</em>
              </div>
              <div>
                <p>
                  some text, some text, some text some text some texto some text
                  some textsome textsome textsome textsome textsome textsome
                  textsome text, some text, some text, some text some text some
                  texto some text some textsome textsome textsome textsome
                  textsome textsome textsome text, some text, some text, some
                  text some text some texto some text some textsome textsome
                  textsome textsome textsome textsome textsome text
                </p>
                <em>- Someone</em>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
