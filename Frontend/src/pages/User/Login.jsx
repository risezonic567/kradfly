import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

 if (!formData.email || !formData.password) {
  return toast.warning("All fields are required ⚠️");
}

  try {
    setLoading(true);
    setError("");

    const res = await fetch("https://www.7uptravel.com/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    // console.log("LOGIN RESPONSE:", result); 

    if (!res.ok || result.result === "Fail" || result.success === false) {
      throw new Error(
        result.message || result.message || "Login Failed ❌"
      );
    }
    toast.success("Login Successful 🎉");

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userid", result.data?._id || result.user?._id);
    localStorage.setItem("token", result.token || "");
    localStorage.setItem("name", result.data?.name || result.user?.name);

    navigate("/profile");

  } catch (err) {
    console.log("ERROR:", err)

    setError(typeof err === "string" ? err : err.message);

  } finally {
    setLoading(false);
  }
};
//  const handleGoogleLogin = async (credentialResponse) => {
//   try {
//     const res = await fetch("https://www.7uptravel.com/api/user/google-auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         token: credentialResponse.credential,
//       }),
//     });

//     const result = await res.json();

//     console.log("GOOGLE RESULT:", result)

//     if (!result.success) {
//       throw new Error(result.message || "Google Login Failed");
//     }

//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("userid", result.user._id);
//     localStorage.setItem("name", result.user.name);
//     localStorage.setItem("token", result.token);

//     navigate("/profile");

//   } catch (err) {
//     console.log("ERROR:", err);
//     setError(err.message || "Google Login Failed");
//   }
// };


  return (
    <div className="flex items-center justify-center mt-20 min-h-[80vh] px-4">
      <div className="w-full max-w-md p-8 bg-white backdrop-blur-md border border-blue-500/30 rounded-[2rem] shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-gray-800">
            Welcome <span className="text-blue-600">Back</span>

             <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
          </h2>
          <p className="text-gray-500 mt-2 font-medium">Enter credentials to continue</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase ml-1 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase ml-1 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-blue-500 transition-all bg-gray-50 focus:bg-white text-black"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 text-red-500 text-sm rounded-xl text-center font-semibold animate-pulse">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-sm px-1">
            {/* <label className="flex items-center text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded accent-blue-600 w-4 h-4" />
              Keep me signed in
            </label> */}
            <Link to="/forget-password" className="text-blue-600 font-bold hover:underline">
              Reset Your Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? "Please Wait..." : "LOG IN"}
          </button>
        </form>
{/* 
        <div className="mt-4 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin} 
            // auto_select={false}
          />
        </div> */}

        <p className="mt-8 text-center text-gray-500 font-medium">
          New here?
          <Link className="ml-2 text-blue-600 font-bold hover:underline" to="/sign-up">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}