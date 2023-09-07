import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import proj1 from "../../public/images/projects/ai-image-recognition.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="ml-4 text-lg font-semibold underline md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Srikanth | Projects</title>
        <meta
          name="description"
          content="A webpage describing about my projects."
        ></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Project Gallery"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Elastic Web Application"
                summary="A web application that uses AWS EC2, SQS and S3 to provide image recognition as a service to users."
                link=""
                type="Image Recognition as a service"
                img={proj1}
                github="https://github.com/srikanth100/CC-546-Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PROJECT 1"
                summary="A feature-rich project in which I can do something and showcase something!"
                link="/"
                type="Featured project"
                img={proj1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PROJECT 1"
                summary="A feature-rich project in which I can do something and showcase something!"
                link="/"
                type="Featured project"
                img={proj1}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="PROJECT 1"
                summary="A feature-rich project in which I can do something and showcase something!"
                link="/"
                type="Featured project"
                img={proj1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PROJECT 1"
                summary="A feature-rich project in which I can do something and showcase something!"
                link="/"
                type="Featured project"
                img={proj1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PROJECT 1"
                summary="A feature-rich project in which I can do something and showcase something!"
                link="/"
                type="Featured project"
                img={proj1}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
