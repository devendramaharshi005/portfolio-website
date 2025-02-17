// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 pt-[120px] flex flex-col items-center w-full">
//       <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

//       <form className="w-full max-w-lg min-w-[300px]">
//         <div className="mb-4">
//           <Input type="text" placeholder="Your Name" />
//         </div>
//         <div className="mb-4">
//           <Input type="email" placeholder="Your Email" />
//         </div>
//         <div className="mb-4">
//           <Textarea placeholder="Your Message" />
//         </div>
//         <Button type="submit" className="w-full">
//           Send Message
//         </Button>
//       </form>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 pt-[120px] flex flex-col items-center w-full relative"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Contact Me</h2>

      {/* Form Wrapper */}
      <div className="relative w-full max-w-lg min-w-[300px]">
        {/* Form */}
        <form className="w-full">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="border border-secondary focus:ring-secondary"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Your Email"
              className="border border-secondary focus:ring-secondary"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Your Message"
              className="border border-secondary focus:ring-secondary"
            />
          </div>
          <Button type="submit" className="w-full bg-accent text-on-accent">
            Send Message
          </Button>
        </form>

        <div className="absolute inset-0 bg-overlay bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg">
          <p className="text-center  text-primary/40 font-medium mb-4">
            Currently under development. Please contact me via LinkedIn or
            email.
          </p>
        </div>
      </div>
    </section>
  );
}
