import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

function FormError({ message }: FormErrorProps) {
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
        className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive "
      >
        <TriangleAlert className="h-4 w-4" />
        <span>{message}</span>
      </motion.div>
    </>
  );
}

export default FormError;
