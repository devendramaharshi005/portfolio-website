import Image from "next/image";
import profile from "./linked_profile_picture_ceeri.jpg"; // Importing as StaticImageData

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen h-auto flex items-center justify-center py-4 px-10 lg:px-20 bg-gradient-radial-to-br from-foreground/80 to-foreground text-background"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 items-center">
        {/* Left Section - Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-background/80">About Me</h1>
          <p className="text-2xl text-background/80">
            Hello, I'm <span className="font-semibold">Devendra Maharshi</span>.
          </p>
          <p className="text-lg text-background/80">
            I specialize in building scalable, high-performance web applications
            with a strong focus on security and user experience. My expertise
            includes React.js, Next.js, and TypeScript, enabling me to craft
            modern, efficient, and user-friendly solutions.
          </p>
          <p className="text-lg text-background/80">
            With a background in frontend development, authentication
            mechanisms, and cloud deployments, I have experience integrating
            AI-driven solutions and developing robust backend services. My
            skills extend to authentication (Azure AD), version control, and
            cloud platforms like Azure.
          </p>
          <p className="text-lg text-background/80">
            Additionally, I am proficient in DevOps practices, including Docker,
            Kubernetes, and system monitoring. I have worked with Gen AI,
            Retrieval-Augmented Generation (RAG) models, and FastAPI for backend
            integration, ensuring seamless performance and scalability for
            large-scale applications.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image
            src={profile}
            alt="Profile"
            width={450}
            height={550}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
