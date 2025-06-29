import React from 'react';
import { Shield, Users, Award, Clock, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '50,000+', label: 'Happy Patients' },
    { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Years Experience' },
    { icon: <Shield className="w-8 h-8" />, value: '99.8%', label: 'Accuracy Rate' },
    { icon: <Clock className="w-8 h-8" />, value: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'NABL Certified Lab',
      description: 'Our laboratory is NABL certified ensuring highest quality standards and accurate results.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Expert Medical Team',
      description: 'Experienced doctors and technicians with specialized training in diagnostic procedures.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Turnaround',
      description: 'Get your reports within 24 hours with our advanced testing equipment and streamlined processes.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Patient-Centric Care',
      description: 'We prioritize patient comfort and convenience with personalized care and flexible scheduling.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      content: 'Excellent service and very professional staff. The comprehensive health checkup helped detect an issue early. Highly recommended!',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      content: 'I regularly refer my patients here. Their cardiac health packages are thorough and the reports are detailed and accurate.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      content: 'Convenient online booking and home sample collection made the entire process hassle-free. Great experience overall.',
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            About HealthCheck Pro
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 15 years of excellence in healthcare diagnostics, we are committed to 
            providing accurate, reliable, and convenient health checkup services to help you 
            maintain optimal health.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern medical laboratory" 
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">Live Status</span>
              </div>
              <p className="text-sm text-gray-600">Processing 247 tests today</p>
              <p className="text-xs text-gray-500 mt-1">Average completion: 23 hours</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Leading Healthcare Diagnostics Since 2008
            </h3>
            <p className="text-gray-600 leading-relaxed">
              HealthCheck Pro has been at the forefront of preventive healthcare, offering 
              comprehensive diagnostic services that help individuals take charge of their health. 
              Our state-of-the-art facility combines cutting-edge technology with compassionate care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in making healthcare accessible and convenient. From our advanced 
              laboratory equipment to our skilled medical professionals, every aspect of our 
              service is designed to provide you with accurate results and peace of mind.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-800 font-semibold text-sm">NABL Certified</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold text-sm">ISO 9001:2015</span>
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-full">
                <span className="text-purple-800 font-semibold text-sm">CAP Accredited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            What Our Patients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;