import { CheckCircledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

type FormErrorProps = {
  message?: string;
};

function FormSuccess({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-600 "
      >
        <CheckCircledIcon className="h-5 w-5" />
        <span>{message}</span>
      </motion.div>
    </>
  );
}

export default FormSuccess;
