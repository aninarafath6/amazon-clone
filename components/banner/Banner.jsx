import style from "./banner.style";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Banner() {
  const isBigScreen = useMediaQuery("(min-width: 1024px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={style.banner}>
      <div className="absolute w-full h-96 hidden lg:flex bg-gradient-to-t from-[#f3f4f6] to-transparent bottom-0  z-20" />

      <Slider autoplay {...settings} className="overflow-hidden">
        <div className="">
          <img
            src="/images/bannerImage1.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          
          <img
            src="/images/bannerImage2.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage3.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage11.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage5.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage6.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage7.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage8.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
        <div className="">
          <img
            src="/images/bannerImage4.jpg"
            alt="bannerImage"
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
