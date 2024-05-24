import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Srikant from "@/components/Srikant";
import Testimonial from "@/components/Testimonial";

import { Title, TitleSa, TitleSm } from "@/components/common/Title";

const About = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT MGS" /> <br />
            <br />
            <Title
              title="The last consultation you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-50 py">
              <TitleSa title=" Dr
                Srikant Annavarapu is an SME Registered Member and is recognised
                as a Qualified Person (NI 43-101), Competent Person (JORC) and
                Registered Competent Person (NACRI)." />
              <p className="desc-p">
                Dr Srikant Annavarapu has an extensive background in and
                in-depth understanding of mining and geotechnical engineering,
                underground and surface mining methods and operations, including
                ground stabilization instrumentation, monitoring and analysis.
                His 40 years of experience in India, USA and Indonesia includes
                geotechnical engineering, mine design, and mine planning. He
                prioritizes safety for all projects, remains current with
                technological change and provides cost-effective geotechnical
                and mining engineering services for exploration, mine
                development and expansion projects in the prefeasibility stage
                through to operations phases.</p> < p className="desc-p"> His areas of specialty include
                project-specific mine design and evaluation, assessment of
                appropriate mining technologies and methods, assessment of
                appropriate ground support and control systems and the
                preparation of technical reports under CRIRSCO guidelines.
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
            <div className="right w-50 ml">
              <img
                src="https://res.cloudinary.com/dh4qhdszo/image/upload/v1716551288/mgstucson/ooxt7kbt6erbzri5qidt.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
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
              To ensure the success of your mining and civil construction projects, both domestically and internationally, Master Geotech Services Pvt Ltd (MGS) offers cost-effective, high-quality consultations in geotechnical, engineering, and safety.  Our team, led by Dr. Srikant Annavarapu's 40 years of experience, prioritizes safety and utilizes cutting-edge technology to deliver sustainable solutions throughout your project lifecycle.<br/>  We are committed to providing the highest level of service to our clients, ensuring that their projects are completed on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
