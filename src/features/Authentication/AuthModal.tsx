import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Register from "./Register";
import { useState } from "react";

export function AuthModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-[90vw] px-3 sm:max-w-[420px] sm:px-6 md:max-w-[480px] lg:max-w-[500px]">
        {<Register setOpen={setOpen}></Register>}
      </DialogContent>
    </Dialog>
  );
}
