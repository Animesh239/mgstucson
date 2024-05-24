import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Srikant from "@/components/Srikant";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo
            title="Master Geotech Services Pvt Ltd"
            caption="7"
            className="logobg"
          />
          <h1 className="hero-title">Providing Innovative Solutions</h1>

          <div className="sub-heading">
            <TitleSm title="CONSULTING" /> <span>.</span>
            <TitleSm title="EDUCATION & TRAINING" /> <span>.</span>
            <TitleSm title="AUTOMATION" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Maximize yield, minimize risk. Your complete mining solution." />
            <p>
              Master Geotech Services (Pvt) Ltd. (MGS) was established in April
              2008 by <u>Dr. Srikant Annavarapu</u> for providing quality
              geotechnical, engineering and safety consultations for the Mining
              and Civil Construction industries in India and abroad. In addition
              to the experience of Dr Srikant, associates are enrolled to
              provide additional consulting services in exploration, evaluation
              of international mineral resources and reserves reports, mine
              design, mine planning and scheduling, geotechnical site support,
              ventilation design and monitoring, risk assessment and mine safety
              and geotechnical audits. MGS is also actively engaged with
              technology companies in mining and exploration to provide a wide
              variety of services including automation in exploration, mining
              engineering, and geotechnical engineering.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Srikant />
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
