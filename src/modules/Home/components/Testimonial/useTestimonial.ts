import { useEffect, useState } from "react";
import { ITestimonial } from "./types";
import { testimonials } from "./data";
import { Settings } from "react-slick";

const useTestimonial = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to determine column count based on window width
  const updateColumnCount = () => {
    const width = window.innerWidth;
    if (width < 768) {
      // Mobile: 1 column
      setColumnCount(1);
      setIsMobile(true);
    } else if (width < 1024) {
      // Tablet: 2 columns
      setColumnCount(2);
      setIsMobile(false);
    } else {
      // Desktop: 3 columns
      setColumnCount(3);
      setIsMobile(false);
    }
  };

  // Effect to update column count on mount and window resize
  useEffect(() => {
    updateColumnCount();

    window.addEventListener("resize", updateColumnCount);

    return () => {
      window.removeEventListener("resize", updateColumnCount);
    };
  }, []);

  // Function to get testimonials based on view mode
  const getVisibleTestimonials = () => {
    if (!isMobile || showAllMobile) {
      return testimonials;
    }
    // On mobile, only show first 2 testimonials if "Show More" hasn't been clicked
    return testimonials.slice(0, 2);
  };

  // Organize testimonials into columns
  const organizeIntoColumns = (
    testimonials: ITestimonial[],
    columnCount: number,
  ) => {
    const columns: ITestimonial[][] = Array(columnCount)
      .fill(null)
      .map(() => []);

    testimonials.forEach((testimonial: ITestimonial, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(testimonial);
    });

    return columns;
  };

  const slickSettings: Settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "40px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  const visibleTestimonials = getVisibleTestimonials();
  const columns = organizeIntoColumns(visibleTestimonials, columnCount);

  return {
    columns,
    isMobile,
    showAllMobile,
    setShowAllMobile,
    slickSettings,
  };
};

export default useTestimonial;
