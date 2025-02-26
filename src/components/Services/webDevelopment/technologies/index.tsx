import Image from "next/image";
import { backendTechnologiesData, databaseTechnologiesData, frontendTechnologiesData } from "./technologiesData";
import { TechStack } from "@/types/techStack";

const Technologies = () => {
  return (
    <>
      <section className="pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 bg-gray-300 dark:bg-gray-dark">
              <p className="text-2xl mt-[2rem] ml-[2rem] font-bold">Front-end Technologies-</p>
              <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                {frontendTechnologiesData.map((front) => (
                  <SingleFrontendTechnology key={front.id} front={front} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 bg-gray-300 dark:bg-gray-dark">
              <p className="text-2xl mt-[2rem] ml-[2rem] font-bold">Back-end Technologies-</p>
              <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                {backendTechnologiesData.map((back) => (
                  <SingleBackendTechnology key={back.id} back={back} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 bg-gray-300 dark:bg-gray-dark">
              <p className="text-2xl mt-[2rem] ml-[2rem] font-bold">Database Technologies-</p>
              <div className="flex flex-wrap items-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                {databaseTechnologiesData.map((database) => (
                  <SingleDatabaseTechnology key={database.id} database={database} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

const SingleFrontendTechnology = ({ front }: { front: TechStack[number] }) => {
  const { image, imageLight, name } = front;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </div>
    </div>
  );
};

const SingleBackendTechnology = ({ back }: { back: TechStack[number] }) => {
  const { image, imageLight, name } = back;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </div>
    </div>
  );
};


const SingleDatabaseTechnology = ({ database }: { database: TechStack[number] }) => {
  const { image, imageLight, name } = database;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <div
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </div>
    </div>
  );
};