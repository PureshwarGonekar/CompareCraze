import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CarouselWithContent } from "../components/HomeCarousel";
import ImageSlidShow from "../components/ImageSlidShow";

const Home = () => {
  const mobileImages = [
      'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/k/h/-original-imagzm8qmr7qxfhq.jpeg?q=70&crop=false',
      'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/t/d/v30-pro-5g-v2319-vivo-original-imagyzhhdeezbbfb.jpeg?q=70&crop=false'
  ];
  const laptopImages = [
      'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/i/w/xps-13-thin-and-light-laptop-dell-original-imagpm3cqsu7k7ca.jpeg?q=70&crop=false',
      'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/3/6/j/-original-imagpxgqfz7djerv.jpeg?q=70&crop=false'
  ];
  const tvImages = [
      'https://rukminim2.flixcart.com/image/416/416/kawtvgw0/television/a/u/h/sony-kdl-43w6600-original-imafsd85zfnvke6t.jpeg?q=70&crop=false',
      'https://rukminim2.flixcart.com/image/416/416/xif0q/television/m/a/v/-original-imagu7f3rwa8zsdv.jpeg?q=70&crop=false'
  ];
  const smartWatchImages = [
      'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/z/s/h/49-android-ios-24s8-gentlemob-yes-original-imagv7rhskehdeze.jpeg?q=70&crop=false',
      'https://rukminim2.flixcart.com/image/416/416/kgl5ua80/smartwatch/t/j/q/010-02174-09-android-ios-garmin-original-imafws5nnp3czpzg.jpeg?q=70&crop=false'
  ];
  const gamingConsoleImages = [
      'https://rukminim2.flixcart.com/image/416/416/xif0q/gamingconsole/z/b/w/-original-imagtk7vfbzqbjg6.jpeg?q=70&crop=false',
      'https://rukminim2.flixcart.com/image/416/416/gamepad/s/7/z/enter-vibration-gamepad-e-gpv10-original-imadgxg7xuwpw8hz.jpeg?q=70&crop=false'
  ];
  return (
    <>
      <Navbar />

      <section id="hero-banner" className="text-white ">
        <div className="banner-inner">
          <CarouselWithContent />
        </div>
      </section>

      {/* Mobiles Section */}
      <section id="mobiles" className="py-16 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-2xl font-semibold mb-4">Compare Mobile Phones</h2>
              <p>Compare the latest smartphones from top brands like Apple, Samsung, Google, and more. Find the best features, specifications, and prices.</p>
              <Link to="/mainpage" className="btn btn-primary mt-4">View Mobiles</Link>
            </div>
            <div className="col-md-6 flex justify-end items-end">
              {/* Insert image carousel or grid of mobile phones */}
              <ImageSlidShow dataSource={mobileImages}/>
            </div>
          </div>
        </div>
      </section>

      {/* Laptops Section */}
      <section id="laptops" className="py-16 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Insert image carousel or grid of laptops */}
              <ImageSlidShow dataSource={laptopImages}/>
            </div>
            <div className="col-md-6">
              <h2 className="text-2xl font-semibold mb-4">Compare Laptops</h2>
              <p>Find the perfect laptop for your needs, whether it's for work, gaming, or entertainment. Compare specifications, performance, and prices.</p>
              <Link to="/mainpage" className="btn btn-primary mt-4">View Laptops</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TVs Section */}
      <section id="tvs" className="py-16 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-2xl font-semibold mb-4">Compare TVs</h2>
              <p>Discover the best televisions for your home entertainment setup. Compare screen sizes, resolutions, smart features, and more.</p>
              <Link to="/mainpage" className="btn btn-primary mt-4">View TVs</Link>
            </div>
            <div className="col-md-6  flex justify-end items-end">
              {/* Insert image carousel or grid of TVs */}
              <ImageSlidShow dataSource={tvImages}/>
            </div>
          </div>
        </div>
      </section>

      {/* Smartwatches Section */}
      <section id="smartwatches" className="py-16 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Insert image carousel or grid of smartwatches */}
              <ImageSlidShow dataSource={smartWatchImages}/>
            </div>
            <div className="col-md-6">
              <h2 className="text-2xl font-semibold mb-4">Compare Smartwatches</h2>
              <p>Stay connected and track your fitness with the latest smartwatches. Compare features such as heart rate monitoring, battery life, and compatibility.</p>
              <Link to="/mainpage" className="btn btn-primary mt-4">View Smartwatches</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Consoles Section */}
      <section id="gaming-consoles" className="py-16 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-2xl font-semibold mb-4">Compare Gaming Consoles</h2>
              <p>Explore the latest gaming consoles from Sony, Microsoft, and Nintendo. Compare performance, exclusive games, and online features.</p>
              <Link to="/mainpage" className="btn btn-primary mt-4">View Gaming Consoles</Link>
            </div>
            <div className="col-md-6 flex justify-end items-end">
              {/* Insert image carousel or grid of gaming consoles */}
              <ImageSlidShow dataSource={gamingConsoleImages}/>
            </div>
          </div>
        </div>
      </section>

      {/* Create section for Who we are */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold">Who We Are</h1>
            <p className="mt-4">
              At CompareCraze, we're a passionate team dedicated to helping you make informed decisions when it comes to choosing the latest electronic gadgets. With our expertise and commitment to excellence, we strive to provide you with comprehensive comparisons and detailed insights into the world of mobile phones, laptops, TVs, smartwatches, gaming consoles, and smart bands.
            </p>
          </div>

          {/* Team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
            {/* Individual team member */}
            <div className="info">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Kristin Doe" className="rounded-full w-32 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold">Adarsh Gupta</h4>
                <h5 className="text-gray-600">0201CS201005</h5>
                {/* Social media links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="info">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Kristin Doe" className="rounded-full w-32 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold">Gaurav Kumar</h4>
                <h5 className="text-gray-600">0201CS201026</h5>
                {/* Social media links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="info">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Kristin Doe" className="rounded-full w-32 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold">Naman Nema</h4>
                <h5 className="text-gray-600">0201CS201043</h5>
                {/* Social media links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google-plus"></i></a>
                </div>
              </div>
            </div>
            
            <div className="info">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Kristin Doe" className="rounded-full w-32 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold">Nikhil Bharti</h4>
                <h5 className="text-gray-600">0201CS201045</h5>
                {/* Social media links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google-plus"></i></a>
                </div>
              </div>
            </div>
            
            <div className="info">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Kristin Doe" className="rounded-full w-32 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="text-xl font-semibold">Saurabh Kumar</h4>
                <h5 className="text-gray-600">0201CS201082</h5>
                {/* Social media links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google-plus"></i></a>
                </div>
              </div>
            </div>
            {/* Repeat this div structure for each team member */}
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <section id="testimonial" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold">Testimonials</h1>
            <p className="mt-4">
              Here's what our customers have to say about their experience with CompareCraze:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards */}
            <div className="max-w-md border border-gray-200 rounded-lg p-6 testimonial-card">
              <div className="text-lg mb-4">
                "CompareCraze helped me find the perfect laptop for my gaming needs. The detailed comparisons and reviews were incredibly helpful in making my decision. Highly recommended!"
              </div>
              <div className="text-gray-600 font-semibold mb-1">Techno Gamerz Ujjwal.</div>
              <div className="text-gray-500">Gaming Enthusiast</div>
            </div>
            {/* Repeat this div structure for each testimonial */}
            
            <div className="max-w-md border border-gray-200 rounded-lg p-6 testimonial-card">
              <div className="text-lg mb-4">
                "I was struggling to choose between different smartwatches, but CompareCraze made it easy. The side-by-side comparisons made it clear which features were most important to me. Thanks for the help!"
              </div>
              <div className="text-gray-600 font-semibold mb-1">Virat Kohli</div>
              <div className="text-gray-500">Fitness Enthusiast</div>
            </div>
            
            <div className="max-w-md border border-gray-200 rounded-lg p-6 testimonial-card">
              <div className="text-lg mb-4">
                "I've been a loyal customer of CompareCraze for years. Whether it's a new smartphone or a gaming console, I always trust their recommendations. Keep up the great work!"
              </div>
              <div className="text-gray-600 font-semibold mb-1">Technical GuruJi.</div>
              <div className="text-gray-500">Tech Enthusiast</div>
            </div>
            
            <div className="max-w-md border border-gray-200 rounded-lg p-6 testimonial-card">
              <div className="text-lg mb-4">
                "As a busy professional, I don't have time to research every electronic gadget on the market. That's why I rely on CompareCraze. They make it easy to find the best products without all the hassle."
              </div>
              <div className="text-gray-600 font-semibold mb-1">Ratan Tata.</div>
              <div className="text-gray-500">Business Executive</div>
            </div>
            
            <div className="max-w-md border border-gray-200 rounded-lg p-6 testimonial-card">
              <div className="text-lg mb-4">
                "Thanks to CompareCraze, I was able to find a TV that perfectly fits my home entertainment setup. The comparison tools helped me narrow down my options and make an informed decision."
              </div>
              <div className="text-gray-600 font-semibold mb-1">Sundar Pichai.</div>
              <div className="text-gray-500">CEO, Google</div>
            </div>

            <style>
              {`
                .testimonial-card {
                  background: linear-gradient(45deg, rgba(242,241,255,1) 7%, rgba(255,234,250,1) 38%, rgba(182,243,255,0.9781162464985994) 100%);
                }
              `}
            </style>
          </div>
        </div>
      </section>


      <section id="best-for-you" className="py-16 ">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold">What's Best For You</h1>
            <p className="mt-4">
              Unsure which gadget suits you best? Let us help you find the perfect match based on your needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature card for Mobile Phones */}
            <div className="max-w-md rounded-lg p-6 feature-card">
              <h2 className="text-2xl font-semibold mb-4">Mobile Phones</h2>
              <p className="mb-4">Discover the latest smartphones tailored to your lifestyle, whether you're a photography enthusiast, a power user, or a budget-conscious shopper.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Explore</button>
            </div>

            {/* Feature card for Laptops */}
            <div className="max-w-md rounded-lg p-6 feature-card">
              <h2 className="text-2xl font-semibold mb-4">Laptops</h2>
              <p className="mb-4">Find the perfect laptop for your work, gaming, or creative endeavors. Compare specifications, performance, and design to make the right choice.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Explore</button>
            </div>

            {/* Feature card for Smartwatches */}
            <div className="max-w-md rounded-lg p-6 feature-card">
              <h2 className="text-2xl font-semibold mb-4">Smartwatches</h2>
              <p className="mb-4">Stay connected and track your fitness goals with the latest smartwatches. Find the perfect blend of style, features, and functionality.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Explore</button>
            </div>
          </div>
        </div>
      </section>


      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold">Newsletter</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg">SUBMIT</button>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 ">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input type="text" placeholder="Name" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 block w-full focus:outline-none" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 block w-full focus:outline-none" />
              <input type="text" placeholder="Subject" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 block w-full focus:outline-none" />
            </div>
            <div>
              <textarea placeholder="Message" rows="6" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 block w-full focus:outline-none"></textarea>
            </div>
            <div className=" col-span-2 flex justify-center">
              <button className=" bg-blue-500 text-white px-8 py-2 rounded-lg w-fit ">SUBMIT</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
