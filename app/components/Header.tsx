import Link from "next/link";
import profile from "./linked_profile_picture_ceeri.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-4 left-0 right-0 z-40 px-4">
      <nav className="max-w-xl mx-auto">
        <div className="bg-background hover:shadow-md shadow-sm rounded-full border border-muted/80 px-3 py-2 flex items-center justify-between">
           <Link href="#first" className="cursor-pointer">
          <div className="flex items-center gap-2">
          
              <div className="h-8 w-8 rounded-full bg-muted border border-accent/80 overflow-hidden">
                <Image
                  src={profile}
                  alt="Profile"
                  width={450}
                  height={550}
                  className="h-full w-full object-cover scale-150 origin-top transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>
           

            <span className="font-medium text-foreground text-[0.94rem] ">
              Devendra Maharshi
            </span>

          </div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center md:gap-6 gap-3">
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-accent-foreground shadow-sm flex flex-row text-center hover:text-foreground text-xs bg-accent hover:bg-accent/80 px-4 py-1.5 rounded-full transition-colors"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
