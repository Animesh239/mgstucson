import { useState } from "react";
import { Title } from "../components/common/Title";
import useSWR from "swr";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const fetcher = (url) => fetch(url).then((res) => res.json());

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
      const { data, error } = useSWR("/api/auth", fetcher);

      if (!error && data) {
        console.log(data);
        setNotification("Login successful! Redirecting to Dashboard...");
        setFormData({
          username: "",
          email: "",
          password: "",
          role: "USER",
        });
      } else {
        setNotification("Invalid credentials. Please try again.");
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
                    <span>Username</span>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      pattern="[a-z]*"
                      title="Username must be lowercase letters only"
                    />
                  </div>
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
                  <div className="grid-2">
                  <div className="show-password">
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={isPasswordVisible}
                    onChange={handlePasswordVisibility}
                  />
                  <label htmlFor="show-password">Show Password</label>
                </div>
                  <div className="inputs">
                    <span>ACCESS</span>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div></div>
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
