import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  email     : string,
  password  : string,
};

export default function App() {
  
  const { register, handleSubmit, watch, formState : { errors } } = useForm<FormInputs>();

  const onSubmit : SubmitHandler<FormInputs> = data => console.log(data);

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>
        Email: <input defaultValue="email@aol.com" {...register("email")} />
      </label>
      
      <label>
        Password: <input {...register("password", { required: true })} type="password" />
      </label>

      { errors.password && <label className="error">Password is required</label> }
         
      <input type="submit" />
    </form>
  );
}