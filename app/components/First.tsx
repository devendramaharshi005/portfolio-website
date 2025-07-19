import SkillsMarquee from "./SkillsMarquee";

const First = () => {
  return (
    <section
      id="first"
      className=" relative flex justify-center flex-col items-center gap-8 w-full h-screen"
    >
      <div className="w-full h-[calc(100%-12rem)] flex flex-col justify-center items-center">
        <div className=" flex flex-col items-center  px-4 pt-[8.5rem]">
          <h1 className="text-[3.2rem] font-bold text-foreground/90 mb-6 text-center whitespace-pre-line leading-[1.3]">
            {"I 'm Software Engineer and \nFullstack Developer"}
          </h1>
          <h2 className="text-[1.4rem] mb-8 font-normal text-foreground/90 text-center whitespace-pre-line leading-[1.6]">
            {
              "I combine clean frontend design with robust backend architecture\n to create applications that make an impact."
            }
          </h2>
          <a
            href="/Devendra_maharshi_resume_fullstack_developer.pdf"
            download
            className="py-2 px-4 text-accent-foreground hover:text-foreground text-lg bg-accent hover:bg-accent/80 rounded-full"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-full h-[8rem] border-1 overflow-hidden">
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default First;
