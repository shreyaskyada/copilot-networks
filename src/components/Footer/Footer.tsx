const Footer = () => {
  return (
    <div
      className="font-Lato relative h-[920px] bg-[#002235] bg-cover bg-bottom bg-no-repeat text-white md:h-[780px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.44),rgba(0,0,0,0.44)),url(footer.png)",
      }}
    >
      <div className="z-50 flex flex-col pt-[60px] lg:pt-[130px]">
        <div className="font-Lato mx-auto flex w-[90%] max-w-6xl flex-wrap items-center justify-center gap-1 text-[20px] sm:w-[50%] sm:text-[30px] md:w-full md:gap-[12px] md:text-[40px] md:leading-[54px]">
          We value <span className="border-b-2 font-bold">Partnerships</span>{" "}
          over
          <span className="border-b-2 font-bold">Purchase Orders</span>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <button className="cursor-pointer rounded-full bg-white p-4 text-black">
            Become a Partner
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full overflow-hidden px-0 text-white max-md:mt-[100px]">
        <div className="mx-auto w-[90%] max-w-7xl">
          {/* Background image with network effect */}
          <hr className="block md:hidden"></hr>
          {/* Social media links */}
          <div className="relative z-10 mt-4 mb-4 flex items-center justify-start px-10 md:justify-end md:px-0">
            <div className="flex items-center gap-2">
              <span className="mr-2">Follow us</span>
              <a
                href="#"
                className="rounded-full p-1 transition-colors hover:bg-gray-800/50"
              >
                <img
                  src="/social/youtube.svg"
                  alt="Youtube"
                  height={24}
                  width={24}
                />
              </a>
              <a
                href="#"
                className="rounded-full p-1 transition-colors hover:bg-gray-800/50"
              >
                <img src="/social/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="#"
                className="rounded-full p-1 transition-colors hover:bg-gray-800/50"
              >
                <img src="/social/linkedin.svg" alt="linkedin" />
              </a>
              <a
                href="#"
                className="rounded-full p-1 transition-colors hover:bg-gray-800/50"
              >
                <img src="/social/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>

          <hr className="hidden md:block"></hr>
          {/* Main footer content */}
          <div className="relative z-10 mx-auto px-10 py-8 md:px-0">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              {/* Company info */}
              <div className="hidden space-y-4 md:block">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold">
                    <img
                      src="/logo_white.png"
                      alt="Logo"
                      className="h-[44px] w-auto"
                    />
                  </h2>
                </div>
                <div className="text-sm text-white">
                  <p className="leading-[25px]">
                    Copilot Networks, a Unit of{" "}
                    <a href="#" className="underline">
                      The Copilot Group
                    </a>
                  </p>
                  <p>955 Garden Park Drive, #220, Allen, Texas, 75013</p>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-10 md:flex-row md:gap-10 lg:gap-16">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Legal</h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Terms Of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div className="hidden md:block">
                  <h3 className="mb-4 text-lg font-medium">Resources</h3>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Internet For All
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] transition-colors hover:text-blue-400"
                      >
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Need Help */}
                <div>
                  <h3 className="mb-4 text-lg font-medium">Need Help?</h3>
                  <ul className="flex flex-col gap-4 text-[13px]">
                    <li>
                      <span>Call Us - </span>
                      <a href="tel:4694226200" className="hover:underline">
                        (469) 4226200
                      </a>
                    </li>
                    <li>
                      <span>General Enquiries - </span>
                      <a
                        href="mailto:Sales@Copilotnet.Com"
                        className="hover:underline"
                      >
                        Sales@Copilotnet.Com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4 md:hidden">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold">
                    <img
                      src="/logo_white.png"
                      alt="Logo"
                      className="h-[44px] w-auto"
                    />
                  </h2>
                </div>
                <div className="text-sm text-white">
                  <p className="leading-[25px]">
                    Copilot Networks, a Unit of{" "}
                    <a href="#" className="underline">
                      The Copilot Group
                    </a>
                  </p>
                  <p>955 Garden Park Drive, #220, Allen, Texas, 75013</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t-[0.5px] border-[#A8A8A8]"></div>
          {/* Copyright */}
          <div className="relative z-10 mx-auto hidden py-4 text-sm text-white md:block">
            <p>© {new Date().getFullYear()} Copilot Networks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
