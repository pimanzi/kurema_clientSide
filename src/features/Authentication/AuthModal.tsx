import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Register from "./Register";

export function AuthModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-fit px-8">
        {<Register></Register>}
      </DialogContent>
    </Dialog>
  );
}
