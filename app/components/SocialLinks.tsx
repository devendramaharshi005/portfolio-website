// import { Github, Linkedin, Mail, Code2 } from "lucide-react"
// import Link from "next/link"

// export default function SocialLinks() {
//   return (
//     <section className="py-8 flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
//       <div className="flex space-x-4">
//         <Link href="https://github.com/yourusername" className="text-foreground hover:text-primary">
//           <Github size={24} />
//         </Link>
//         <Link href="https://linkedin.com/in/yourusername" className="text-foreground hover:text-primary">
//           <Linkedin size={24} />
//         </Link>
//         <Link href="mailto:devendramaharshi005@gmail.com" className="text-foreground hover:text-primary">
//           <Mail size={24} />
//         </Link>
//       </div>
//       <h2 className="text-2xl font-bold mt-8 mb-4">Coding Profiles</h2>
//       <div className="flex flex-wrap gap-4">
//         <Link
//           href="https://leetcode.com/yourusername"
//           className="flex items-center space-x-2 text-foreground hover:text-primary"
//         >
//           <Code2 size={20} />
//           <span>LeetCode</span>
//         </Link>
//         <Link
//           href="https://www.codechef.com/users/yourusername"
//           className="flex items-center space-x-2 text-foreground hover:text-primary"
//         >
//           <Code2 size={20} />
//           <span>CodeChef</span>
//         </Link>
//         <Link
//           href="https://auth.geeksforgeeks.org/user/yourusername"
//           className="flex items-center space-x-2 text-foreground hover:text-primary"
//         >
//           <Code2 size={20} />
//           <span>GeeksforGeeks</span>
//         </Link>
//         <Link
//           href="https://codeforces.com/profile/yourusername"
//           className="flex items-center space-x-2 text-foreground hover:text-primary"
//         >
//           <Code2 size={20} />
//           <span>Codeforces</span>
//         </Link>
//       </div>
//     </section>
//   )
// }

import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";

export default function SocialLinks() {
  return (
    <section className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
      <div className="flex space-x-4">
        <Link href="https://github.com/yourusername" className="text-foreground hover:text-primary text-2xl">
          <AiFillGithub />
        </Link>
        <Link href="https://linkedin.com/in/yourusername" className="text-foreground hover:text-primary text-2xl">
          <AiFillLinkedin />
        </Link>
        <Link href="mailto:devendramaharshi005@gmail.com" className="text-foreground hover:text-primary text-2xl">
          <MdEmail />
        </Link>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Coding Profiles</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="https://leetcode.com/yourusername" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiLeetcode className="text-yellow-500 text-xl" />
          <span>LeetCode</span>
        </Link>
        <Link href="https://www.codechef.com/users/yourusername" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiCodechef className="text-orange-500 text-xl" />
          <span>CodeChef</span>
        </Link>
        <Link href="https://auth.geeksforgeeks.org/user/yourusername" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiGeeksforgeeks className="text-green-600 text-xl" />
          <span>GeeksforGeeks</span>
        </Link>
        <Link href="https://codeforces.com/profile/yourusername" className="flex items-center space-x-2 text-foreground hover:text-primary">
          <SiCodeforces className="text-blue-600 text-xl" />
          <span>Codeforces</span>
        </Link>
      </div>
    </section>
  );
}
