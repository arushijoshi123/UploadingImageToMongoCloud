import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./login.module.css"; // Import the CSS module

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter(); //initialize the useRouter hook
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://uploadimagetomongodbapi.onrender.com/user/login",
        formData
      );
      console.log(response.data);
      if (response.status == 200) {
        // Assuming the token is returned in the response data as 'token'
        const token = response.data.token;

        // Store the token in the local storage
        localStorage.setItem("mykey", token);
        router.push("/image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button type="submit" className={styles["login-button"]}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
