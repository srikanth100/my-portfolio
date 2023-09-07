import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work1,
  work2,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work1}</p>
        <p className="font-medium w-full md:text-sm">{work2}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-9 w-[4px] h-full bg-dark shadow-2xl origin-top dark:bg-primaryDark 
          dark:shadow-2xl md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Graduate Research Assistant"
            company="Tomnet UTC"
            companyLink="https://tomnet-utc.engineering.asu.edu"
            time="Aug 2022 - May 2023"
            address="Tempe, Arizona, United States"
            work1="• Designed a dynamic visualization application for the American Time Use Survey (ATUS) dataset 
            using React, Typescript, CSS and d3.js."
            work2="• Refactored and published a synthetic population generator framework built using Python."
          />
          <Details
            position="Software Engineering Intern"
            company="Apple"
            companyLink="https://www.apple.com"
            time="May 2022 - Aug 2022"
            address="Cupertino, California, United States"
            work1="• Efficiently transitioned Jenkins CI/CD infrastructure from bare-metal servers to Kubernetes, 
            resulting in enhanced operational efficiency."
            work2="• Streamlined job execution by automating linkage between Jenkins and Kubernetes using Python."
          />
          <Details
            position="Member of Technical Staff - 2"
            company="Netskope"
            companyLink="https://www.netskope.com"
            time="Apr 2021 - Jul 2021"
            address="Bengaluru, Karnataka, India"
            work1="• Owner of the Python API integration for O365 Outlook, built features and optimized code with 
            100% unit test coverage."
            work2="• Engineered microservices to manage high-volume push notifications from SaaS vendors, utilizing 
            Kafka for efficient staging, and Celery with Redis for distributed, synchronous notification processing."
          />
          <Details
            position="Member of Technical Staff - 1"
            company="Netskope"
            companyLink="https://www.netskope.com"
            time="July 2019 - Mar 2021"
            address="Bengaluru, Karnataka, India"
            work1="• Improved end-to-end processing time by a factor of 5 in email processing through API call 
            reduction and rate limit management, thereby optimizing overall system functionality."
            work2="• Contributed to the design and development of a robust microservice, aimed at securing files 
            and folders by implementing data loss prevention (DLP) policies."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
