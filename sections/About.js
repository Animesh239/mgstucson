import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Srikant from "@/components/Srikant";
import Testimonial from "@/components/Testimonial";

import { Title, TitleSa, TitleSm } from "@/components/common/Title";

const About = () => {
  return (
    <>
      <motion.section
        className="agency bg-top"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.div
            className="heading-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              //  delay: 0.4
            }}
          >
            <TitleSm title="ABOUT MGS" /> <br />
            <br />
            <Title
              title="The last consultation you will ever need!"
              className="title-bg"
            />
          </motion.div>

          <motion.div
            className="content flex1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, 
            //  delay: 0.4
             }}
          >
            <div className="left w-60 py">
              <TitleSa
                title=" Dr
                Srikant Annavarapu is an SME Registered Member and is recognised
                as a Qualified Person (NI 43-101), Competent Person (JORC) and
                Registered Competent Person (NACRI)."
              />
              <p className="desc-p">
                Dr. Srikant Annavarapu has 40 years of experience in mining and
                geotechnical engineering, working in India, USA, and Indonesia.
                Specialist in underground and surface mining methods, ground
                stabilization, instrumentation, monitoring, and analysis. His
                expertise spans geotechnical engineering, mine design, and
                planning, emphasizing on safety and cost-effectiveness.
                Providing geotechnical and mining engineering services from
                prefeasibility to operations phases, including project-specific
                mine design, and technical report preparation under CRIRSCO
                guidelines.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">40+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1716551288/mgstucson/ooxt7kbt6erbzri5qidt.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </motion.div>

          <motion.div
            className="content flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, 
            //  delay: 0.4
          }}
          >
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                To ensure the success of your mining and civil construction
                projects, both domestically and internationally, Master Geotech
                Services Pvt Ltd (MGS) offers cost-effective, high-quality
                consultations in geotechnical, engineering, and safety. Our
                team, led by Dr. Srikant Annavarapu's 40 years of experience,
                prioritizes safety and utilizes cutting-edge technology to
                deliver sustainable solutions throughout your project lifecycle.
                <br /> We are committed to providing the highest level of
                service to our clients, ensuring that their projects are
                completed on time and within budget.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, 
          //  delay: 0.4
        }}
      >
        <Brand />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, 
          //  delay: 0.4
        }}
      >
        <Testimonial />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, 
        //  delay: 0.4
        }}
      >
        <Banner />
      </motion.div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
