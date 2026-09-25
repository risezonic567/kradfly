import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  function validateEmail() {
    if (!email) return "Email is required"
    if (!/\S+@\S+\.\S+/.test(email)) return "Invalid email"
    return null
  }

  function validateOTP() {
    if (!otp) return "OTP is required"
    if (otp.length !== 6) return "OTP must be 6 digits"
    return null
  }

  function validatePassword() {
    if (!password) return "Password is required"
    if (password.length < 6) return "Password must be at least 6 characters"
    return null
  }

  async function sendOTP() {
    const emailError = validateEmail()
    if (emailError) {
      setError(emailError)
      return
    }

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      const response = await fetch("https://www.kradfly.com/api/user/forgetpassword1", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP")
      }

      setSuccess(data.message || "OTP sent successfully")
      setStep(2)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function verifyOTP() {
    const otpError = validateOTP()
    if (otpError) {
      setError(otpError)
      return
    }

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      const response = await fetch("https://www.kradfly.com/api/user/forgetpassword2", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP")
      }

      setSuccess(data.message || "OTP verified")
      setStep(3)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function resetPassword() {
    const passError = validatePassword()
    if (passError) {
      setError(passError)
      return
    }

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      const response = await fetch("https://www.kradfly.com/api/user/forgetpassword3", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password")
      }

      setSuccess(data.message || "Password updated successfully")

      setStep(1)
      setEmail("")
      setOtp("")
      setPassword("")

      navigate("/login")

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[400px] p-6 border rounded shadow">

        <h2 className="text-xl font-bold text-center mb-4">
          {step === 1 && "Reset Password"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "New Password"}
        </h2>

        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border mb-2"
            />
            <button onClick={sendOTP} className="w-full bg-blue-500 text-white p-2">
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border mb-2"
            />
            <button onClick={verifyOTP} className="w-full bg-blue-500 text-white p-2">
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border mb-2"
            />
            <button onClick={resetPassword} className="w-full bg-green-500 text-white p-2">
              {loading ? "Updating..." : "Update Password"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}