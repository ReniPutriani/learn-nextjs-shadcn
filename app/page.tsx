"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <main>
      <aside></aside>
      <section>
        <Button onClick={() => {
          toast({
            title: "Hello",
            description: "This is a toast message",
            action: <Button>Undo</Button>,
          });
        }}>Click me</Button>
      </section>
    </main>
  );
}
