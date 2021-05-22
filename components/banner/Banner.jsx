import style from "./banner.style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";


function Banner() {
    const isBigScreen = useMediaQuery({
      query: "(min-width: 1024px)",
    });
  const settings = {
    dots: true ,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className={style.banner}>
      {isBigScreen && <div className={style.fade} />}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
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
      </Carousel>
    </div>
  );
}

export default Banner;
