import React, { useState } from "react";
import { images } from "./Images";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function SliderKitchen() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="slider-wrapper">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="image-background"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: {
              type: "spring",
              stiffness: 300,
              damping: 300,
              opacity: { duration: 1 },
            },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        />
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        className="next"
        onClick={() => paginate(1)}
      >
        <FontAwesomeIcon icon={faArrowRight} sizw="2x" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        className="prev"
        onClick={() => paginate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} sizw="2x" />
      </motion.button>
    </div>
  );
}

export default SliderKitchen;
