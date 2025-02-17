import { Info, Tag } from "lucide-react";
import Link from "next/link";

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
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-[120px] pb-24 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold  text-foreground">Projects</h2>
        {/* Info Icon with Tooltip */}
        <div className="flex items-center text-foreground/60 text-sm">
          <Info size={16} className="mr-1" />
          <span className="hidden sm:inline">
            Internal: Source code is available. External: No public repository.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background shadow-lg rounded-xl overflow-hidden relative border border-border"
          >
            {/* Internal Project Tag */}
            {
              <span className="absolute top-2 right-2 bg-primary/80 text-background text-xs px-2 py-1 rounded flex items-center">
                <Tag size={12} className="mr-1" />
                {project.tag}
              </span>
            }
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground/80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/50 text-foreground/90 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* GitHub Link for Internal Projects */}
              {project.tag === "Internal" && (
                <Link
                  href={project.github || "#"}
                  target="_blank"
                  className="text-primary hover:text-primary/80 mt-3 inline-block"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
