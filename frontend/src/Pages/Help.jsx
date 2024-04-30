import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Help = () => {
    const navigate = useNavigate();

    const [answersVisible, setAnswersVisible] = useState({
        compare: false,
        account: false,
        priceAlert: false,
        languages: false,
        issue: false,
        unsubscribe: false,
        browserSupport: false,
        dataPrivacy: false,
        forgotPassword: false,
        cancelOrder: false,
    });

    // Function to toggle the visibility of an answer
    const toggleAnswer = (question) => {
        setAnswersVisible((prevState) => ({
        ...prevState,
        [question]: !prevState[question],
        }));
    };

    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/login");
      } 
    },[]);
  return (
    <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Help Center</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                    <button
                        className="hover:text-blue-500 font-semibold"
                        onClick={() => toggleAnswer('compare')}
                    >
                        How do I compare gadgets on Compare Craze?
                    </button>
                    {answersVisible.compare && (
                        <p className="text-gray-700 ml-4">To compare gadgets, simply select the gadgets you want to compare and click on the "Compare" button. You can compare features, specifications, and prices side by side.</p>
                    )}
                    </li>
                    <li className="mb-2">
                    <button
                        className="hover:text-blue-500 font-semibold"
                        onClick={() => toggleAnswer('account')}
                    >
                        Can I create an account on Compare Craze?
                    </button>
                    {answersVisible.account && (
                        <p className="text-gray-700 ml-4">Yes, you can create an account on Compare Craze to access additional features such as saving your favorite gadgets, setting price alerts, and more. Click on the "Sign Up" button to create an account.</p>
                    )}
                    </li>
                    <li className="mb-2">
                    <button
                        className="hover:text-blue-500 font-semibold"
                        onClick={() => toggleAnswer('priceAlert')}
                    >
                        How do I use the price alert feature?
                    </button>
                    {answersVisible.priceAlert && (
                        <p className="text-gray-700 ml-4">To use the price alert feature, navigate to the product page of the gadget you're interested in. Click on the "Set Price Alert" button and enter your desired price threshold. We'll notify you via email when the price drops below this threshold.</p>
                    )}
                    </li>
                    <li className="mb-2">
                    <button
                        className="hover:text-blue-500 font-semibold"
                        onClick={() => toggleAnswer('languages')}
                    >
                        Is Compare Craze available in multiple languages?
                    </button>
                    {answersVisible.languages && (
                        <p className="text-gray-700 ml-4">Currently, Compare Craze is available in English only. However, we're working on adding support for multiple languages in the future.</p>
                    )}
                    </li>
                    <li className="mb-2">
                    <button
                        className="hover:text-blue-500 font-semibold"
                        onClick={() => toggleAnswer('issue')}
                    >
                        What if I encounter an issue with the website?
                    </button>
                    {answersVisible.issue && (
                        <p className="text-gray-700 ml-4">If you encounter any issues while using our website, please contact our customer support team for assistance. You can reach us via email at support@comparecraze.com or by phone at 1-800-COMPARE.</p>
                    )}
                    </li>
                    {/* Add more questions and answers as needed */}
                </ul>
                </div>
                <div className="border-t border-gray-200 p-4">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p className="mb-4">If you have any further questions or need assistance, please feel free to contact us:</p>
                <p>Email: support@comparecraze.com</p>
                <p>Phone: +91-9876543210</p>
                </div>
            </div>
        </div>  
        <Footer/>

    </>
  )
}

export default Help