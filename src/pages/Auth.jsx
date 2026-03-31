import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Auth() {
  const [mode, setMode] = new useState("signup")
  const { signup, user, login } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function onSubmit(data) {
    setError(null)
    let result;
    mode === "signup" ?
      result = signup(data.email, data.password)
      :
      result = login(data.email, data.password)
    result.success ?
      navigate("/")
      :
      setError(result.error)
  }
  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          {user && (
            <p>user logged in {user.email}</p>
          )}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="form-group-1">
                <label className="form-label" htmlFor="email">
                  Email
                </label><br />
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p>{errors.email.message}</p>
                )}
              </div>
              <div className="form-group-2">
                <label className="form-label" htmlFor="password">
                  Password
                </label><br />
                <input
                  className="form-input"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 4,
                      message: "Minimum 4 character required"
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum 12 characters only"
                    }
                  })}
                />
                {errors.password && (
                  <p>{errors.password.message}</p>
                )}
              </div>
            </div>
            <button className="form-button" type="submit">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>Already have an account ?{" "}
                <a onClick={() => setMode("login")}>Login</a>
              </p>
            ) : (
              <p>Don't have an account ?{" "}
                <a onClick={() => setMode("signup")}>Sign Up</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
