import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Master Geotech Services Pvt Ltd' caption='7' className='logobg' />
          <h1 className='hero-title'>Providing Innovative Solutions</h1>

          <div className='sub-heading'>
            <TitleSm title='CONSULTING' /> <span>.</span>
            <TitleSm title='EDUCATION & TRAINING' /> <span>.</span>
            <TitleSm title='AUTOMATION' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="Maximize yield, minimize risk. Your complete mining solution." />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil ea esse impedit distinctio eos, deserunt numquam nobis nemo atque repudiandae. Aliquid praesentium explicabo ipsam nihil iure id. Pariatur magni soluta quisquam eos temporibus aut quibusdam quam, ipsam blanditiis. Veniam?</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
