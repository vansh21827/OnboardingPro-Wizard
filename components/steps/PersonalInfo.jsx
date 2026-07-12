import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { personalSchema } from "../../schemas/personalSchema.js";

import Input from "../ui/Input";
import Button from "../ui/Button";

function PersonalInfo({
  formData,
  setFormData,
  nextStep,
}) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(personalSchema),
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
        Personal Information
      </h2>

      <p className="step-subtitle">
        Tell us about yourself.
      </p>

      <Input
        label="First Name"
        placeholder="Vansh"
        {...register("firstName")}
        error={errors.firstName?.message}
      />

      <Input
        label="Last Name"
        placeholder="Bansal"
        {...register("lastName")}
        error={errors.lastName?.message}
      />

      <Input
        label="Email"
        placeholder="vansh@gmail.com"
        {...register("email")}
        error={errors.email?.message}
      />

      <div className="button-row">

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

export default PersonalInfo;