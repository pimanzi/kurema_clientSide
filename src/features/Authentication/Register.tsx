import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Styles/Register.css";

// Define the interface for form data for Login
interface ILoginFormInput {
  loginEmail: string;
  passwordEmail: string;
}

// Define the interface for form data for Signup
interface ISignUpFormInput {
  firstName: string;
  lastName: string;
  signupEmail: string;
  signupPassword: string;
  confirmPassword: string;
}

export default function Register() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleLoginClick = () => setIsLogin(true);
  const handleSignupClick = () => setIsLogin(false);

  // react-hook-form setup for Login
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm<ILoginFormInput>();

  // react-hook-form setup for Signup
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: signupErrors },
    watch: watchSignup,
  } = useForm<ISignUpFormInput>();

  const passwordSignup = watchSignup("signupPassword");

  function onSubmitLogin(data: ILoginFormInput) {
    console.log("Login Data", data);
  }

  function onSubmitSignUp(data: ISignUpFormInput) {
    console.log("Signup Data", data);
  }

  return (
    <div className="wrapper">
      {/* Title Text */}
      <div className="title-text">
        {isLogin ? (
          <div className="w-full">
            <p className="title text-center font-playfair font-extrabold">
              Login
            </p>
            <p className="text-normal text-[#504f4f]">
              Welcome back! Let's create and explore art.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <p className="title text-center font-playfair font-extrabold">
              Signup
            </p>
            <p className="text-normal text-[#504f4f]">
              Join us to explore, create, and enjoy art!
            </p>
          </div>
        )}
      </div>

      {/* Slide Controls */}
      <div className="slide-controls">
        <input
          type="radio"
          name="slider"
          id="login"
          checked={isLogin}
          onChange={handleLoginClick}
        />
        <input
          type="radio"
          name="slider"
          id="signup"
          checked={!isLogin}
          onChange={handleSignupClick}
        />
        <label htmlFor="login" className="slide login">
          Login
        </label>
        <label htmlFor="signup" className="slide signup">
          Signup
        </label>
        <div className="slider-tab"></div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div className="form-inner">
          {isLogin ? (
            <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="login">
              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...registerLogin("loginEmail", {
                    required: "Email is required",
                  })}
                  className={loginErrors.loginEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {loginErrors.loginEmail && loginErrors.loginEmail.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  {...registerLogin("passwordEmail", {
                    required: "Password is required",
                  })}
                  className={loginErrors.passwordEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {loginErrors.passwordEmail &&
                    loginErrors.passwordEmail.message}
                </span>
              </div>
              <div className="font-bold text-[#ffcb05] hover:underline">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmitSignup(onSubmitSignUp)}
              className="signup"
            >
              <div className="flex gap-2">
                <div className="field">
                  <input
                    type="text"
                    placeholder="First name"
                    {...registerSignup("firstName", {
                      required: "First name is required",
                    })}
                    className={signupErrors.firstName ? "error" : ""}
                  />
                  <span className="text-sm text-red-400">
                    {signupErrors.firstName && signupErrors.firstName.message}
                  </span>
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Last name"
                    {...registerSignup("lastName", {
                      required: "Last name is required",
                    })}
                    className={signupErrors.lastName ? "error" : ""}
                  />
                  <span className="text-sm text-red-400">
                    {signupErrors.lastName && signupErrors.lastName.message}
                  </span>
                </div>
              </div>

              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...registerSignup("signupEmail", {
                    required: "Email is required",
                  })}
                  className={signupErrors.signupEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.signupEmail && signupErrors.signupEmail.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  {...registerSignup("signupPassword", {
                    required: "Password is required",
                  })}
                  className={signupErrors.signupPassword ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.signupPassword &&
                    signupErrors.signupPassword.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...registerSignup("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (value !== passwordSignup) {
                        return "Passwords do not match"; // Return error message if passwords don't match
                      }
                      return true; // Return true if passwords match
                    },
                  })}
                  className={signupErrors.confirmPassword ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.confirmPassword &&
                    signupErrors.confirmPassword.message}
                </span>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
