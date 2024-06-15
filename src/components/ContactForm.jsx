
import {  Label, Modal, TextInput, Textarea } from "flowbite-react";
import Button from "./Button";
import { useState } from "react";

const inputTheme  = {
    field: {
        input: {
            colors: {
                gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-gold focus:ring-gold dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gold dark:focus:ring-gold"
            }
        }
    }
}

export function ContactForm({openModal, setOpenModal}) {
  const [contactInfo, setContactInfo] = useState(
    {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    }
);

  function onCloseModal() {
    setOpenModal(false);
    setContactInfo({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });
  }

  function handleInputChange(event) {
    const {id, value} = event.target;
    setContactInfo((prevState) => (
        {
            ...prevState,
            [id]: value
        }
    ));
  }

  return (
      <Modal className="bg-gray-950 slide-in " show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="bg-black" />
        <Modal.Body className="bg-black">
          <div className="space-y-6">
            <h2 className="font-medium uppercase text-gray-900 dark:text-white">Contact Us!</h2>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput theme={inputTheme} className="focus:ring-gold" id="name" value={contactInfo.name} onChange={handleInputChange} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="company" value="Your company" />
                </div>
                <TextInput theme={inputTheme} id="company" value={contactInfo.company} onChange={handleInputChange} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                value={contactInfo.email}
                onChange={handleInputChange}
                required
                theme={inputTheme}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone" />
              </div>
              <TextInput theme={inputTheme} id="phone" type="tel" onChange={handleInputChange} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Message" />
                </div>
                <Textarea theme={inputTheme.field.input} id="message" value={contactInfo.message} onChange={handleInputChange} />
            </div>
           
            <div className="w-full">
              <Button className="px-4 py-3 w-full">Send</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
  );
}
