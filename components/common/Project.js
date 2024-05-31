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
            {data.date && <span> &nbsp; | &nbsp; {data.date}</span>}
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
          <section className="ptestimonial">
            <div className="container">
              <div className="heading-title">
                <TitleSm title="Testimonial" />
              </div>
              <div className="pcards">
                <div className="pimage">
                  <div className="pimg">
                    <img src={data.testimonial.cover} alt="" />
                  </div>
                  <div className="pimg-text">
                    <h3>{data.testimonial.name}</h3>
                    <span>{data.testimonial.post.split("-")[0]}</span>
                    <br />
                    <span>
                      <i>{data.testimonial.post.split("-")[1]}</i>
                    </span>
                  </div>
                </div>
                <div className="pdetails">
                  <p>{data.testimonial.desc}</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
