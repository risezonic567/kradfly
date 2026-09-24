import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactUsPage'
import FlightPage from './pages/FlightPage'
import AboutUsPage from './pages/AboutUsPage'
import Cancellation from './pages/Policy/Cancellation'
import TermsCondition from './pages/Policy/Term-condition'
import PrivacyPolicy from './pages/Policy/Privacy-Policy'
import Disclaimer from './pages/Policy/Disclaimer'
import RefundPolicy from './pages/Policy/Refund-Policy'
import Flight from './components/Flight'
import CarRentalPage from './pages/CarRentalPage'
import HotelPage from './pages/HotelPage'

import CruisePage from './pages/CruisePage'
import TravelsDeal from './components/TravelsDeal'
import California from './components/Location/California'
import Chicago from './components/Location/Chicago'
import LasVegas from './components/Location/LasVegas'
import LosAngeles from './components/Location/LosAngeles'
import Miami from './components/Location/Miami'
import NewYork from './components/Location/NewYork'
import SanFrancisco from './components/Location/SanFrancisco'
import Sanjosh from './components/Location/Sanjosh'
import Thailand from './components/Location/Thailand'
import Hongkong from './components/Location/Hongkong'
import Maldives from './components/Location/Maldives'
import Switzerland from './components/Location/Switzerland'
import CheckoutPage from './components/CheckoutPage'
import NotFound from './components/NotFound'
import FlightLoader from './components/FlightLoader'
import ScrollTop from './components/ScrollTop'
import ScrollButton from './components/ScrollButton'
import Signup from './pages/User/Signup'
import Login from './pages/User/Login'
import Profile from './pages/User/Profile'
import ForgetPassword from './pages/User/ForgetPassword'
import { GoogleOAuthProvider } from '@react-oauth/google'
import FlightSearchPage from './components/flights-lists';
import FlightDetailsPage from './components/FlightDetailsPage';
import Faq from './pages/FaqPage';


export default function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000)

    // return clearTimeout(timer)
  }, [])

  // if(loader)
  // return <FlightLoader/>

  return (
    <>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_KEY}>
          <ScrollTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<FlightPage />} />
            <Route path='/car-rental' element={<CarRentalPage />} />
            <Route path='/hotel' element={<HotelPage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/cruise' element={<CruisePage />} />
            <Route path='/flight' element={<Flight />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/travel-deals' element={<TravelsDeal />} />
            <Route path='/checkout' element={<CheckoutPage />} />


            <Route path='/flight-details' element={<FlightDetailsPage />} />



            {/* location pages */}

            <Route path='/california' element={<California />} />
            <Route path='/chicago' element={<Chicago />} />
            <Route path='/las-vegas' element={<LasVegas />} />
            <Route path='/los-angeles' element={<LosAngeles />} />
            <Route path='/miami' element={<Miami />} />
            <Route path='/new-york' element={<NewYork />} />
            <Route path='/san-francisco' element={<SanFrancisco />} />
            <Route path='/sanjosh' element={<Sanjosh />} />
            <Route path='/thailand' element={<Thailand />} />
            <Route path='/hong-kong' element={<Hongkong />} />
            <Route path='/maldives' element={<Maldives />} />
            <Route path='/switzerland' element={<Switzerland />} />

            {/* User Section */}




            <Route path='/cancellation' element={<Cancellation />} />
            <Route path='/terms-condition' element={<TermsCondition />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />



            <Route path="/flight-list" element={<FlightSearchPage />} />



            <Route path='/contact-us' element={<ContactPage />} />

            <Route path='/*' element={<NotFound />} />

          </Routes>
          <ScrollButton />
          <Footer />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  )
}
