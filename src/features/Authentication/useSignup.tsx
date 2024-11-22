import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signingUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log("success");
      toast.success("User successfully created,");
    },
    onError: (err) => {
      console.error(err);
      throw new Error(err.message);
    },
  });
  return { signingUp, isSigningUp };
}

export default useSignup;
