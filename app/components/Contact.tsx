import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-16 pt-[120px] flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

      <form className="w-full max-w-lg min-w-[300px]">
        <div className="mb-4">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Message" />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
