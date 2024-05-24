import React from "react"
import { Title } from "./common/Title"
import { projects } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const Projects = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected Projects' />
          </div>
          <div className='hero-content grid-3 py'>
            {projects.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href='/'>
              VIEW ALL PROJECTS <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
