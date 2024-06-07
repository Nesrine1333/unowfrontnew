import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Header = () => {
  const images = [
    "/images/home/unw.jpeg"];
    const CustomButtonGroup = ({ next, previous }) => {
      return (
        <div className={styles.customButtonGroup}>
          <button className={styles.customButtonLeft} onClick={previous}>
            <img src="/images/carousel/left.png" alt="Previous" className={styles.customButtonImage} />
          </button>
          <button className={styles.customButtonRight} onClick={next}>
            <img src="/images/carousel/right.png" alt="Next" className={styles.customButtonImage} />
          </button>
        </div>
      );
    };
    
    return (
      <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={false}
      arrows= {false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all 5"
      transitionDuration={5000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customButtonGroup={<CustomButtonGroup />}
    >
      <div className={styles.carousel}>
       
          {images.map((i, index) => (
            <div key={index}>
              <img src={i} alt="" srcSet="" className={styles.header} />
            </div>
          ))}
      
      </div>
      </Carousel>
    );
};
