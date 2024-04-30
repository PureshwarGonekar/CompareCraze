import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Inbox = () => {
    const navigate = useNavigate();
    const messages = [
    {
      id: 1,
      sender: 'Admin',
      subject: 'Meeting Tomorrow',
      body: 'Explore the future of smart homes and discover how technology is transforming our living spaces. Read more on Compare Craze!',
      date: '2024-04-30T10:00:00Z',
      read: false,
    },
    {
      id: 2,
      sender: 'Saurabh Kumar',
      subject: 'New Product Launch',
      body: 'Hello! We are excited to announce our new product launch next week. Stay tuned for updates.',
      date: '2024-04-29T15:30:00Z',
      read: true,
    },
    {
        id: 3,
        sender: 'Compare Craze',
        subject: 'New Feature Announcement',
        body: 'Hello there! We are excited to announce the launch of our new compare feature. Now you can easily compare multiple gadgets side by side. Check it out!',
        date: '2024-04-28T11:45:00Z',
        read: true,
    },
    {
        id: 4,
        sender: 'Compare Craze',
        subject: 'Exclusive Deals Inside!',
        body: 'Don\'t miss out on our exclusive deals! Visit Compare Craze today to find amazing discounts on your favorite gadgets.',
        date: '2024-04-25T09:20:00Z',
        read: false,
    },
    {
        id: 5,
        sender: 'Customer Support',
        subject: 'Your Feedback Matters!',
        body: 'Hi there! We strive to provide the best experience for our users. Please take a moment to share your feedback with us. Your opinion helps us improve.',
        date: '2024-04-23T14:10:00Z',
        read: true,
    },
    {
        id: 6,
        sender: 'Tech News Daily',
        subject: 'Top 10 Gadgets of 2024',
        body: 'Discover the top 10 must-have gadgets of 2024! From smartphones to smartwatches, stay ahead with the latest in technology.',
        date: '2024-04-20T08:30:00Z',
        read: true,
    },
        {
        id: 7,
        sender: 'Compare Craze',
        subject: 'Upgrade Your Gadget Game!',
        body: 'Explore our selection of the latest gadgets and upgrade your tech game today! From smartphones to gaming consoles, we have it all.',
        date: '2024-04-18T13:45:00Z',
        read: false,
    },
    {
        id: 8,
        sender: 'Tech Tips',
        subject: 'Tips for Choosing the Right Laptop',
        body: 'Struggling to choose the right laptop? Check out our latest article for tips and advice on finding the perfect laptop for your needs.',
        date: '2024-04-15T10:20:00Z',
        read: false,
    },
    {
        id: 9,
        sender: 'Product Updates',
        subject: 'New Models Added!',
        body: 'We\'ve just added the latest models from top brands to our website. Visit Compare Craze to see what\'s new!',
        date: '2024-04-12T11:30:00Z',
        read: true,
    },
    {
        id: 10,
        sender: 'Compare Craze',
        subject: 'Stay Connected with Us!',
        body: 'Follow us on social media for the latest updates, deals, and tech news. Stay connected with Compare Craze!',
        date: '2024-04-10T15:00:00Z',
        read: true,
    },
    {
        id: 11,
        sender: 'Tech Trends Weekly',
        subject: 'Emerging Trends in Wearable Tech',
        body: 'Curious about the latest trends in wearable technology? Stay ahead of the curve with our weekly roundup of emerging trends.',
        date: '2024-04-08T09:45:00Z',
        read: false,
    },
    {
        id: 12,
        sender: 'Customer Support',
        subject: 'Need Assistance?',
        body: 'Having trouble with our website or need assistance? Don\'t hesitate to reach out to our customer support team for help!',
        date: '2024-04-06T14:20:00Z',
        read: true,
    },
    {
        id: 13,
        sender: 'Compare Craze',
        subject: 'Introducing Price Alerts!',
        body: 'Now you can set price alerts for your favorite gadgets and never miss a deal! Try out our new price alert feature today.',
        date: '2024-04-04T10:30:00Z',
        read: false,
    },
    {
        id: 14,
        sender: 'Product Reviews',
        subject: 'Real User Reviews',
        body: 'Looking for honest reviews before making a purchase? Check out our collection of real user reviews to make an informed decision.',
        date: '2024-04-02T08:15:00Z',
        read: false,
    },
    {
        id: 15,
        sender: 'Compare Craze',
        subject: 'Welcome to Compare Craze!',
        body: 'Welcome to Compare Craze, your ultimate destination for comparing gadgets and finding the best deals. Happy comparing!',
        date: '2024-03-30T12:00:00Z',
        read: true,
    }
  ];

    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/login");
      } 
    },[]);
  return (
    <>
        <Navbar />
         <div className="container mx-auto px-4 py-8 mb-8">
            <h1 className="text-3xl font-semibold mb-8">Inbox</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {messages.map((message) => (
                <div
                    key={message.id}
                    className={`border-b border-gray-200 ${message.read ? 'bg-gray-100' : 'bg-white'}`}
                >
                    <div className="p-4">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                            {message.sender.slice(0, 1)}
                        </div>
                        <div>
                            <div className="text-lg font-semibold">{message.sender}</div>
                            <div className="text-gray-500 text-sm">{message.date}</div>
                        </div>
                        </div>
                        <div className="text-gray-500 text-sm">{message.subject}</div>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-700">{message.body}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        <Footer/>

    </>
  )
}

export default Inbox
