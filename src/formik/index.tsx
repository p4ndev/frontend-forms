import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./index.css";

interface RegisterDto{
  fullname : string,
  email: string,
  password : string
}

function Register() {

  const formikData : RegisterDto = { fullname: "", email: "", password: "" };

  const formikOnValidate = (values : RegisterDto) => {
    const errors = { fullname: "", email: "", password: "" };
    
    if (!values.fullname)
      errors.fullname = "Required";

    if (!values.email)
      errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = "Invalid email address";

    if (!values.password)
      errors.password = "Required";
    
    return errors;
  }

  const formikOnSubmit = (values : RegisterDto, setSubmitting : (isSubmitting: boolean) => void) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className="App">
     <center>
       <h1>Register a new account</h1>
       <Formik
          initialValues={formikData}
          validate={formikOnValidate}
          onSubmit={formikOnSubmit}>
         {({ isSubmitting }) => (
           <Form>
             <Field
               type="text"
               name="fullname"
               placeholder="Enter your fullname"
             />
             <ErrorMessage name="fullname" component="div" />

             <Field
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />

             <Field type="password" name="password" />
             <ErrorMessage name="password" component="div" />

             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
     </center>
   </div>
  );
}

export default Register;
