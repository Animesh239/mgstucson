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
          <div className='hero-content grid-2 py'>
            {projects.slice(0, 4).map((item) => (
              <Card data={item} path={"projects"} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href='/projects'>
              VIEW ALL PROJECTS <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
