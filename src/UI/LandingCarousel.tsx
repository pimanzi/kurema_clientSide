import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LandingCarousel = () => {
  const { t } = useTranslation();
  const slides = [
    {
      image: "/Images/carousel/eye_hub.jpeg",
      text: t("phrase1"),
    },
    {
      image: "/Images/carousel/woman.jpeg",
      text: t("phrase2"),
    },
    {
      image: "/Images/carousel/hallowen_carousel.jpeg",
      text: t("phrase3"),
    },
    {
      image: "/Images/carousel/photograph_carousel.jpeg",
      text: t("phrase4"),
    },
    {
      image: "/Images/carousel/hands_carousel.jpeg",
      text: t("phrase5"),
    },
    {
      image: "/Images/carousel/sculpture1_carousel.jpeg",
      text: t("phrase6"),
    },
    {
      image: "/Images/carousel/sculpture3_carousel.jpeg",
      text: t("phrase7"),
    },
    {
      image: "/Images/carousel/horse_hub.jpeg",
      text: t("phrase8"),
    },
    {
      image: "/Images/carousel/acoustic.jpeg",
      text: t("phrase9"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 2, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="mt-[50px] bg-[#ffcb05] pb-7 pt-5">
      <div className="mx-auto w-[95%]">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl px-2 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="h-[550px] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Text Below Image */}
              <div className="absolute bottom-[20px] left-5 right-5 bg-[#00000088] px-2 py-2 text-center">
                <h2 className="text-lg font-bold text-[#ffcb05] md:text-xl">
                  {slide.text}
                </h2>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingCarousel;
