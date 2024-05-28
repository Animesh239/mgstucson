import { useRouter } from 'next/router'
import { projects } from '@/assets/data/dummydata'
import { Project } from '@/components/common/Project'

const ProjectDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find((project) => project.id === parseInt(id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <section className=''>
      <div className='container'>
        <Project data={project} show={true} />
      </div>
    </section>
  )
}

export default ProjectDetail