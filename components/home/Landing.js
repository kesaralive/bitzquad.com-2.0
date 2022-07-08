import React from 'react';
import { motion } from 'framer-motion';

// local imports
import {
  Logo,
  Landingsm,
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
} from '../../constants/images';
import { Button } from '../../components';

const textRevealAnimation = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
const titleAnimation = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.03,
    },
  },
};

function Landing({ loading }) {
  return (
    <div className="landing-container">
      {!loading && <ShapesContainer />}
      <div className="landing">
        <div className="landing-content">
          <motion.img
            initial={{ opacity: 0 }}
            animate={
              !loading
                ? {
                    opacity: 1,

                    transition: { delay: 1, duration: 0.6, ease: 'easeInOut' },
                  }
                : {}
            }
            src={Landingsm.src}
            alt="cover-img"
            className="h-auto w-full md:hidden"
          />
          <div className="px-5">
            {!loading && (
              <AnimatedTitle landingTitle="Solutions Beyond Technology" />
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{
                ease: 'easeInOut',
                delay: 1.8,
                duration: 1,
              }}
            >
              For athletes, high altitude produces two contradictory effects on
              performance. For explosive events (sprints up to 400 metres long
              jump triple jump) the reduction in atmospheric pressure means
              there is less resistance from the atmosphere and the athletes
              performance will generally be better at high altitude.
            </motion.p>
          </div>
          {!loading && (
            <Button className="w-full rounded-full border py-6 text-2xl md:hidden">
              View Services
            </Button>
          )}
        </div>
        <div className="landing-logo">
          <motion.img
            className=""
            src={Logo.src}
            alt="bz-logo"
            layoutId="landing-logo-image"
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              // delay: 0.8,
              duration: 1.6,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const AnimatedTitle = ({ landingTitle }) => {
  return (
    <div className="landing-title-wrapper">
      <motion.span
        className="landing-title"
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        {landingTitle.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {[...word].map((letter, i) => (
              <motion.span
                className="landing-letter"
                key={i}
                variants={textRevealAnimation}
              >
                {letter}
              </motion.span>
            ))}
            {index === 1 ? (
              <br />
            ) : (
              <span className="landing-word-spacer"></span>
            )}
            <span> </span>
          </React.Fragment>
        ))}
      </motion.span>
    </div>
  );
};

export default Landing;

const ShapesContainer = () => {
  const shapes = [
    {
      src: Shape1.src,
      alt: Shape1.alt,
    },
    {
      src: Shape2.src,
      alt: Shape2.alt,
    },
    {
      src: Shape3.src,
      alt: Shape3.alt,
    },
    {
      src: Shape4.src,
      alt: Shape4.alt,
    },
    {
      src: Shape5.src,
      alt: Shape5.alt,
    },
  ];

  return (
    <div className="shapes-container" data-scroll data-scroll-speed="4">
      {[...shapes].map((shape, index) => (
        <motion.img
          className="shape"
          key={index}
          src={shape.src}
          alt={shape.alt}
          layoutId={`shape-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2.6,
            delay: 1.6 + index * 0.07,
          }}
        />
      ))}
    </div>
  );
};