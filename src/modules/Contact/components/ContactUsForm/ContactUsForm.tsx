import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useContactUsForm from "./useContactUsForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Construction",
  "Transportation",
  "Hospitality",
  "Entertainment",
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Consulting",
  "Support & Maintenance",
  "Cloud Services",
  "Custom Software Development",
];

const sliderImages = [
  { src: "/contact/USOffice.png", alt: "USA Office" },
  { src: "/contact/INOffice.png", alt: "India Office" },
];

export default function ContactForm() {
  const {
    handleChange,
    handleSubmit,
    phoneInputCustomStyles,
    formData,
    errors,
    setFormData,
  } = useContactUsForm();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="mx-auto mt-[40px] mb-[200px] flex w-[90%] max-w-6xl flex-col items-center gap-8 overflow-hidden rounded-lg bg-white md:mt-[160px] md:gap-0 lg:flex-row">
      {/* Left side - Image */}
      <div className="relative w-full py-10 md:h-auto lg:w-1/2">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="p-2">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Right side - Form */}
      <div className="w-full p-4 sm:p-8 lg:w-1/2">
        <h1 className="font-Lato mb-8 text-left text-4xl font-bold">
          Get in touch
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 block">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Industry Field */}
            <div>
              <label htmlFor="industry" className="mb-2 block">
                Select Industry
              </label>
              <div className="relative">
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full appearance-none rounded-md border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.industry ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="mb-2 block">
                Phone number
              </label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) =>
                  setFormData({ ...formData, phone: value as string })
                }
                className={`w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              />
            </div>
          </div>

          {/* Services Field */}
          <div>
            <label htmlFor="service" className="mb-2 block">
              Services you need help with
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full appearance-none rounded-md border px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.service ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">{errors.service}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="mb-2 block">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="rounded-full bg-[#1e2e4a] px-8 py-3 font-medium text-white transition-colors hover:bg-[#162238] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Send
            </button>
          </div>
          <style>{phoneInputCustomStyles}</style>
        </form>
      </div>
    </div>
  );
}
