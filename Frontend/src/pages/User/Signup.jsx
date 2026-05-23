import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!data.name || !data.userName || !data.email || !data.phone || !data.password) {
    //   return toast.warning("All fields are required ⚠️");
    // }

    // if (data.password !== data.cpassword) {
    //   return toast.warning("Password do not Match");
    // }

    try {

      setLoading(true);
      setError("");

      const { cpassword, ...finalData } = data;

      const response = await fetch("https://www.7upflight-ticket.com/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalData)
      });

      const result = await response.json();

      // console.log("SIGNUP RESPONSE:", result)

     if (result.result !== "Done") {
      if (Array.isArray(result.message)) {
        throw new Error(result.message.join(", "));
      } else if (typeof result.message === "object") {
        throw new Error(Object.values(result.message).join(", "));
      } else {
        throw new Error(result.message || "Signup failed");
      }
    }
    toast.success("Account created successfully 🎉");
      setSuccess(true);

    } catch (err) {
      console.log("ERROR:", err);
      setError(typeof err === "string" ? err : err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/profile");
    }
  }, [success, navigate])

  return (
    <div className="flex items-center justify-center mt-20 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="relative w-full max-w-xl p-5 mx-4 backdrop-blur-xl border border-blue-600 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-blue-400">Sign Up</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Please enter your details to sign Up
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 gap-6">
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />

            <input
              name="userName"
              value={data.userName}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />

            <input
              name="phone"
              value={data.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <input
              name="password"
              value={data.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />

            <input
              name="cpassword"
              value={data.cpassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 rounded-lg border text-black"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {error && (
            <p className="mt-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-medium animate-bounce">
              {error}
            </p>
          )}

        </form>

        <p className="mt-5 text-center text-gray-400 text-md">
          You have an account?
          <Link
            className="ml-1 text-blue-400 font-semibold hover:underline"
            to="/login"
          >
            Login Account
          </Link>
        </p>

      </div>
    </div>
  );
}