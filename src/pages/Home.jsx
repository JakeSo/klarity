import PhotoCard from "../components/PhotoCard.jsx";
import Service from "../components/Service.jsx";
import Button from "../components/Button.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import logo from "../assets/1.svg";
import banner from "../assets/banner.gif";
import restaurant1 from "../assets/restaurant_1.jpg"
import restaurant3 from "../assets/restaurant_3.jpg"
import { Modal } from "../components/Modal.jsx";
import { whyUsSections } from "../content/content.js";
import { useState } from "react";
import ImageUnblur from "../components/ImageUnblur.jsx";
import accoladeLogos from "../assets/Accolades";
import kitchen1 from "../assets/kitchen-1.jpg";
import kitchen2 from "../assets/kitchen-3.jpg";

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showServiceModal1, setShowServiceModal1] = useState(false);
  const [showServiceModal2, setShowServiceModal2] = useState(false);
  const [showServiceModal3, setShowServiceModal3] = useState(false);

  return (
    <div>
      <div
        className="section banner flex justify-center"
        style={{ maxHeight: "720px" }}
      >
        <img
          className="absolute w-full top-1/4 -translate-y-1/4 lg:top-1/3 lg:-translate-y-1/3"
          src={banner}
        >
        </img>
      </div>
      <div className="section flex flex-wrap min-h-full w-full items-baseline">
        <div className="w-full h-full pb-16 px-4 md:px-10 md:w-2/3 text-center my-auto">
          <img
            src={logo}
            alt="Klarity logo"
            className="mx-auto w-32 py-6 md:w-44 md:py-10"
          ></img>
          <h1 className="px-4 text-5xl md:text-6xl">
            HELPING RESTAURANTS FIND FOCUS IN AN EVER-EVOLVING INDUSTRY
          </h1>
        </div>
        <div className="w-full h-full md:w-1/3">
          <ImageUnblur src={restaurant1} alt="dining room" />
          {/* <video className="w-full" autoPlay muted loop disablePictureInPicture>
            <source src={onions}></source>
          </video> */}
        </div>
      </div>
      <div className="section text-center py-16 px-4 md:px-28 h-96 md:bg-fixed" style={{backgroundImage: `url(${kitchen1})`}}>
        <h2 className="italic bg-opacity-65 p-12 h-full rounded-lg my-auto bg-black content-center" style={{textShadow: "2px 2px 4px black"}}>
        Our mission is to elevate dining experiences by providing expert advice, optimizing
sustainable practices, fostering culinary creativity, and delivering exceptional quality
and hospitality to fulfill your guests outstanding experience
        </h2>
      </div>
      <div id="Services" className="section flex flex-wrap scroll-pt-8">
        <div className="w-full h-full text-left p-8">
          <h1 className="uppercase text-center">Our Services</h1>
          <div className="w-full mt-10 grid grid-cols-3 grid-rows-1 h-4/5">
            <Service title="CONSULTING">
              <p className="px-5 text-2xl">
                {" "}
                We understand your passion for opening a restaurant and want to
                reduce daily pressures and worries. Klarity offers a thorough
                analysis of your business to address all concerns and underlying
                issues.
              </p>
              <a
                className="float-end py-2 text-gold"
                onClick={() => setShowServiceModal1(true)}
              >
                Learn More...
              </a>
              <Modal
                openModal={showServiceModal1}
                onCloseModal={setShowServiceModal1}
              >
                <h4 className="text-4xl mb-4 px-4">CONSULTING</h4>
                <p className="mb-4 md:text-2xl px-4">
                  Our services encompass a thorough evaluation and improvement
                  of operational functions at all levels. Klarity will play a
                  crucial role in transforming organizational culture and talent
                  to enhance both efficiency and effectiveness. Our Advisors
                  focus includes strategic menu development, in-depth analysis,
                  and innovative design enhancements to strengthen brand
                  positioning as well as boosting financial performance by
                  optimizing operational processes. We are committed to
                  increasing profitability through enhanced operating systems.
                </p>
                <p className="mb-4 md:text-2xl px-4">
                  Our advisors focus on end-to-end conceptualization and precise
                  execution of innovative ideas, providing continuous guidance
                  during pre-opening, post-opening, and turnaround phases. With
                  meticulous project oversight, we ensure the timely and
                  successful completion of projects.
                </p>
                <p className="mb-4 md:text-2xl px-4">
                  Additionally, Klarity offers support in recruiting, talent
                  acquisition, and filling managerial and senior-level positions
                  within your restaurant.
                </p>
              </Modal>
            </Service>
            <Service title={"TRAINING & DEVELOPMENT"}>

              <p className="px-5 text-2xl">
                Klarity seeks to provide restaurant owners with a sense of
                assurance and peace of mind by helping their team commit to
                success. The goal is to eliminate stress and ensure
                profitability, pride, passion, and confidence for restaurant
                owners.
              </p>
              <a
                className="float-end py-2 text-gold"
                onClick={() => setShowServiceModal2(true)}
              >
                Learn More...
              </a>
              <Modal
                openModal={showServiceModal2}
                onCloseModal={setShowServiceModal2}
              >
                <h4 className="text-4xl mb-4 px-4">TRAINING & DEVELOPMENT</h4>
                <p className="md:text-2xl mb-4 px-4">
                  Training in the restaurant industry is crucial for your staff
                  to perform effectively, beyond just dedication. Exceptional
                  service requires a blend of knowledge and expertise,
                  achievable through comprehensive training and ongoing
                  education. For example, when aiming to improve serving
                  efficiency, training with practical tips is always more
                  effective than reprimands.
                </p>
                <p className="md:text-2xl mb-4 px-4">
                  {" "}
                  Quality training is essential for consistently delivering
                  outstanding customer experiences and ensuring staff understand
                  safety protocols. Training also prepares staff to handle
                  emergencies like choking or slipping incidents, crucial for
                  maintaining a safe environment. Effective training helps
                  employees remain composed and take necessary actions during
                  unforeseen situations. Investing in training can reduce high
                  turnover rates by fostering loyalty and commitment among
                  staff, creating skilled and reliable staff.
                </p>
              </Modal>
            </Service>
            <Service title={"QUALITY ASSURANCE"}>
              <p className="px-5 md:text-2xl">
                With our comprehensive approach, we address all aspects of your
                business, providing confidence and security by addressing both
                visible issues and underlying complexities.
              </p>
              <a
                className="float-end py-2 text-gold"
                onClick={() => setShowServiceModal3(true)}
              >
                Learn More...
              </a>
              <Modal
                openModal={showServiceModal3}
                onCloseModal={setShowServiceModal3}
              >
                <h4 className="text-4xl mb-4 px-4">QUALITY ASSURANCE</h4>
                <p className="md:text-2xl mb-4 px-4">
                  Your restaurant carries a significant responsibility to
                  maintain strict safety protocols to minimize health risks for
                  both customers and employees. Quality assurance plays a
                  crucial role in establishing and enforcing measures that
                  promote consistent hygiene standards, product quality, and
                  compliance with regulations.{" "}
                </p>
                <p className="md:text-2xl mb-4 px-4">
                  Quality assurance practices within food production encompass a
                  range of stages, including sourcing raw materials, refining
                  processes, packaging, ensuring accurate labeling, monitoring
                  storage conditions, controlling distribution, and assessing
                  shelf life. Establishing clear guidelines for each stage of
                  the supply chain and conducting regular audits are crucial
                  components.
                </p>
                <p className="md:text-2xl px-4">
                  Klarity can assist in establishing protocols such as Good
                  Manufacturing Practices (GMP) or Hazard Analysis Critical
                  Control Points (HACCP). These quality assurance efforts are
                  aimed at preventing contamination and mislabeling issues that
                  could pose risks to food safety. Ultimately, robust quality
                  assurance systems help protect the health of your guests and
                  staff, while also maintaining the reputation of the brand at
                  every key stage of the food development process.
                </p>
              </Modal>
            </Service>
          </div>
        </div>
        {/* <div className='w-full md:w-1/3 slide-in md:p-10'>
            <img className='mx-auto my-10' src='https://placehold.co/400x600?text=2:3'></img>
          </div> */}
      </div>
      <div id="Why" className="section flex flex-wrap text-center">
        <h1 className="mb-8 my-10 px-4 mx-auto">WHY CHOOSE US?</h1>
        <div className="flex justify-center flex-col flex-wrap md:flex-row w-full h-full">
          {whyUsSections.map((section) => (
            <PhotoCard
              key={section.id}
              {...section}
            />
          ))}
        </div>
      </div>
      <div className="section flex flex-wrap">
        <div className="w-full h-full p-10 md:w-1/2 md:h-2/3 my-auto text-center">
          {/* <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img> */}
          <h1 className="uppercase pb-8 text-5xl md:text-6xl">
            Let&apos;s take your restaurant to the{" "}
            <span className="text-gold">highest level</span>!
          </h1>
          <h2 className="text-2xl pb-4">
            Klarity aims to offer owners a sense of assurance by ensuring that
            their restaurant team is committed to their success. Our goal is to
            eliminate those sleepless nights by:
          </h2>
          <ul
            id="goalsList"
            className="list-disc text-left list-inside text-2xl md:px-16 py-2"
          >
            <li>
              Ensuring your restaurant generates profits and fills you with
              pride.
            </li>
            <li>
              Recapturing the contagious passion that initially led you to open
              a restaurant.
            </li>
            <li>
              Alleviating daily stressors and unnecessary burdens that dampen
              your spirits.
            </li>
            <li>
              Providing a sense of confidence by understanding the complete
              picture, beyond just the visible issues keeping you awake at
              night.
            </li>
          </ul>
        </div>
        <div className="w-full h-full md:w-1/2 ">
          <ImageUnblur src={restaurant3} alt="dining room" />
        </div>
      </div>
      <div id="Accolades" className="section p-6 text-center">
        <h1 className="uppercase my-7">Featured</h1>
        <ul className="flex flex-row gap-3 px-16 justify-center items-center">
          {accoladeLogos.map((accolade, index) => 
            <li key={index}>
              <a href={accolade.url}>
                <img className="w-[200px]" src={accolade.logo}></img>
              </a>
            </li>)}
        </ul>
      </div>
      <div id="Contact" className="w-full h-96 bg-fixed bg-center bg-cover" style={{backgroundImage: `url(${kitchen2})`}}>
          <div className="p-6 md:px-2 md:w-2/3 text-center mx-auto">
            <h3 className="text-4xl my-auto">
              Let&apos;s work together to unlock the full potential of your
              business and create unforgettable experiences for your guests:
            </h3>
          </div>
          <div className="text-center py-4">
            <Button
              id="contact-btn"
              className="p-4 mx-auto font-semibold bg-black hover:bg-gold focus:bg-gold hover:text-black focus:text-black"
              size={"4xl"}
              onClick={() => setShowContactForm(true)}
            >
              Contact Us
            </Button>
            <ContactForm
              openModal={showContactForm}
              onCloseModal={setShowContactForm}
            />
          </div>
        </div>
      
    </div >
  );
};

export default Home;
