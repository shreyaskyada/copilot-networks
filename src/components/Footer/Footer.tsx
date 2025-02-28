const Footer = () => {
  return (
    <div
      className="relative h-[140vh] md:h-[90vh] bg-[#002235] text-white font-Lato bg-no-repeat  bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.44),rgba(0,0,0,0.44)),url(footer.png)",
      }}
    >
      <div className="flex flex-col pt-20 z-50">
        <div className="flex text-[20px] md:text-[40px] gap-1 md:gap-4  mx-auto w-full items-center justify-center md:leading-[54px] font-Lato flex-wrap">
          We value <span className="border-b-2 font-bold">Partnerships</span>{" "}
          over
          <span className="border-b-2 font-bold">Purchase Orders</span>
        </div>
        <div className="flex flex-col items-center mt-20">
          <button className="bg-white p-4 text-black rounded-full">
            Become a Partner
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full  text-white overflow-hidden px-0 md:px-20">
        {/* Background image with network effect */}
        <hr className="block md:hidden"></hr>
        {/* Social media links */}
        <div className="relative z-10 container mx-auto px-6 pt-8 pb-4 flex justify-start md:justify-end items-center border-b border-gray-700/30">
          <div className="flex items-center gap-2">
            <span className="mr-2">Follow us</span>
            <a
              href="#"
              className="p-1 rounded-full hover:bg-gray-800/50 transition-colors"
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
              className="p-1 rounded-full hover:bg-gray-800/50 transition-colors"
            >
              <img src="/social/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="#"
              className="p-1 rounded-full hover:bg-gray-800/50 transition-colors"
            >
              <img src="/social/linkedin.svg" alt="linkedin" />
            </a>
            <a
              href="#"
              className="p-1 rounded-full hover:bg-gray-800/50 transition-colors"
            >
              <img src="/social/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <hr className="hidden md:block"></hr>
        {/* Main footer content */}
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Company info */}
            <div className="space-y-4 hidden md:block">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">
                  <img
                    src="/logo_white.png"
                    alt="Logo"
                    className="h-[44px] w-auto"
                  />
                </h2>
              </div>
              <div className="text-sm text-white ">
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
            <div className="flex flex-col md:flex-row gap-8 md:gap-18">
              <div>
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Terms Of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="hidden md:block">
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Internet For All
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Videos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Need Help */}
              <div>
                <h3 className="text-lg font-medium mb-4">Need Help?</h3>
                <ul className="space-y-2">
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
                      className=" hover:underline"
                    >
                      Sales@Copilotnet.Com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 md:hidden">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">
                  <img
                    src="/logo_white.png"
                    alt="Logo"
                    className="h-[44px] w-auto"
                  />
                </h2>
              </div>
              <div className="text-sm text-white ">
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

        {/* Copyright */}
        <div className="relative z-10 container mx-auto px-6 py-4 text-sm text-white">
          <p>© {new Date().getFullYear()} Copilot Networks</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
