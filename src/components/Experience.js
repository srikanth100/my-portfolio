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
            work1="• Designed and developed an interactive application to visualize wellbeing across population subgroups 
                     using the American Time Use Survey (ATUS) dataset."
            work2="• Refactored and maintained a synthetic population generator framework built using Python."
          />
          <Details
            position="Software Engineering Intern"
            company="Apple"
            companyLink="https://www.apple.com"
            time="May 2022 - Aug 2022"
            address="Cupertino, California, United States"
            work1="• Transitioned CI/CD infrastructure (Jenkins) from  bare-metal servers to ACI Kube (Kubernetes), 
                     enhancing operational efficiency."
            work2="• Created specialized Helm charts for the deployment of stateful Jenkins worker nodes, optimizing the execution of CI/CD jobs."
          />
          <Details
            position="Member of Technical Staff - 2"
            company="Netskope"
            companyLink="https://www.netskope.com"
            time="Apr 2021 - Jul 2021"
            address="Bengaluru, Karnataka, India"
            work1="• Assumed ownership of Netskope's API driven service for O365 Suite, responsible for end-to-end 
            development and delivery of security features such as DLP scanning and threat protection across apps."
            work2="• Engineered microservices to manage high-volume push notifications from SaaS vendors, utilizing 
            Kafka for efficient staging, and Celery with Redis for distributed, synchronous notification processing."
          />
          <Details
            position="Member of Technical Staff - 1"
            company="Netskope"
            companyLink="https://www.netskope.com"
            time="July 2019 - Mar 2021"
            address="Bengaluru, Karnataka, India"
            work1="• Achieved significant improvements in end-to-end notification processing time by optimizing API calls 
            and implementing efficient rate-limiting strategies across multiple SaaS platforms."
            work2="• Collaborated with experienced engineers to design and deploy a resilient, scalable, and distributed 
            data pipeline, aimed at safeguarding sensitive data through policy-based controls across multiple SaaS platforms."
          />
          <Details
            position="Software Engineer Intern"
            company="Netskope"
            companyLink="https://www.netskope.com"
            time="Jan 2019 - Jun 2019"
            address="Bengaluru, Karnataka, India"
            work1="• Worked closely with UI/UX designers for feature development, QA teams for comprehensive testing, and SRE 
            teams for root cause analysis and debugging of production issues."
            work2="• Implemented a framework to detect changes in API schemas, scripts to list files and folders and 
            scan mailboxes through asynchronous processing and concurrent execution using threads."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
