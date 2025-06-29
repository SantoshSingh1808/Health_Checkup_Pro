import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'How do I book an appointment for a health checkup?',
      answer: 'You can book an appointment online through our website by selecting your preferred package, choosing a date and time, and completing the booking form. You can also call us at +1 (555) 123-4567 or visit our center directly.'
    },
    {
      question: 'Do I need to fast before my health checkup?',
      answer: 'Fasting requirements depend on the specific tests included in your package. Most comprehensive packages require 10-12 hours of fasting for accurate blood glucose and lipid profile results. We will provide detailed preparation instructions when you book your appointment.'
    },
    {
      question: 'How long does a complete health checkup take?',
      answer: 'The duration varies by package: Diabetes Panel (1-2 hours), Heart Health Package (2-3 hours), Full Body Checkup (3-4 hours), and Senior Citizen Care (4-5 hours). This includes registration, sample collection, tests, and consultation.'
    },
    {
      question: 'When will I receive my test reports?',
      answer: 'Most reports are available within 24-48 hours. Routine blood tests are typically ready within 24 hours, while specialized tests may take up to 48 hours. You will receive your reports via email and can also access them through our patient portal.'
    },
    {
      question: 'Are your laboratory services accredited?',
      answer: 'Yes, our laboratory is NABL (National Accreditation Board for Testing and Calibration Laboratories) certified and ISO 9001:2015 accredited. We maintain the highest quality standards and undergo regular audits to ensure accuracy and reliability.'
    },
    {
      question: 'Do you offer home sample collection services?',
      answer: 'Yes, we provide home sample collection services for most tests at an additional charge. Our trained phlebotomists will visit your home at your preferred time to collect samples safely and hygienically.'
    },
    {
      question: 'What should I bring for my appointment?',
      answer: 'Please bring a valid government-issued photo ID, any previous medical reports or prescriptions, your insurance card (if applicable), and the confirmation details of your booking. Wear comfortable clothing and avoid heavy meals before the appointment.'
    },
    {
      question: 'Can I modify or cancel my appointment?',
      answer: 'Yes, you can modify or cancel your appointment up to 24 hours before the scheduled time without any charges. You can do this through our website, mobile app, or by calling our customer service team.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We accept most major health insurance plans. Please check with your insurance provider about coverage for preventive health checkups. Our team can also help verify your benefits before your appointment.'
    },
    {
      question: 'What safety measures do you have in place?',
      answer: 'We follow strict hygiene and safety protocols including regular sanitization, use of disposable equipment, maintaining social distancing, temperature checks, and our staff wear appropriate PPE. We also offer contactless payment options.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our health checkup services, 
            booking process, and what to expect during your visit.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Call +1 (555) 123-4567
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Live Chat Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;