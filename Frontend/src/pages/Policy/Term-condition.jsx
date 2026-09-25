import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsCondition() {
  return (
    <div className="bg-white mx-auto max-w-5xl px-4 sm:px-6 md:px-8 py-10 font-sans text-gray-800">

      <h1 className="mt-16 md:mt-20 text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        AGREEMENT - Terms Of Service
      </h1>

      <p className="text-sm mt-10 sm:text-base text-gray-400 font-semibold leading-relaxed mb-6">
        Welcome to the Krad Fly LLC ("Krad Fly LLC", "we", "our", "us") website (collectively, the "Site").
        This website is governed and managed by Krad Fly LLC. based in New Jersey. By accessing or using the Site in any manner,
        you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, do not use the Site.
      </p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Services</h2>

      <ul className='list-disc text-gray-500 pl-5 sm:pl-6 py-5 space-y-2 text-sm sm:text-base'>
        <li> Krad Fly LLC provides a platform for booking travel-related services, including but not limited to car rentals, hotel accommodations, vacation packages, and travel insurance.
          We partner with various service providers to offer these services. </li>
        <li>  While we strive to provide accurate and up-to-date information,
          we do not warrant that the information on our Site is free of errors or omissions.</li>
      </ul>




      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Third-Party Service Providers</h2>

      <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">Car Rental Companies</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
        When booking a car rental through our Site, you are entering into an agreement with the car rental company, not with Krad Fly LLC.
        Your rental is subject to the terms and conditions of the specific car rental company. These may include:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>Age restrictions</li>
        <li>Driver's license requirements</li>
        <li>Insurance requirements</li>
        <li>Fuel policies</li>
        <li>Mileage limitations</li>
        <li>Cancellation and modification policies</li>
        <li>Additional driver fees</li>
        <li>Cross-border travel restrictions</li>
        <li>Vehicle return policies</li>
      </ul>

      <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">Hotels</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
        When booking a hotel through our Site, you are entering into an agreement with the hotel, not with Krad Fly LLC.
        Your stay is subject to the terms and conditions of the specific hotel. These may include:
      </p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>Check-in and check-out times</li>
        <li>Cancellation and modification policies</li>
        <li>Pet policies</li>
        <li>Smoking policies</li>
        <li>Additional guest fees</li>
        <li>Resort fees</li>
        <li>Parking fees</li>
        <li>Wi-Fi and amenity charges</li>
        <li>Age restrictions for booking</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Booking and Payments</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>All bookings are subject to availability and confirmation.</li>
        <li>Prices displayed on the Site are subject to change without notice.</li>
        <li>Payment methods accepted will be clearly displayed during the booking process.</li>
        <li>In some cases, you may be required to pay the service provider directly at the time of service.</li>
        <li>Currency conversion rates are based on various publicly available sources and should be used as guidelines only.</li>
        <li>Some bookings may require a deposit or prepayment. The terms of such payments will be clearly communicated during the booking process.</li>
        <li>Krad Fly LLC reserves the right to cancel bookings in cases of suspected fraud, abuse of our systems, or violations of these Terms.</li>
      </ul>
      <p className='mt-5 text-gray-500 font-semibold'>The descriptor billing will be Car Rental 8664033917.</p>


      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Cancellations, Modifications, and Refunds</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>All refund requests must follow the policies set by the individual service providers.</li>
        <li>Refunds are only issued once Krad Fly LLC receives confirmation from the provider that a refund is warranted.</li>
        <li>Approved refunds will be processed by Krad Fly within 7 business days of provider confirmation.</li>
        <li>Refunds will be returned to the original payment method, unless otherwise agreed upon.</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">User Responsibilities</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>You are responsible for providing accurate and complete information when making a booking.</li>
        <li>You must be at least 18 years old to use the Site and make bookings.</li>
        <li>You agree not to use the Site for any unlawful purpose or in any way that could damage, disable, or impair the Site.</li>
        <li>You are responsible for ensuring that you meet all requirements for your travel, including but not limited to valid passports, visas, vaccinations, and travel insurance.</li>
        <li>You agree to comply with all applicable laws and regulations of the countries you are traveling to or from.</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">User Accounts</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>You may be required to create an account to access certain features of the Site.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
        <li>
          You agree to notify us immediately of any unauthorized use of your account.
        </li>
        <li>We reserve the right to suspend or terminate your account at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Site, us, or third parties, or for any other message.</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Limitation of Liability</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>Krad Fly LLC acts solely as an intermediary between you and the service providers. We are not responsible for the actions, omissions, or policies of these third-party providers.</li>
        <li>To the fullest extent permitted by law, Krad Fly LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site or any services booked through the Site.</li>
        <li>We do not guarantee the accuracy, completeness, or timeliness of information on our Site.</li>
        <li>Krad Fly LLC is not liable for any losses or damages arising from your failure to comply with travel requirements, including but not limited to valid passports, visas, and health requirements.</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Intellectual Property</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>All content on the Site, including text, graphics, logos, and software, is the property of Krad Fly LLC or its content suppliers and is protected by United States and international copyright laws.</li>
        <li>You may not use, reproduce, distribute, or create derivative works from any content from the Site without our express written consent.</li>
        <li>Any feedback, comments, or suggestions you may provide regarding the Site is entirely voluntary and we will be free to use such feedback, comments or suggestions without any obligation to you.</li>
      </ul>
      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Privacy Policy</h2>
      <p className='text-gray-500'>Your use of the Site is also governed by our Privacy Policy, which can be found at <Link to="/privacy-policy" className='text-blue-600'>https://www.kradfly.com/privacy-policy.</Link>
        By using the Site, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">SMS Terms of Service</h2>
      <p className='mt-5 text-gray-500'>By providing your phone number to Krad Fly LLC, you agree to receive SMS messages regarding booking updates and travel support.</p>
      <p className='mt-5 text-gray-500'>You may reply STOP to opt out of messaging at any time.</p>
      <p className='mt-5 text-gray-500'>Reply HELP for customer support.</p>
      <p className='mt-5 text-gray-500'>Message and data rates may apply. Message frequency may vary.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Indemnification</h2>
      <p className='text-gray-500'>You agree to indemnify, defend, and hold harmless Krad Fly LLC, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including messageable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.</p>
      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Third-Party Links</h2>
      <p className='text-gray-500'>The Site may contain links to third-party websites. These links are provided solely as a convenience to you and do not imply an endorsement or relationship between Krad Fly LLC and the third-party site. We do not exercise control over third-party websites and are not responsible for their content or privacy policies.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Force Majeure</h2>
      <p className='text-gray-500'>Krad Fly LLC is not liable for any failure to perform due to unforeseen circumstances or causes beyond our messageable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.</p>
      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Dispute Resolution</h2>
      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mb-4 text-sm sm:text-base text-gray-500">
        <li>Any dispute arising from these Terms or your use of the Site shall first be attempted to be resolved through informal negotiations.</li>
        <li>If a dispute cannot be resolved informally, you agree that any claim or dispute will be resolved through binding arbitration, conducted on an individual basis, and not on a class-wide basis.</li>
        <li>The arbitration will be conducted in New Jersey, unless you and Krad Fly LLC agree otherwise.</li>
      </ul>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Modifications to Terms</h2>
      <p className='text-gray-500'>Krad Fly LLC reserves the right to modify these Terms at any time without prior notice. Your continued use of the Site after any changes indicates your acceptance of the modified Terms.</p>
      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Severability</h2>
      <p className='text-gray-500'>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Governing Law</h2>
      <p className='text-gray-500'>These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Entire Agreement</h2>
      <p className='text-gray-500'>These Terms constitute the entire agreement between you and Krad Fly LLC regarding the use of the Site, superseding any prior agreements between you and Krad Fly LLC relating to your use of the Site.</p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Descriptor</h2>
      <p className='text-gray-500'>

        Please note that transactions processed through our platform may appear on your billing statement as “Krad Fly Booking NJ - 8664033917.” This billing descriptor applies to all services booked through our platform, including car rentals, hotels, vacation packages, and travel insurance.
      </p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Dispute Resolution and Chargebacks</h2>
      <p className='text-gray-500'>

        Krad Fly will assist users in communicating with third-party service providers in the event of a service dispute. While we are not the merchant of record for provider services, we will provide documentation and support to help resolve any disputes, including those raised via credit card chargebacks or through payment processors like PayPal or Stripe. However, we do not guarantee specific outcomes for third-party issues.
      </p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Customer Support and Inguires</h2>
      <p className='text-gray-500'>
        For any payment-related inquiries, including questions about billing descriptors, chargeback support, or refund status, please contact us at support@7uptravel.com or call 866-403-3917. Our business address is Krad Fly, 17662 Irvine Blvd Suite 9, Tustin, CA 92780, United States. We aim to respond to all inquiries within 2 business days.
      </p>

      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Acknowledgment of Buyer Protection Rights</h2>
      <p className='text-gray-500'>Users may have access to payment platform protections depending on the method used (e.g., PayPal Purchase Protection or Stripe Dispute Resolution). Krad Fly does not restrict users’ rights to file claims under such protection policies but encourages users to contact us first for a faster resolution.</p>
      <h2 className="text-xl md:text-xl font-bold mt-6 mb-2">Business-to-Business (B2B) Payment Terms (For Trevipay Eligibility)</h2>
      <p className='text-gray-500'>For qualified business clients, Krad Fly may offer invoiced billing with net terms, subject to credit approval and separate agreement. Standard terms are Net 30, and late payments may incur a 1.5% monthly finance charge. Businesses interested in B2B billing should contact info@7uptravel.com to apply.</p>







    </div>
  )
}