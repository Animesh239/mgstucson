import { projects } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Project } from "@/components/common/Project"

import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Projects = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PROJECTS' /> <br />
            <br />
            <Title title='Fresh ideas. Bold solutions. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {projects.map((item) => (
              <Card data={item} path={"projects"} key={item.id} caption={item.post} project={true} />
            ))}
          </div>
          <div className='py btn'>
            {/* <button className='secondary-button'>View More</button> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
