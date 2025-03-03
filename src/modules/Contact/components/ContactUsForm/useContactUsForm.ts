import { useState } from "react";

const useContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    industry: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic would go here
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        industry: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  const phoneInputCustomStyles = `
      .PhoneInput {
        display: flex;
        align-items: center;
      }
      .PhoneInputCountry {
        margin-right: 0.5rem;
        padding-left: 0.5rem;
      }
      .PhoneInputInput {
        flex: 1;
        padding: 0.75rem 1rem;
        border: none;
        outline: none;
        width: 100%;
      }
    `;

  return {
    handleChange,
    handleSubmit,
    phoneInputCustomStyles,
    formData,
    errors,
    setFormData,
  };
};

export default useContactUsForm;
