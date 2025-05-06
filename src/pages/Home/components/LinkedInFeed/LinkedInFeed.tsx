import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEUwzZ-RC5Etw/feedshare-shrink_1280/feedshare-shrink_1280/0/1732563007704?e=1746662400&v=beta&t=846L0I60wRwrEbKRI-DSIV8SpZc865U6qx83zegJSvk",
    link: "https://www.linkedin.com/posts/copilot-net-llc_engineering-osp-quality-activity-7266897423480823809-IkKI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ96UMBRFP28IWkFRVKBFqOCcRYAvXoD7Y",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEh_WOnW2ZFZA/feedshare-shrink_800/B56ZW0jv3eHoAg-/0/1742491025494?e=1748476800&v=beta&t=BR_e-rP7mWe67FEY1MMjfx4t7Q83Kjk6SBLEDnJKnZ4",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7308537081213947905/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQF-0InxycV6CA/feedshare-shrink_1280/B4EZaIHshtGQAo-/0/1746040442767?e=1749686400&v=beta&t=k5t1fAbDGfRKXLSKcdHO5hnFqafhqSh7u59zqC5r6xM",
    link: "https://www.linkedin.com/posts/copilot-net-llc_rus2bill-telecom-networkplanning-activity-7323424417428946946-JGrL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqxc5IBLiJOZLGJUaKla07rJblxG402310",
  },
];

const LinkedInFeed = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "40px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  return (
    <div className="mx-auto max-w-6xl overflow-hidden md:w-[90%]">
      <div className="mt-5 flex w-full items-center justify-center gap-3 text-center text-[24px] md:mt-20 md:text-[40px]">
        <img
          src="/linkedin_img.png"
          alt="linked-in"
          className="size-[150px] md:size-[200px]"
        />{" "}
        Feed
      </div>
      {/* Grid layout for large screens */}
      <div className="my-20 mt-0 hidden grid-cols-3 gap-4 md:grid">
        {images.map(({ image, link }, index) => (
          <a href={link} target="_blank" rel="noreferrer" key={index}>
            <img
              key={index}
              src={image}
              alt="LinkedIn Post Preview"
              width="504"
              height="818"
              className="rounded-xl shadow-lg"
            />
          </a>
        ))}
      </div>

      {/* Carousel for small screens */}
      <div className="my-20 mt-0 w-full md:hidden">
        <Slider {...settings}>
          {images.map(({ image, link }, index) => (
            <div key={index} className="flex justify-center px-2">
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={image}
                  alt="LinkedIn Post Preview"
                  className="w-full max-w-md rounded-xl shadow-lg"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LinkedInFeed;
