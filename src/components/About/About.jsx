import {
  IoLogoGithub as Github,
  IoLogoLinkedin as Linkedin,
  IoMailSharp as Mail,
} from "react-icons/io5";

export default function About() {
  return (
    <section className="my-28 mb-20" id="about">
      <section className="flex flex-col gap-6">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl text-center font-monsterate">
          Hi I&apos;am <span className="text-primary">MOHAMED LAFROUH</span>
        </h1>
        <p className="lg:text-center text-justify lg:text-xl text-xl sm: font-inconsolata">
          Good day, My name is Mohamed Lafrouh, also known as Ambitious Flow. I
          am 20 years old and work as a full-stack web developer and software
          developer. I have spent several years studying web development and
          have built valuable connections throughout my journey in the tech
          industry.
        </p>
        <div className="flex lg:flex-row flex-col gap-2 justify-center font-inconsolata text-2xl font-semibold">
          <a
            href="https://www.linkedin.com/in/mohamed-lafrouh-7972a82a2/"
            className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all shadow-md"
          >
            <Linkedin className="size-7" /> <span>Linkedin</span>
          </a>
          <a
            className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all shadow-md"
            href="https://github.com/Kyle-Myre"
          >
            <Github className="size-7" />
            <span>Github</span>
          </a>
          <a
            className="bg-primary text-white p-3 flex flex-row items-center gap-3 hover:bg-opacity-80 duration-500 transition-all shadow-md"
            href="mailto:simoarmymen9@hotmail.com"
          >
            <Mail className="size-7" /> <span>Mail</span>
          </a>
        </div>
      </section>
    </section>
  );
}
