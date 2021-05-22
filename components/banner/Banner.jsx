import Slider from "react-slick";
import style from "./banner.style";
        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";
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
      <Slider autoplay {...settings} className='overflow-hidden'>
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
