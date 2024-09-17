type FieldErrorsProps = {
  message?: string;
};

function FieldErrors({ message }: FieldErrorsProps) {
  return (
    <>
      <p className="text-red-500 text-sm ">{message}</p>
    </>
  );
}

export default FieldErrors;
