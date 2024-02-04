import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceList from '../../components/ServiceList/ServiceList'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Bl-oo Bar Appointment Scheduler!</h1>
      {/* Hero Section */}
      <Carousel className="hero mt-5">
        {/* First Carousel Item */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/1header.png" 
            alt="First slide"
          />
          <Carousel.Caption>
            
            <p>
              Silk Presses, Relaxers, Weaves and Wash & Go 
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Carousel Item */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/2header.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            
            <p>
              Natural Hair Products and Tools for 4a, 4b and 4c Hair 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            <p>
              At Bl-oo, we specialize in creating stunning and lasting blowouts that leave you feeling confident and beautiful. Our dedicated team is ready to pamper you with the perfect style for any occasion.
            </p>
      {/* Service List */}
      <div className="service-list mt-5">
        <h2>Available Services</h2>
        <ServiceList />
      </div>
      <h3>Book Your Blowout Today!</h3>

        <p>Ready to experience the ultimate blowout? Use our easy-to-navigate appointment scheduler to reserve your spot. Whether it's a special event or a self-care day, we're here to make you look and feel fabulous.</p>

      {/* Call-to-Action Cards */}
      <div className="cta-cards mt-5">
        <div className="card">
          <h3>Add Appointment</h3>
          <p>Schedule your next blowdry appointment with us.</p>
          <Link to="/appointment/new" className="btn btn-primary">Schedule Now</Link>
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
