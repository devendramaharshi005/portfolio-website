"use client";
import { Info, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Trading Chatbot with Real-time Admin Dashboard",
    description:
      "Developed a secure, real-time chatbot system for trading platforms with multi-language support and a real-time admin dashboard.",
    technologies: [
      "React.js",
      "TypeScript",
      "Azure AD",
      "Tailwind CSS",
      "WebSocket",
      "Socket.io",
      "React Query",
    ],
    image:
      "https://cdn.dribbble.com/userupload/4049270/file/original-99615d4d50ce3054b56b21fd59138b88.png?resize=752x&vertical=center",
    tag: "External",
  },
  {
    title: "Employee Management Portal",
    description:
      "Comprehensive platform to enhance employee experience, integrating various features like HR ticketing, referral portals, and newsfeeds.",
    technologies: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Fluent UI",
      "Tailwind",
      "MSAL",
    ],
    image:
      "https://st.depositphotos.com/1594308/2420/i/600/depositphotos_24202753-stock-photo-teamwork.jpg",
    tag: "External",
  },
  {
    title: "Call Analytics Dashboard",
    description:
      "Real-time analytics dashboard for visualizing call data insights with interactive charts and secure REST API integration.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg",
    tag: "External",
  },
  {
    title: "Contract Management System",
    description:
      "Secure web-based contract management system with role-based access control and AES encryption for sensitive data.",
    technologies: ["React.js", "Context API", "Crypto-js", "MSAL", "Azure AD"],
    image:
      "https://st5.depositphotos.com/13053202/66893/i/600/depositphotos_668936428-stock-photo-businessman-holding-tablet-hand-pointing.jpg",
    tag: "External",
  },
  {
    title: "Task Management RBAC Demo",
    description:
      "A task management application implementing Role-Based Access Control (RBAC) with React and Node.js, providing controlled access to tasks based on user roles.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "MongoDB",
      "Tailwind CSS",
      "React Hook Form",
      "React Router",
      "Axios",
    ],
    image:
      "https://github.com/devendramaharshi005/EazyRBAC/raw/master/image4_dashboard_after_login.png",
    tag: "Internal",
    github: "https://github.com/devendramaharshi005/EazyRBAC",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and TypeScript to showcase projects, skills, and experience. The website is fully responsive and features modern design practices using Tailwind CSS. It is deployed using Vercel for fast performance and continuous deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Vercel",
      "Node.js",
    ],
    image:
      "https://github.com/devendramaharshi005/portfolio-website/raw/master/portfolio-screenshot.png",
    tag: "Internal",
    github: "https://github.com/devendramaharshi005/portfolio-website",
  },
  {
    title: "Outbound Calling AI Agent",
    description:
      "A full-stack intelligent outbound calling system that makes automated SIP-based calls for appointment reminders and customer engagement. The AI agent uses advanced speech-to-text, text-to-speech, and large language models to conduct natural conversations with customers. Features include real-time call monitoring, transcript streaming, and seamless human transfer capabilities. Built with LiveKit Agents for scalable voice communication, FastAPI for robust backend services, and React for an intuitive admin dashboard.",
    technologies: [
      "LiveKit",
      "FastAPI",
      "React",
      "Python",
      "Node.js",
      "AssemblyAI",
      "ElevenLabs",
      "Google Gemini",
      "Twilio SIP",
      "WebSocket",
      "Tailwind CSS",
      "Vite",
    ],
    image:
      "https://github.com/devendramaharshi005/Outbound-calling-ai-agent/blob/main/Screenshot_agent.png?raw=true",
    tag: "Internal",
    github: "https://github.com/devendramaharshi005/Outbound-calling-ai-agent",
  },
  {
    title: "Video MCQ Generator",
    description:
      "An AI-powered full-stack application that automatically converts educational videos and podcasts into multiple-choice questions (MCQs) using advanced transcript generation and LLM-based question synthesis. The system extracts audio from videos, generates accurate transcripts using AssemblyAI, and creates contextual MCQs using local LLM models via Ollama. Features include real-time processing, MongoDB storage for transcripts and questions, and a modern React dashboard for managing the entire workflow from video upload to MCQ generation.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "Mongoose",
      "AssemblyAI",
      "Ollama",
      "LLaMA",
      "Docker",
      "Axios",
      "React Query",
    ],
    image: "https://img.youtube.com/vi/yAoZFxEk56c/0.jpg",
    tag: "Internal",
    github: "https://github.com/devendramaharshi005/Video_mcq_generator",
  },
  {
    title: "Automation Builder",
    description:
      "A low-code visual automation builder that lets users create workflows using draggable nodes and configurable edges. Built with React Flow and Zustand, it supports live node editing, smart edge connections, undo/redo, JSON import/export, and persistent local storage. Designed as a modular playground for building complex flow-based logic with a real-time configuration panel.",
    technologies: [
      "React",
      "TypeScript",
      "React Flow",
      "Zustand",
      "Tailwind CSS",
      "Lucide React",
      "Vite",
    ],
    image:
      "https://camo.githubusercontent.com/da25f4b64cd5a4aae33ed4eb50a9626209e3d2513b3694dbf831863f91ff14f2/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6144646f6a6951485163302f687164656661756c742e6a7067",
    tag: "Internal",
    github: "https://github.com/devendramaharshi005/DragNBuild",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="px-4 sm:px-16 pt-[120px] pb-24 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold  text-foreground">Projects</h2>
        <div className="flex items-center text-foreground/60 text-sm gap-1">
          <Info size={16} className="mr-1" />
          <span className="whitespace-pre-line sm:whitespace-normal">
            {
              "Internal: Source code is available.\nExternal: No public repository."
            }
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const isExpanded = expanded === index;
          const shortDesc =
            project.description.length > 300
              ? project.description.slice(0, 300) + "..."
              : project.description;
          const visibleDesc = isExpanded ? project.description : shortDesc;
          const visibleTech = isExpanded
            ? project.technologies
            : project.technologies.slice(0, 6);

          return (
            <div
              key={index}
              className="bg-background min-h-[25rem]  shadow-md rounded-xl overflow-hidden relative border border-border transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Tag */}
              <span className="absolute top-2 right-2 bg-primary/80 text-background text-xs px-2 py-1 rounded flex items-center">
                <Tag size={12} className="mr-1" />
                {project.tag}
              </span>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/80">{visibleDesc}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {visibleTech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/50 text-foreground/90 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className=" flex flex-row flex-1 justify-between items-center transition-[max-height] duration-500 ease-in-out">
                  {/* Toggle Button */}
                  {project.description.length > 250 ||
                  project.technologies.length > 8 ? (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs text-primary hover:text-primary/80 mt-2 underline"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  ) : null}

                  {/* GitHub Link */}
                  {project.tag === "Internal" && (
                    <Link
                      href={project.github || "#"}
                      target="_blank"
                      className="text-primary text-md hover:text-primary/80 mt-3 inline-block"
                    >
                      View on GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
