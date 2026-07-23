import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [params] = useSearchParams();

  useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const bookingId = params.get("bookingId")

  if (bookingId) {
    fetch("https://www.7uptravel.com/api/payment/payment-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bookingId })
    })
  }
}, [])

  return <h1>Payment Successful 🎉</h1>;
}