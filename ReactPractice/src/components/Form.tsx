import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

let schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  let onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {errors.name && (
        <p className="text-danger">Name must be 3 characters long.</p>
      )}

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}

      <button disabled={!isValid} className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
