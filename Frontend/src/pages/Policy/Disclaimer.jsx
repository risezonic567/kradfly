import React from 'react'
import { Link } from 'react-router-dom'

export default function Disclaimer() {
  return (
    <>
     <div className="bg-white mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-10 font-sans text-gray-800">

      <h1 className="text-center mt-20 text-md sm:text-md md:text-md font-bold">
        Service
      </h1>

      <h1 className="text-center text-xl md:text-4xl font-bold mt-2">
        Disclaimer
      </h1>

    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Disclaimer</h2>
   <p className='text-gray-500'>
   At Krad Global Travel, we strive to provide accurate, up-to-date, and helpful travel information through our website and services. However, all content is intended for general informational purposes only and should not be considered a guarantee. We make no representations or warranties—express or implied—regarding the completeness, accuracy, reliability, availability, or suitability of any information, products, services, or graphics found on our website or linked through it.
   </p>
    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Travel Information</h2>
    <p className='text-gray-500'>
        All travel-related information—such as flight schedules, hotel availability, and pricing—is subject to change without notice. Prices displayed may vary based on demand, time of booking, or provider updates. We strongly recommend confirming all details directly with the relevant airline, hotel, or service provider before finalizing any travel plans.
    </p>

    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Third-Party Services</h2>
    <p className='text-gray-500'>
        Krad Global Travel acts solely as an intermediary between customers and independent third-party service providers, including but not limited to airlines, hotels, car rental agencies, and insurance companies. By using our services, you acknowledge that Krad Global Travel is not responsible for the performance, actions, or omissions of these third parties. Any agreements, transactions, or disputes between you and these providers are entirely your responsibility.
    </p>
    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Booking Terms and Conditions</h2>
    <p className='text-gray-500'>
        All bookings made through Krad Global Travel are subject to the terms and conditions of the respective third-party service providers. We urge users to carefully review these terms prior to completing any transaction. Krad Global Travel is not liable for any issues that arise due to non-compliance with these conditions.
    </p>


    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Travel Risks</h2>
    <p className='text-gray-500'>
Travel inherently involves risks—including delays, cancellations, loss of luggage, illness, and other unexpected events. By choosing to use our services, you accept these risks. Krad Global Travel is not liable for any damages, losses, or expenses incurred as a result of travel-related disruptions. We highly recommend purchasing comprehensive travel insurance to protect against these risks.
    </p>
    
    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Limitation of Liability</h2>
<p className='text-gray-500'>

    To the fullest extent permitted by law, Krad Global Travel shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services, or your reliance on any provided information. This includes but is not limited to loss of profits, data, goodwill, or other intangible losses—even if we have been advised of such possibilities.
</p>


    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Governing Law</h2>
    <p className='text-gray-500'>
        This disclaimer and your use of our services are governed by the laws of the jurisdiction in which Krad Global Travel operates. Any disputes shall fall under the exclusive jurisdiction of the courts in that region, without regard to conflict of law principles.
    </p>

    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Changes to the Disclaimer</h2>

    <p className='text-gray-500'>
        Krad Global Travel reserves the right to update or modify this disclaimer at any time without prior notice. Continued use of our website and services after any changes constitutes your acceptance of the updated terms. We encourage you to review this disclaimer periodically.
    </p>
    
    <h2 className="text-xl md:text-xl font-bold mb-5 mt-8">Privacy Notice</h2>
    <p className='mb-3 text-gray-500'>
        For details on how we collect, use, and protect your personal information, please refer to our <Link to="/privacy-policy" className='text-blue-600'>Privacy Policy</Link>. By using our services, you agree to the handling of your data in accordance with this policy.
    </p>
<p className='text-gray-500'>
    For any questions or concerns regarding this disclaimer, please contact us at <strong>info@7uptravel.com</strong> or call <strong>+971-542919259</strong>. Thank you for choosing KRAD GLOBAL TRAVEL LLC for your travel needs.
</p>

    </div>
    </>
  )
}
