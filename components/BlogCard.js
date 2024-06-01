import React from "react";
import { Card } from "./common/Card";
import { blogdata } from "@/assets/data/dummydata";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const BlogCard = () => {
  return (
    <>
      <motion.div
        className="container blog-card grid-2 py"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {blogdata.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Card data={item} path="blogs" social={false} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default BlogCard;
