import React, { useEffect } from "react";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
          <motion.div
            className="heading-title"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <TitleSm title="SERVICES" /> <br />
              <br />
              <Title title="Unique technologies & modern approach" className="title-bg" />
            </motion.div>
          </motion.div>
          <motion.div
            className="grid-2 py"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {expertise.map((item) => (
              <motion.section
                id={item.id.substring(1)}
                key={item.id}
                variants={itemVariants}
              >
                <Card
                  data={item}
                  path={"services"}
                  // caption={item.post}
                  show={true}
                />
              </motion.section>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
