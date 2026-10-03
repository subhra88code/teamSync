import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { logInEmployee } from "../state/authAction";

export let useAuth = ()=>{

    let navigate = useNavigate()
    const dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const password = watch("password", "");
   // Password strength
  const getPasswordStrength = () => {
    if (!password) {
      return {
        level: 0,
        text: "",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) {
      return {
        level: 1,
        text: "Weak password",
      };
    }

    if (score === 2) {
      return {
        level: 2,
        text: "Medium password",
      };
    }

    if (score === 3) {
      return {
        level: 3,
        text: "Good password",
      };
    }

    return {
      level: 4,
      text: "Strong password",
    };
  };

  const onRegistrationSubmit= (data)=>{
        console.log(data);
        
  }

  const onLoginSubmit= (data)=>{
        dispatch(logInEmployee(data))
        navigate('/home')
  }

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onRegistrationSubmit,
    onLoginSubmit,
    getPasswordStrength,
    navigate
  }
}
