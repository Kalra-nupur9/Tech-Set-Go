import { useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  const closeForm = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="w-full h-full z-20 p-5 flex justify-center items-center absolute top-0 left-0 glass_bg">
          <form className="w-full max-w-sm lg:max-w-md border rounded-md flex flex-col p-6 bg-white    ">
            {/* Close Button */}
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeForm}
              ></button>
            </div>

            {/* User Icon */}
            <div className="w-full flex justify-center pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-person-square icon_login"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email id"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
              />
            </div>

            {/* Checkbox */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                View Password
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn_logIn">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
