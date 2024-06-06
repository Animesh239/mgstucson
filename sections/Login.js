import { useState } from "react";
import { Title } from "../components/common/Title";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setNotification("");

    try {
      const response = await fetch("/api/user/route", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(formData)
        setNotification("Login successful! Redirecting to Dashboard...");
        setFormData({
          email: "",
          password: "",
        });
      } else {
        setNotification("Failed to Login. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setNotification("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="heading-title">
            <Title title="Let's get you Logged In!" className="title-bg" />
          </div>
          <div className="content py-1 ">
            <div className="right w-70">
              <form onSubmit={handleSubmit}>
                <div className="grid-1">
                  
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span>Password</span>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="show-password">
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={isPasswordVisible}
                    onChange={handlePasswordVisibility}
                  />
                  <label htmlFor="show-password">Show Password</label>
                </div>

                <button
                  className="button-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Authenticating..." : "Login"}
                </button>
              </form>
              {notification && <p className="notification">{notification}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
