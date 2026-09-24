import React from 'react'
import { Link } from 'react-router-dom'

export default function Cancellation() {
  return (
    <div className="bg-white mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-10 font-sans text-gray-800">
      
      <h2 className="mt-16 md:mt-20 text-center text-lg md:text-xl font-bold">Service</h2>
      <h1 className='text-center text-xl sm:text-xl md:text-2xl font-bold'>Cancellation Policy</h1>

      <p className='py-6 text-gray-400 font-semibold text-sm sm:text-base leading-relaxed'>
        At KRAD GLOBAL TRAVEL LLC, we are committed to nurturing a trustworthy relationship with you. This Cancellation Policy outlines the terms under which you may cancel your hotel or car rental bookings.
      </p>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>General Policy</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>All bookings made through KRAD GLOBAL TRAVEL LLC for car rentals and hotel accommodations are subject to this Cancellation Policy.</li>
        <li>Specific cancellation terms may vary by service provider. Please review the cancellation terms specific to your booking at the time of reservation.</li>
      </ul>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>Cancellation Requests</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>Cancellation requests must be made at least 6 hours before the scheduled hotel check-in or car rental pick-up time.</li>
        <li>Requests must be initiated via phone call to our customer support line. For verification, we also require email confirmation of your cancellation request.</li>
        <li>Approved cancellations made in accordance with this policy may be eligible for a full or partial refund, depending on the service provider’s refund terms.</li>
        <li>Refunds, if applicable, will be issued to the original method of payment within 7 business days of confirmation.</li>
        <li>Any applicable cancellation fees will be disclosed at the time of confirmation.</li>
      </ul>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>Non-Cancellable & Non-Refundable Situations</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>Some bookings may be strictly non-cancellable, depending on the service provider’s terms.</li>
        <li>Non-refundable bookings will be clearly labeled during the booking process. If a booking is marked as non-cancellable, it will not qualify for any refund, regardless of the circumstances.</li>
        <li>Cancellations will not be honored in the event of no-shows, late arrivals, strikes, overbookings, or force majeure events beyond our control or the provider’s control.</li>
      </ul>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>Customer Responsibilities</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>It is your responsibility to review and understand the cancellation policy before confirming your booking.</li>
        <li>Delays in responding to or completing the cancellation request may result in failure to process the request.</li>           
      </ul>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>Disputes & Contact</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>If you believe your cancellation request was mishandled or if you have concerns about a booking charge, we encourage you to contact our support team before initiating a chargeback or dispute with your bank or card issuer.</li>
      </ul>

      <h1 className='text-xl md:text-xl text-gray-700 font-bold'>Policy Updates</h1>
      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li>
          KRAD GLOBAL TRAVEL LLC may update this Cancellation Policy at any time without notice. Continued use of our services implies acceptance of any changes. This Cancellation Policy is governed by and forms part of our 
          <Link to="/terms-condition" className='text-blue-600 underline'> Terms and Conditions.</Link>
        </li>
      </ul>

    </div>
  )
}