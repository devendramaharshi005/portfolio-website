// const SkillsMarquee = () => {
//   const skills = [
//     "JavaScript",
//     "React.js",
//     "Next.js",
//     "TypeScript",
//     "Node.js",
//     "Express.js",
//     "Python",
//     "REST APIs",
//     "UI/UX",
//     "Tailwind CSS",
//     "MongoDB",
//     "MySQL",
//     "Git",
//     "Azure",
//     "Docker",
//   ];

//   return (
//     <div className="w-full overflow-hidden bg-background py-12 border-y border-border/40">
//       <div className="flex gap-8 animate-scroll whitespace-nowrap">
//         {/* First set of items */}
//         {skills.map((skill, index) => (
//           <div
//             key={`skill-1-${index}`}
//             className="flex items-center gap-4 text-muted-foreground/60"
//           >
//             <span className="text-lg font-medium">{skill}</span>
//             <span className="text-muted-foreground/40">•</span>
//           </div>
//         ))}
//         {/* Duplicate set for seamless loop */}
//         {skills.map((skill, index) => (
//           <div
//             key={`skill-2-${index}`}
//             className="flex items-center gap-4 text-muted-foreground/60"
//           >
//             <span className="text-lg font-medium">{skill}</span>
//             <span className="text-muted-foreground/40">•</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsMarquee;
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiMongodb,
  DiGit,
  DiDocker,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { CiGlobe } from "react-icons/ci";

const skills = [
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "React.js", icon: <DiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Python", icon: <DiPython /> },
  { name: "REST APIs", icon: <CiGlobe /> },
  { name: "UI/UX", icon: <SiFigma /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "MySQL", icon: <DiMysql /> },
  { name: "Git", icon: <DiGit /> },
  { name: "Docker", icon: <DiDocker /> },
];

const SkillsMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-12 border-y border-border/40">
      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {skills.map((skill, index) => (
          <div
            key={`skill-1-${index}`}
            className="flex items-center gap-4 text-muted-foreground/60"
          >
            <span className="text-3xl text-muted-foreground">{skill.icon}</span>
            <span className="text-lg font-medium text-foreground">
              {skill.name}
            </span>
            <span className="text-border/40">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <div
            key={`skill-2-${index}`}
            className="flex items-center gap-4 text-muted-foreground/60"
          >
            <span className="text-3xl text-muted-foreground">{skill.icon}</span>
            <span className="text-lg font-medium text-foreground">
              {skill.name}
            </span>
            <span className="text-border/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
