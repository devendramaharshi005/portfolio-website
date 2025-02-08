import Link from "next/link";
import profile from "./linked_profile_picture_ceeri.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-4 left-0 right-0 z-40 px-4">
      <nav className="max-w-2xl mx-auto">
        <div className="bg-background rounded-full border border-muted/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-muted border border-accent/80 overflow-hidden">
              <Image
                src={profile}
                alt="Profile"
                width={450}
                height={550}
                className="h-full w-full object-cover zoom-in-50"
                priority
              />
            </div>
            <span className="font-medium text-foreground">
              Devendra Maharshi
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-6">
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
                className="text-accent-foreground hover:text-foreground text-sm bg-accent hover:bg-accent/80 px-4 py-1.5 rounded-full transition-colors"
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
