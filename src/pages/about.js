import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/me.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Srikanth | About</title>
        <meta
          name="description"
          content="A webpage describing about me and my background."
        ></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code, Create, Innovate!"
            className="mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start text-justify md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                I'm Srikanth, a polyglot software developer with over 3 years of
                experience in developing distributed, scalable and reliable
                systems.
              </p>
              <p className="my-4 font-medium">
                I began my career initially with Python, delving into web
                development, leveraging the Flask framework to craft robust,
                scalable back-end solutions. Soon I was able to expand my
                repertoire to include Java, adapting quickly and gaining
                proficiency in Spring Boot and related frameworks to create
                stand-alone, production-grade applications.
              </p>
              <p className="my-4 font-medium">
                I also worked comprehensively with C++ and C, building several
                projects and solving problems to gain an in-depth understanding
                of lower-level constructs. Simultaneously, I also cultivated an
                understanding of front-end development, learning and applying
                key frameworks like React and Next.js along with HTML, CSS and
                Javascript to create intuitive, user-centered interfaces.
              </p>
              <p className="font-medium">
                Through my extensive and diverse experiences, I seek to become a
                driving force in teams, demonstrating an exceptional ability to
                navigate the evolving landscape of software development and
                deliver high-quality, innovative solutions.
              </p>
            </div>
            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Srikanth"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
