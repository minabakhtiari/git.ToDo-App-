
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Style.css";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  cityName:yup.string().required(),
  phoneNumber:yup.number().required().positive().integer(),
  jasit:yup.string().required(),
  nationalCode:yup.number().required().positive().integer(),
  email:yup.string().required()
});
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>City Name</label>
        <input {...register("cityName")} />
        {errors.cityName && <p>{errors.cityName.message}</p>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Jasit</label>
        <input {...register("jasit")} />
        {errors.jasit&& <p>{errors.jasit.message}</p>}
      </div>
      <div>
        <label>phoneNumber</label>
        <input type="number" {...register("phoneNumber", { valueAsNumber: true })} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <div>
        <label>National Code</label>
        <input type="number" {...register("nationalcode", { valueAsNumber: true })} />
        {errors.nationalcode && <p>{errors.nationalcode.message}</p>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email&& <p>{errors.email.message}</p>}
      </div>
      
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



















//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 // <React.StrictMode>
   // <App />
 // </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
