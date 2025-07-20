"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/visitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      toast({
        title: "Message sent!",
        description: "Thanks for contacting me. I’ll get back to you soon.",
      });

      reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 pt-[120px] flex flex-col items-center w-full relative"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Contact Me</h2>

      <div className="relative w-full max-w-lg min-w-[300px] px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              {...register("name")}
              className="border border-secondary focus:ring-secondary"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="border border-secondary focus:ring-secondary"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              {...register("message")}
              className="border border-secondary focus:ring-secondary"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:text-accent text-on-accent"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 mr-2" />}
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
