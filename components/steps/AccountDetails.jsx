import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { accountSchema } from "../../schemas/accountSchema";

import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";

function AccountDetails({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
    defaultValues: formData,
  });

  const submit = (data) => {

    setFormData({
      ...formData,
      ...data,
    });

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>

      <h2 className="step-title">
        Account Details
      </h2>

      <p className="step-subtitle">
        Create your login credentials.
      </p>

      <Input
        label="Username"
        placeholder="john_doe"
        {...register("username")}
        error={errors.username?.message}
      />

      <PasswordInput
        label="Password"
        placeholder="********"
        {...register("password")}
        error={errors.password?.message}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="********"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      
      <p className="password-hint">
  Password must contain at least 8 characters.
</p>
      <div className="button-group">

        <Button
          variant="secondary"
          onClick={prevStep}
        >
          ← Back
        </Button>

        <Button
          type="submit"
          disabled={!isValid}
        >
          Next →
        </Button>

      </div>

    </form>
  );
}

export default AccountDetails;