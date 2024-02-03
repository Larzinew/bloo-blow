import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceList = () => {
  const services = [
    { imageSrc: './images/washcurl.png', altText: 'Wash and Style', title: 'Wash and Style', description: 'Description for Wash and Style.' },
    { imageSrc: './images/updo.png', altText: 'Updo', title: 'Updo', description: 'Description for Updo.' },
    { imageSrc: './images/braiding.png', altText: 'Braiding', title: 'Braiding', description: 'Description for Braiding.' },
    { imageSrc: './images/curling.png', altText: 'Curling', title: 'Curling', description: 'Description for Curling.' },
    { imageSrc: './images/straightening.png', altText: 'Straightening', title: 'Straightening', description: 'Description for Straightening.' },
    { imageSrc: './images/deepc.png', altText: 'Deep Conditioning', title: 'Deep Conditioning', description: 'Description for Deep Conditioning.' },
    { imageSrc: './images/scalp.png', altText: 'Scalp Treatment', title: 'Scalp Treatment', description: 'Description for Scalp Treatment.' },
    { imageSrc: './images/haircut.png', altText: 'Hair Cut', title: 'Hair Cut', description: 'Description for Hair Cut.' },
    { imageSrc: './images/coloring.png', altText: 'Hair Coloring', title: 'Hair Coloring', description: 'Description for Hair Coloring.' },
    { imageSrc: './images/weave.png', altText: 'Extensions', title: 'Extensions', description: 'Description for Extensions.' },
    { imageSrc: './images/makeup.png', altText: 'Makeup Application', title: 'Makeup Application', description: 'Description for Makeup Application.' }
  ];

  return (
    <div className="card-list">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}

export default ServiceList;
