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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative w-full overflow-hidden py-5 sm:py-7"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 203, 5, 0.92) 0%, rgba(252, 211, 77, 0.9) 25%, rgba(255, 203, 5, 0.88) 50%, rgba(245, 158, 11, 0.9) 75%, rgba(255, 203, 5, 0.92) 100%), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced Artistic Background Elements */}
      <div className="opacity-8 absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-16 h-48 w-48 animate-pulse rounded-full border-2 border-white/30 shadow-lg"></div>
        <div className="absolute -right-16 bottom-16 h-40 w-40 rotate-45 border-2 border-white/25 shadow-md"></div>
        <div className="absolute -top-8 left-1/4 h-32 w-32 rounded-full border border-white/20"></div>
        <div className="absolute -bottom-8 right-1/4 h-36 w-36 rotate-12 border border-white/25"></div>
        <div className="absolute left-1/3 top-1/3 h-20 w-20 rotate-45 border border-white/15"></div>
        <div className="absolute bottom-1/4 right-1/2 h-24 w-24 animate-pulse rounded-full border border-white/20"></div>
        <div className="absolute bottom-20 left-10 h-28 w-28 rotate-12 border border-white/15"></div>
        <div className="h-18 w-18 absolute right-16 top-1/2 rounded-full border border-white/20"></div>

        {/* Paint brush strokes effect */}
        <div className="absolute left-0 top-0 h-2 w-32 rotate-12 bg-white/10"></div>
        <div className="bg-white/8 absolute right-20 top-10 h-1 w-24 rotate-45"></div>
        <div className="bg-white/8 absolute bottom-20 left-20 h-1 w-28 -rotate-12"></div>
        <div className="rotate-30 absolute bottom-10 right-10 h-2 w-20 bg-white/10"></div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

      <div className="relative mx-auto w-[95%] max-w-7xl px-2 sm:px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl px-1 py-1 sm:px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="h-[300px] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105 sm:h-[400px] md:h-[500px] lg:h-[550px]"
                />
              </div>
              {/* Text Below Image */}
              <div className="absolute bottom-[15px] left-3 right-3 rounded bg-[#00000088] px-2 py-2 text-center backdrop-blur-sm sm:bottom-[20px] sm:left-5 sm:right-5">
                <h2 className="text-sm font-bold leading-tight text-[#ffcb05] sm:text-lg md:text-xl">
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
