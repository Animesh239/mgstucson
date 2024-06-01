import { projects } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <motion.div
            className="heading-title"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <TitleSm title="PROJECTS" /> <br />
              <br />
              <Title
                title="Fresh ideas. Bold solutions. Smart realisation."
                className="title-bg"
              />
            </motion.div>
          </motion.div>
          <br />
          <br />
          <motion.div
            className="grid-3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {projects.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card
                  data={item}
                  path={"projects"}
                  caption={item.post}
                  project={true}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="py btn">
            {/* <button className='secondary-button'>View More</button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
