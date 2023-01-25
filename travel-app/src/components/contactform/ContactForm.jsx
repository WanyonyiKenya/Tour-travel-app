import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="form">
      <h1>Send a message and Enquiries</h1>
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/douglasmasafu999@gmail.com"
        method="POST"
      >
        <input
          placeholder="name"
          type="text"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <p className="form-errors">
            {errors.name.type === "required" && "This field is required"}
            {errors.name.type === "minLength" &&
              "Minimum name length is 3 characters"}
          </p>
        )}
        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="form-errors">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid Email Address"}
          </p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true, minLength: 10 })}
        />
        {errors.subject && (
          <p className="form-errors">
            {errors.subject.type === "Required" && "This field is required"}
            {errors.subject.type === "minLength" &&
              "Minimum subject length is 10 characters"}
          </p>
        )}
        <textarea
          placeholder="Message"
          rows="4"
          type="text"
          {...register("message", {
            required: true,
            maxLength: 2500,
          })}
        />
        {errors.message && (
          <p className="form-errors">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "pattern" && "Max-Characters is 2500"}
          </p>
         )}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
