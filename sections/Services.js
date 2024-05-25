import { expertise } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React , {useEffect} from "react";
import { useRouter } from "next/router";

const Services = () => {

  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle hash changes including initial load and subsequent clicks
    handleHashChange();
    router.events.on("hashChangeComplete", handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off("hashChangeComplete", handleHashChange);
    };
  }, [router]);

  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" /> <br />
            <br />
            <Title
              title="Unique technologies & modern approach"
              className="title-bg"
            />
          </div>
          <div className="grid-2 py">
            {expertise.map((item) => (
              <section id={item.id.substring(1)} key={item.id}>
                <Card
                  data={item}
                  path={"services"}
                  key={item.id}
                  // caption={item.post}
                  show={true}
                />
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services

// import React, { useEffect } from "react";
// import { expertise } from "@/assets/data/dummydata";
// import { Card } from "./common/Card";
// import { useRouter } from "next/router";

// const Services = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Function to handle hash change
//     const handleHashChange = () => {
//       const hash = window.location.hash.substring(1); // Remove the '#'
//       const element = document.getElementById(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     // Scroll to the section if there's a hash in the URL when the component mounts
//     handleHashChange();

//     // Listen for hash changes
//     window.addEventListener("hashchange", handleHashChange);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, [router.asPath]);

//   return (
//     <div className="services">
//       <div className="container">
//         {expertise.map((item) => (
//           <section id={item.id.substring(1)} key={item.id}>
//             <h2>{item.title}</h2>
//             <div className="hero-content grid-3">
//               <Card data={item} />
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
