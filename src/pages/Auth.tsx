import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AuthPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const images: string[] = ["woman_hub.jpeg", "horse_hub.jpeg", "eye_hub.jpeg"];

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
      {/* voerlay div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(rgba(255, 203, 69, 0.4), rgba(0, 0, 0, 0.7))",
        }}
      />

      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[50%]"></div>
    </div>
  );
}
