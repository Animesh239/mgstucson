import Link from "next/link";
import { TitleSa, TitleSm, Title } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Project = ({ data, caption, show, path }) => {
  const shortDesc = data.desc.length > 0 ? data.desc[0].text : "";
  const detailedDesc = data.desc.slice(1);

  return (
    <>
      <div className="project">
        <div className="">
          <Title title={data.title} className={"title-bg"} />
          <div className="flex">
            <span> {data.mine} </span> 
            {data.date && <span> &nbsp; | &nbsp;  {data.date}</span>}
          </div>
          {shortDesc && <p className="short-desc">{shortDesc}</p>}
        </div>

        <div className="project-img">
          <img src={data.cover} alt={data.title} />
          <p className="image-source">Image source: {data.imgsrc}</p>
        </div>

        {detailedDesc.length > 0 && (
          <div className="detailed-desc">
            <ul>
              {detailedDesc.map((text, i) => (
                <li key={i}> {text.text}</li>
              ))}
            </ul>
          </div>
        )}

        {show && (
          <div className="testimonial">
            <TitleSm title="Testimonial" />
            {/* <p>{data.testimonial}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
