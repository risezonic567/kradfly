import express from 'express'
import { initiatePayment, paymentSuccess, paymentWebhook } from '../controller/PaymentController.js'
import { authUser } from "../middlewares/authentication.js"

const PaymentRouter = express.Router()

PaymentRouter.post("/initiate", initiatePayment)
PaymentRouter.post("/payment-success", paymentSuccess)
PaymentRouter.post("/webhook", paymentWebhook)

export default PaymentRouter