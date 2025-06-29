import React, { useState } from 'react';
import { Heart, Activity, Shield, Stethoscope, Clock, Users, CheckCircle } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: number;
  originalPrice: number;
  duration: string;
  tests: string[];
  preparation: string[];
  description: string;
  popular: boolean;
  features: string[];
}

interface ServicesProps {
  onBookingClick: (packageId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookingClick }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages: Package[] = [
    {
      id: 'full-body',
      name: 'Full Body Checkup',
      icon: <Activity className="w-8 h-8" />,
      price: 2999,
      originalPrice: 4999,
      duration: '3-4 hours',
      popular: true,
      description: 'Comprehensive health assessment covering all major organs and systems',
      tests: [
        'Complete Blood Count (CBC)',
        'Lipid Profile',
        'Liver Function Test',
        'Kidney Function Test',
        'Thyroid Profile',
        'Diabetes Panel',
        'ECG',
        'Chest X-Ray',
        'Ultrasound Abdomen',
        'Urine Analysis'
      ],
      preparation: [
        '12 hours fasting required',
        'Avoid alcohol 24 hours before',
        'Wear comfortable clothing',
        'Bring previous reports if any'
      ],
      features: [
        'Same day reports',
        'Free consultation',
        'Home sample collection',
        'Digital reports'
      ]
    },
    {
      id: 'heart-health',
      name: 'Heart Health Package',
      icon: <Heart className="w-8 h-8" />,
      price: 1999,
      originalPrice: 2999,
      duration: '2-3 hours',
      popular: false,
      description: 'Specialized cardiac assessment to evaluate heart health and detect early signs',
      tests: [
        'ECG (Electrocardiogram)',
        '2D Echo Cardiography',
        'Stress Test (TMT)',
        'Lipid Profile',
        'CRP (C-Reactive Protein)',
        'Homocysteine',
        'Chest X-Ray',
        'Blood Pressure Monitoring'
      ],
      preparation: [
        '4 hours fasting required',
        'Wear comfortable shoes',
        'Avoid caffeine before test',
        'Bring cardiac medications list'
      ],
      features: [
        'Cardiologist consultation',
        'Exercise stress test',
        'Risk assessment report',
        'Lifestyle recommendations'
      ]
    },
    {
      id: 'diabetes-panel',
      name: 'Diabetes Panel',
      icon: <Shield className="w-8 h-8" />,
      price: 899,
      originalPrice: 1299,
      duration: '1-2 hours',
      popular: false,
      description: 'Complete diabetes screening and management assessment',
      tests: [
        'Fasting Blood Glucose',
        'Post Meal Glucose',
        'HbA1c (Glycated Hemoglobin)',
        'Insulin Levels',
        'C-Peptide',
        'Microalbumin',
        'Kidney Function Test',
        'Lipid Profile'
      ],
      preparation: [
        '8-12 hours fasting required',
        'Take prescribed medications',
        'Avoid exercise before test',
        'Bring glucose meter if available'
      ],
      features: [
        'Diabetes risk assessment',
        'Nutritionist consultation',
        'Medication review',
        'Lifestyle guidance'
      ]
    },
    {
      id: 'senior-citizen',
      name: 'Senior Citizen Care',
      icon: <Stethoscope className="w-8 h-8" />,
      price: 3999,
      originalPrice: 5999,
      duration: '4-5 hours',
      popular: true,
      description: 'Comprehensive health package designed specifically for seniors (60+ years)',
      tests: [
        'Complete Blood Count',
        'Comprehensive Metabolic Panel',
        'Bone Density Scan',
        'Vision & Hearing Test',
        'Memory Assessment',
        'Prostate/Gynec Screening',
        'Vitamin B12 & D3',
        'Thyroid Function',
        'Cardiac Evaluation',
        'Cancer Markers'
      ],
      preparation: [
        '12 hours fasting required',
        'Bring all current medications',
        'Comfortable clothing required',
        'Family member accompaniment advised'
      ],
      features: [
        'Geriatrician consultation',
        'Priority scheduling',
        'Home visit option',
        'Family counseling session'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Health Checkup Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of health checkup packages, 
            designed by medical experts to give you complete peace of mind about your health.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                {/* Package Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Package Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => onBookingClick(pkg.id)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    {selectedPackage === pkg.id ? 'Hide' : 'Details'}
                  </button>
                </div>

                {/* Expandable Details */}
                {selectedPackage === pkg.id && (
                  <div className="mt-6 pt-6 border-t space-y-6">
                    {/* Tests Included */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Tests Included ({pkg.tests.length}):</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.tests.map((test, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{test}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preparation Instructions */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Preparation Instructions:</h4>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        {pkg.preparation.map((instruction, index) => (
                          <div key={index} className="flex items-start space-x-2 mb-2 last:mb-0">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{instruction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Not sure which package is right for you? Our health experts are here to help!
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;