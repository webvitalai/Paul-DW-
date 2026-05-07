import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

const allServices = [
  {
    title: "Driveway Cleaning",
    description: "Deep restoration for block paving, concrete, and tarmac surfaces. We remove all moss, weeds, and grime.",
    image: "/services/drivewaycleaning2.png",
    dirtyImage: "/services/drivewaycleaning1.png"
  },
  {
    title: "Patio & Path Cleaning",
    description: "Restore the natural beauty of your Indian sandstone, limestone, or porcelain patio tiles.",
    image: "/services/patiopathcleaning2.png",
    dirtyImage: "/services/patiopathcleaning1.png"
  },
  {
    title: "Oil & Stain Removal",
    description: "Specialist chemical treatments to lift stubborn oil, rust, and tyre marks from your driveway.",
    image: "/services/oilstainremoval2.png",
    dirtyImage: "/services/oilstainremoval1.png"
  },
  {
    title: "Sealing & Protection",
    description: "Premium protective coatings that prevent weed growth, repel stains, and enhance surface color.",
    image: "/services/sealingprotection2.png",
    dirtyImage: "/services/sealingprotection1.png"
  },
  {
    title: "Commercial Cleaning",
    description: "Large scale pressure washing for car parks, retail parks, and industrial units.",
    image: "/services/commercialcleaning2.png",
    dirtyImage: "/services/commercialcleaning1.png"
  },
  {
    title: "Roof Cleaning",
    description: "Safe moss removal and soft washing to protect your roof tiles and improve curb appeal.",
    image: "/services/rooftop2.png",
    dirtyImage: "/services/rooftop1.png"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Specialist Services</h1>
          <p className="text-xl text-slate-500">
            From residential driveways to large commercial spaces, we have the expertise and equipment to handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-primary">
            Request a Quote for Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
