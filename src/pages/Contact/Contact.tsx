import Locations from "./components/Locations/Locations";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import { useEffect } from "react";
import Map from "./components/Map/Map";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Map />
      <Locations />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
