import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero mt-5">
        {/* Your hero image */}
        <img src="path/to/hero-image.jpg" alt="Blowdry Hero" className="img-fluid" />
        {/* Hero body copy */}
        <div className="hero-text">
          <h1>Welcome to Bl-oo Bar Appointment Scheduler!</h1>

          <h2>Your Go-To Destination for Fabulous Blowouts</h2>

          <h3>Effortless Booking for Glamorous Styles</h3>

          <p>At Bl-oo, we specialize in creating stunning and lasting blowouts that leave you feeling confident and beautiful. Our dedicated team is ready to pamper you with the perfect style for any occasion.</p>
          
          <h3>Why Choose Bl-oo</h3>

          <ul>
            <li>Expert Stylists: Our skilled stylists are passionate about delivering exceptional blowouts tailored to your unique style.</li>
            <li>Convenient Scheduling: Book your blowout effortlessly with our user-friendly appointment scheduler.</li>
            <li>Customizable Styles: From sleek and straight to bouncy curls, choose the style that suits your mood and enhances your natural beauty.</li>
          </ul>

          <h3>Book Your Blowout Today!</h3>

          <p>Ready to experience the ultimate blowout? Use our easy-to-navigate appointment scheduler to reserve your spot. Whether it's a special event or a self-care day, we're here to make you look and feel fabulous.</p>
        </div>
      </div>

      {/* Service List */}
      <div className="service-list mt-5">
        <h2>Available Services</h2>
        <ul>
          <li><img src="path/to/wash_and_style_image.jpg" alt="Wash and Style" className="img-fluid" /></li>
          <li><img src="path/to/updo_image.jpg" alt="Updo" className="img-fluid" /></li>
          <li><img src="path/to/braiding_image.jpg" alt="Braiding" className="img-fluid" /></li>
          <li><img src="path/to/curling_image.jpg" alt="Curling" className="img-fluid" /></li>
          <li><img src="path/to/straightening_image.jpg" alt="Straightening" className="img-fluid" /></li>
          <li><img src="path/to/deep_conditioning_image.jpg" alt="Deep Conditioning" className="img-fluid" /></li>
          <li><img src="path/to/scalp_treatment_image.jpg" alt="Scalp Treatment" className="img-fluid" /></li>
          <li><img src="path/to/hair_cut_image.jpg" alt="Hair Cut" className=" img-fluid" /></li>
          <li><img src="path/to/hair_coloring_image.jpg" alt="Hair Coloring" className="img-fluid"  /></li>
          <li><img src="path/to/extensions_image.jpg" alt="Extensions" className="img-fluid" /></li>
          <li><img src="path/to/makeup_application_image.jpg" alt="Makeup Application" className="img-fluid" /></li>

        </ul>
      </div>

      {/* Call-to-Action Cards */}
      <div className="cta-cards mt-5">
        <div className="card">
          <h3>Add Appointment</h3>
          <p>Schedule your next blowdry appointment with us.</p>
          <Link to="/add-appointment" className="btn btn-primary">Schedule Now</Link>
        </div>

        {/* Check Schedule Card */}
        <div className="card">
          <h3>Check Availability</h3>
          <p>View and manage all upcoming appointments.</p>
          <Link to="/availability" className="btn btn-primary">Check Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
