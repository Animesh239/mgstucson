import { Title, TitleSa } from "@/components/common/Title"

const Srikant = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Dr. Srikant Annavarapu' className='title-sa' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py-1'>
              <TitleSa title='Dr. Srikant Annavarapu is an SME Registered Member and is recognised as a Qualified Person (NI 43-101), Competent Person (JORC) and Registered Competent Person (NACRI).' />
              <p className='desc-p'>Dr. Srikant Annavarapu has 40 years of experience in mining and geotechnical engineering, working in India, the USA, and Indonesia. He specializes in underground and surface mining methods, ground stabilization, instrumentation, monitoring, and analysis. His expertise spans geotechnical engineering, mine design, and planning, with a strong focus on safety and cost-effectiveness.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>40+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='https://res.cloudinary.com/dh4qhdszo/image/upload/v1716551288/mgstucson/ooxt7kbt6erbzri5qidt.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </section>

      <br />
    </>
  )
}

export default Srikant
