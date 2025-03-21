import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHYMObPiH73iA/feedshare-shrink_800/feedshare-shrink_800/0/1725143448456?e=1743638400&v=beta&t=fa4OJ_Id9aYI-Urfvx1uS9XnKGmLDptmA0hTCfQRSyk",
    link: "https://www.linkedin.com/posts/copilot-net-llc_copilotnetworks-underground-aerial-activity-7236797265284063232-ZVCB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZ96UMBRFP28IWkFRVKBFqOCcRYAvXoD7Y",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEUwzZ-RC5Etw/feedshare-shrink_1280/feedshare-shrink_1280/0/1732563007704?e=1743638400&v=beta&t=J9CjoPQ_iaxi9q9kuS66xNtHguLscnb4ZHjafirr4Gc",
    link: "https://www.linkedin.com/posts/copilot-net-llc_engineering-osp-quality-activity-7266897423480823809-IkKI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ96UMBRFP28IWkFRVKBFqOCcRYAvXoD7Y",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGxWcV9J3INfw/feedshare-shrink_1280/feedshare-shrink_1280/0/1726079085144?e=1743638400&v=beta&t=OeDzOHQimrfK8LDxK0EX_op0baeuM6akyigcZkknY60",
    link: "https://www.linkedin.com/posts/copilot-net-llc_broadband-survey-copilotnetworks-activity-7239700417847115777-mnw7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ96UMBRFP28IWkFRVKBFqOCcRYAvXoD7Y",
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
