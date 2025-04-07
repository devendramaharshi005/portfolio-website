import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiCodeforces,
} from "react-icons/si";

export default function SocialLinks() {
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
      <div className="flex space-x-4">
        <Link
          href="https://github.com/devendramaharshi005"
          className="text-foreground hover:text-primary text-2xl"
        >
          <AiFillGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/devendra-maharshi-995704212"
          className="text-foreground hover:text-primary text-2xl"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="mailto:devendramaharshi005@gmail.com"
          className="text-foreground hover:text-primary text-2xl"
        >
          <MdEmail />
        </Link>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Coding Profiles</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="https://leetcode.com/u/KRypC4oWfv"
          className="flex items-center space-x-2 text-foreground hover:text-primary"
        >
          <SiLeetcode className="text-yellow-500 text-xl" />
          <span>LeetCode</span>
        </Link>
        {/* <Link href="#" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiCodechef className="text-orange-500 text-xl" />
          <span>CodeChef</span>
        </Link> */}
        <Link
          href="https://www.geeksforgeeks.org/user/jony2102001/"
          className="flex items-center space-x-2 text-foreground hover:text-primary"
        >
          <SiGeeksforgeeks className="text-green-600 text-xl" />
          <span>GeeksforGeeks</span>
        </Link>
        {/* <Link href="#" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiCodeforces className="text-blue-600 text-xl" />
          <span>Codeforces</span>
        </Link> */}
      </div>
    </section>
  );
}
