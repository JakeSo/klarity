import { Modal } from "./Modal";
import { Label, TextInput, Textarea } from "flowbite-react";
import Button from "./Button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from '../assets/1.svg';
const inputTheme = {
  field: {
    input: {
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-gold focus:ring-gold dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gold dark:focus:ring-gold",
      },
    },
  },
};

export const ContactForm = (props) => {
  // console.log({...props});
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  // const [contactInfo, setContactInfo] = useState(
  //     {
  //         name: "",
  //         company: "",
  //         email: "",
  //         phone: "",
  //         message: ""
  //     }
  // );

  // function handleInputChange(event) {
  //   const {id, value} = event.target;
  //   setContactInfo((prevState) => (
  //       {
  //           ...prevState,
  //           [id]: value
  //       }
  //   ));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service-", "template_ozcpc2h", form.current)
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <Modal size="md" {...props}>
      {!submitted ? (
        <div className="space-y-6">
          <h2 className="font-medium uppercase text-gray-900 dark:text-white">
            Contact Us!
          </h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                theme={inputTheme}
                className="focus:ring-gold"
                required
                name="name"
                id="name"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="company" value="Your company" />
              </div>
              <TextInput
                theme={inputTheme}
                name="company"
                required
                id="company"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                name="email"
                required
                theme={inputTheme}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone" />
              </div>
              <TextInput
                theme={inputTheme}
                name="phone"
                required
                id="phone"
                type="tel"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Message" />
              </div>
              <Textarea
                theme={inputTheme.field.input}
                id="message"
                name="message"
                required
              />
            </div>

            <div className="w-full mt-4">
              <Button type="submit" className="px-4 py-3 w-full">
                Send
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="py-12 w-full text-center flex flex-col gap-6 justify-center my-auto">
          <h2 className="">ORDER'S IN, CHEF!</h2>
          <h3>We will reach out to you pronto!</h3>
          <img className="w-1/2 mx-auto" src={logo} />
        </div>
      )}
    </Modal>
  );
};
