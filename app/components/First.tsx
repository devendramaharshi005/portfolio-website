import SkillsMarquee from "./SkillsMarquee";

const First = () => {
  return (
    <section
      id="first"
      className=" relative flex justify-center flex-col items-center gap-8 w-full"
    >
      <div className="w-full pt-[240px]"></div>
      <div className="w-full px-4 ">
        <h1 className="text-5xl font-bold text-foreground/90 mb-6 text-center whitespace-pre-line leading-[1.3]">
          {"I 'm Software Engineer and \nFullstack Developer"}
        </h1>
        <h2 className="text-2xl mb-8 font-normal text-foreground/90 text-center whitespace-pre-line leading-[1.6]">
          {
            "I combine clean frontend design with robust backend architecture\n to create applications that make an impact."
          }
        </h2>
        <div className="w-full overflow-hidden">
          <SkillsMarquee />
        </div>
      </div>
    </section>
  );
};

export default First;
