import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const base = process.env.REACT_APP_BASE + '/profilePic/';

const reviewsData = [
  // Mobile Phones
  {
    category: "Mobile Phones",
    reviews: [
      {
        image: "mobile1.jpg",
        title: "Exceptional Performance and Camera Quality",
        pros: ["Powerful processor", "Stunning camera setup"],
        cons: ["Average battery life", "Slightly heavy"],
        criticRating: 4.5,
        description: "The latest mobile phone from XYZ brand offers exceptional performance and a stunning camera setup. With its sleek design and vibrant display, it's a pleasure to use for both work and entertainment. Its long-lasting battery ensures you stay connected throughout the day, while the advanced features cater to all your communication and multimedia needs.",
      },
      {
        image: "phone2.jpeg",
        title: "Sleek Design and Advanced Features",
        pros: ["Sleek and modern design", "Advanced features"],
        cons: ["Expensive price tag", "Limited color options"],
        criticRating: 4.2,
        description: "Experience the future of mobile technology with our latest smartphone model. Featuring a sleek and modern design, it's sure to turn heads wherever you go. With its advanced features and intuitive interface, it offers unparalleled convenience and functionality. Whether you're a professional on the go or a tech enthusiast, this smartphone is a must-have addition to your gadget collection.",
      },
      {
        image: "mobile2.jpg",
        title: "Long Battery Life and Fast Charging",
        pros: ["Long battery life", "Fast charging support"],
        cons: ["No headphone jack", "Slippery design"],
        criticRating: 4.4,
        description: "Stay connected and productive all day long with our latest mobile phone model. Its long-lasting battery ensures you never run out of power when you need it most, while fast charging support lets you quickly recharge your device on the go. With its sleek design and advanced features, it's the perfect companion for both work and play.",
      },
      {
        image: "mobile3.jpg",
        title: "Immersive Display and 5G Connectivity",
        pros: ["Immersive display", "High-speed 5G connectivity"],
        cons: ["Average camera performance", "No expandable storage"],
        criticRating: 4.3,
        description: "Experience the future of mobile technology with our latest smartphone model. Featuring an immersive display and high-speed 5G connectivity, it offers lightning-fast performance and seamless multimedia streaming. With its sleek design and advanced camera features, it's the perfect device for capturing and sharing your life's moments.",
      },
    ],
  },
  // Laptops
  {
    category: "Laptops",
    reviews: [
      {
        image: "laptop1.jpg",
        title: "Powerful Performance and Sleek Design",
        pros: ["Powerful processor", "Sleek and modern design"],
        cons: ["Limited storage options", "Average battery life"],
        criticRating: 4.6,
        description: "Experience the ultimate in productivity and style with our latest laptop model. Featuring a powerful processor and sleek design, it's the perfect companion for professionals on the go. With its high-resolution display and immersive sound, it's ideal for multimedia consumption and productivity tasks alike.",
      },
      {
        image: "laptop2.jpg",
        title: "Portable and Lightweight",
        pros: ["Portable and lightweight", "Long battery life"],
        cons: ["Limited connectivity options", "No dedicated graphics card"],
        criticRating: 4.4,
        description: "Take your work and entertainment anywhere with our lightweight laptop. With its long battery life and portable design, it's perfect for professionals who are always on the move. Whether you're working from home or on the road, this laptop delivers reliable performance and exceptional efficiency.",
      },
      {
        image: "laptop3.jpg",
        title: "Exceptional Graphics and Gaming Performance",
        pros: ["Dedicated graphics card", "High-resolution display"],
        cons: ["Heavy and bulky design", "Limited upgrade options"],
        criticRating: 4.8,
        description: "Immerse yourself in your favorite games and multimedia content with our high-performance gaming laptop. Featuring a dedicated graphics card and high-resolution display, it delivers stunning visuals and smooth gameplay. With its powerful processor and ample storage, it's the ultimate gaming machine for enthusiasts and professionals alike.",
      },
      {
        image: "laptop4.jpg",
        title: "Versatile and Reliable",
        pros: ["Versatile performance", "Reliable build quality"],
        cons: ["Average keyboard and trackpad", "Limited port selection"],
        criticRating: 4.5,
        description: "Get more done with our versatile laptop model. Whether you're working, studying, or streaming your favorite content, it delivers reliable performance and exceptional efficiency. With its durable build quality and long-lasting battery life, it's the perfect device for all your computing needs.",
      },
    ],
  },
  {
    category: "Mobile Phones",
    reviews: [
      {
        image: "mobile4.jpg",
        title: "Exceptional Performance and Camera Quality",
        pros: ["Powerful processor", "Stunning camera setup"],
        cons: ["Average battery life", "Slightly heavy"],
        criticRating: 4.5,
        description: "The latest mobile phone from XYZ brand offers exceptional performance and a stunning camera setup. With its sleek design and vibrant display, it's a pleasure to use for both work and entertainment. Its long-lasting battery ensures you stay connected throughout the day, while the advanced features cater to all your communication and multimedia needs.",
      },
      // Add more reviews for mobile phones here...
    ],
  },
  // Laptops
  {
    category: "Laptops",
    reviews: [
      {
        image: "laptop5.jpg",
        title: "Powerful Performance and Sleek Design",
        pros: ["Powerful processor", "Sleek and modern design"],
        cons: ["Limited storage options", "Average battery life"],
        criticRating: 4.6,
        description: "Experience the ultimate in productivity and style with our latest laptop model. Featuring a powerful processor and sleek design, it's the perfect companion for professionals on the go. With its high-resolution display and immersive sound, it's ideal for multimedia consumption and productivity tasks alike.",
      },
      // Add more reviews for laptops here...
    ],
  },
  // Tablets
  {
    category: "Tablets",
    reviews: [
      {
        image: "tablet.jpg",
        title: "Versatile and Portable",
        pros: ["Lightweight and portable", "Long battery life"],
        cons: ["Limited storage capacity", "No cellular connectivity"],
        criticRating: 4.3,
        description: "Our latest tablet model offers versatility and portability in a sleek package. With its lightweight design and long battery life, it's perfect for users on the go. Whether you're browsing the web, streaming movies, or reading e-books, this tablet delivers a seamless and immersive experience.",
      },
      // Add more reviews for tablets here...
    ],
  },
  // TVs
  {
    category: "TVs",
    reviews: [
      {
        image: "tv1",
        title: "Immersive Viewing Experience",
        pros: ["High-resolution display", "Immersive sound quality"],
        cons: ["Limited app support", "No voice control feature"],
        criticRating: 4.4,
        description: "Transform your living room into a home theater with our latest TV model. Featuring a high-resolution display and immersive sound quality, it delivers an unparalleled viewing experience. With its sleek design and advanced features, it's the perfect centerpiece for your entertainment setup.",
      },
      // Add more reviews for TVs here...
    ],
  },
  // Smartwatches
  {
    category: "Smartwatches",
    reviews: [
      {
        image: "smartwatch1.jpg",
        title: "Stay Connected on the Go",
        pros: ["Built-in GPS", "Heart rate monitoring"],
        cons: ["Limited app ecosystem", "Short battery life"],
        criticRating: 4.2,
        description: "Our latest smartwatch keeps you connected and informed wherever you go. With its built-in GPS and heart rate monitoring, it's the perfect fitness companion. Stay on top of your health and fitness goals while receiving notifications and updates right on your wrist.",
      },
      // Add more reviews for smartwatches here...
    ],
  },
  // Headphones
  {
    category: "Headphones",
    reviews: [
      {
        image: "headphone1.jpg",
        title: "Immersive Audio Experience",
        pros: ["Noise-canceling technology", "Comfortable fit"],
        cons: ["Limited battery life", "No wireless charging support"],
        criticRating: 4.5,
        description: "Experience music like never before with our latest headphones. Featuring noise-canceling technology and a comfortable fit, they provide an immersive audio experience wherever you go. Whether you're commuting, working out, or relaxing at home, these headphones deliver crystal-clear sound quality and deep bass.",
      },
      // Add more reviews for headphones here...
    ],
  },
  // Cameras
  {
    category: "Cameras",
    reviews: [
      {
        image: "camera1.jpg",
        title: "Capture Life's Moments in Stunning Detail",
        pros: ["High-resolution sensor", "Versatile lens options"],
        cons: ["Limited low-light performance", "Bulky design"],
        criticRating: 4.4,
        description: "Our latest camera model is designed to capture life's moments in stunning detail. With its high-resolution sensor and versatile lens options, it offers professional-level photography capabilities in a compact package. Whether you're shooting landscapes, portraits, or action shots, this camera delivers exceptional image quality and clarity.",
      },
      // Add more reviews for cameras here...
    ],
  },
  // Smart Bands
  {
    category: "Smart Bands",
    reviews: [
      {
        image: "smartwand1.jpg",
        title: "Track Your Fitness Goals with Ease",
        pros: ["Activity tracking", "Sleep monitoring"],
        cons: ["Limited display options", "No built-in GPS"],
        criticRating: 4.3,
        description: "Our latest smart band helps you stay on top of your fitness goals with ease. With its activity tracking and sleep monitoring features, it provides valuable insights into your health and wellness. Stay motivated and informed as you track your progress and achieve new milestones.",
      },
      // Add more reviews for smart bands here...
    ],
  },
  // Gaming Consoles
  {
    category: "Gaming Consoles",
    reviews: [
      {
        image: "gammingConsole.jpg",
        title: "Immersive Gaming Experience",
        pros: ["High-performance graphics", "Extensive game library"],
        cons: ["Limited backward compatibility", "No VR support"],
        criticRating: 4.6,
        description: "Experience the thrill of gaming like never before with our latest gaming console. Featuring high-performance graphics and an extensive game library, it offers endless entertainment for gamers of all ages. Whether you're into action, adventure, or sports games, this console delivers an immersive gaming experience that's second to none.",
      },
      {
        image: "gammingConsole2.jpg",
        title: "Immersive Gaming Experience",
        pros: ["High-performance graphics", "Extensive game library"],
        cons: ["Limited backward compatibility", "No VR support"],
        criticRating: 4.6,
        description: "Experience the thrill of gaming like never before with our latest gaming console. Featuring high-performance graphics and an extensive game library, it offers endless entertainment for gamers of all ages. Whether you're into action, adventure, or sports games, this console delivers an immersive gaming experience that's second to none.",
      },
      {
        image: "gammingConsole3.jpg",
        title: "Immersive Gaming Experience",
        pros: ["High-performance graphics", "Extensive game library"],
        cons: ["Limited backward compatibility", "No VR support"],
        criticRating: 4.6,
        description: "Experience the thrill of gaming like never before with our latest gaming console. Featuring high-performance graphics and an extensive game library, it offers endless entertainment for gamers of all ages. Whether you're into action, adventure, or sports games, this console delivers an immersive gaming experience that's second to none.",
      },
      // Add more reviews for gaming consoles here...
    ],
  },
];


const Review = () => {
    const navigate = useNavigate();

    const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);

    // Function to toggle expanded view of a review
    const toggleExpandedView = (index) => {
        setExpandedReviewIndex(index === expandedReviewIndex ? null : index);
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
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Reviews</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                    {reviewsData.map((category, catIndex) => (
                        category.reviews.map((review, index) => (
                            <div key={`${catIndex}-${index}`} className="border border-gray-200 rounded-md p-4 shadow-md">
                                <img src={base + review.image} alt={review.title} className="w-full mb-4" />
                                <h2 className="text-xl font-bold mb-2">{review.title}</h2>
                                <div className="flex mb-2">
                                    <span className="mr-2 font-bold">Pros:</span>
                                    <span>{review.pros.join(", ")}</span>
                                </div>
                                <div className="flex mb-2">
                                    <span className="mr-2 font-bold">Cons:</span>
                                    <span>{review.cons.join(", ")}</span>
                                </div>
                                <div className="flex mb-2">
                                    <span className="mr-2 font-bold">CRITIC RATING:</span>
                                    <span>{review.criticRating}</span>
                                </div>
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => toggleExpandedView(`${catIndex}-${index}`)}
                                >
                                    {expandedReviewIndex === `${catIndex}-${index}` ? "Hide Details" : "Show Details"}
                                </button>
                                {expandedReviewIndex === `${catIndex}-${index}` && (
                                    <div className="mt-4">
                                        <p>{review.description}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <Footer />

    </>
  )
}

export default Review