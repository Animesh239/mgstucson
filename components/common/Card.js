import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import { BsLinkedin } from "react-icons/bs"

export const Card = ({ data, caption, show, path, social }) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href={social ? `${data.social}` : `${path}/${data.id}`} className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {(caption && !social)  && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          {(caption && social) &&  (
            <Link href={`${data.social}`}>
              {caption} <BsLinkedin className='link-icon' />
            </Link>
          )}

         { data.date &&  (
          <div className='flex'>
            <span> {data.mine} </span>  {data.date && <span>{data.category}  &nbsp; | &nbsp;  {data.date}</span>}
          </div>
          )}

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
