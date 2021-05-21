import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from "./banner.style";

function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.fade} />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
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
            src="/images/bannerImage4.jpg"
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
      </Carousel>
    </div>
  );
}

export default Banner;
