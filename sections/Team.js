import React from "react";
import { motion } from "framer-motion";
import { teamdata } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Team = () => {
  return (
    <>
      <motion.section
        className='agency bg-top'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <div className='container'>
          <motion.div className='heading-title' variants={itemVariants}>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='A team of smart & passionate creatives' className='title-bg' />
          </motion.div>
          <motion.div className='grid-4 py' variants={containerVariants}>
            {teamdata.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card data={item} path={item.social} caption={item.post} social={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Team;
