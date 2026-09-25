import React from 'react'


export default function RefundPolicy() {
    return (
        <>
            <div className="bg-white mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-10 font-sans text-gray-800">

                <h1 className="text-center mt-20 text-md sm:text-md md:text-md font-bold">
                    Service
                </h1>

                <h1 className="text-center text-xl md:text-4xl font-bold mt-2">
                    Refund Policy
                </h1>


                <p className='text-gray-500 mt-5'>
                    At Krad Fly LLC, we aim to handle refund requests in a fair, transparent, and timely manner. This Refund Policy explains how we process and issue refunds for hotel and car rental bookings made through our platform.
                </p>

                <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">General Policy</h2>

                <ul className="list-disc pl-10  space-y-1 mb-4 text-sm sm:text-base text-gray-500">
                    <li>Refund eligibility is determined entirely by the terms and conditions of the service provider (e.g., hotel or car rental company).</li>
                    <li>Krad Fly acts as a facilitator and does not guarantee the approval of refund requests.</li>
                    <li>Users are responsible for reviewing the provider’s refund terms at the time of booking.</li>
                </ul>

                <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Refund Process</h2>

                <ul className="list-disc pl-10  space-y-1 mb-4 text-sm sm:text-base text-gray-500">
                    <li>We will submit refund requests on your behalf to the appropriate provider.</li>
                    <li>Approval, refund amounts, and processing times are governed by the provider’s policies.</li>
                    <li>Refunds may take 60 to 90 days from the date of request, depending on the provider’s response time and banking procedures.</li>
                    <li>Krad Fly is not responsible for delays caused by the provider or financial institutions.</li>
                </ul>

                
                <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Fees</h2>

                <ul className="list-disc pl-10  space-y-1 mb-4 text-sm sm:text-base text-gray-500">
                    <li>Krad Fly LLC may charge a post-booking service fee for handling refund-related communication and requests. This fee applies per booking.</li>
                    <li>This fee is only charged if the provider authorizes a refund or grants a waiver.</li>
                    <li>If a refund is denied by the provider, any Krad Fly post-booking service fees already charged will be refunded—however, original booking fees are non-refundable.</li>
                    
                </ul>

                 <h2 className="text-xl md:text-xl font-bold mb-3 mt-8">Non-Refundable Situations</h2>
                    <p className='text-gray-500 mb-3'>Refunds will not be issued under the following circumstances:</p>

                <ul className="list-disc pl-10  space-y-1 mb-4 text-sm sm:text-base text-gray-500">
                    <li>No-shows, late arrivals, or early checkouts.</li>
                    <li>Delays or cancellations due to force majeure events (e.g., natural disasters, strikes, or pandemics).</li>
                   <li>Bookings marked as non-refundable by the provider at the time of purchase.</li>
                </ul>

                  <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Policy Modifications</h2>

                <ul className="list-disc pl-10  space-y-1 mb-4 text-sm sm:text-base text-gray-500">
                    <li>Krad Fly LLC reserves the right to update or modify this Refund Policy at any time without prior notice.</li>
                    <li>Continued use of our platform after any changes constitutes your acceptance of the revised policy.</li>
                </ul>
            </div>
        </>
    )
}
