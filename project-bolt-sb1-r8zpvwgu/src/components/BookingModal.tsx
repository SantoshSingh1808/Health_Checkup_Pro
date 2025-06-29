import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageId?: string;
  isLoggedIn: boolean;
  onLoginRequired: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  packageId, 
  isLoggedIn, 
  onLoginRequired 
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: '',
    emergencyContact: '',
    specialRequests: ''
  });

  const packages = {
    'full-body': { name: 'Full Body Checkup', price: 2999 },
    'heart-health': { name: 'Heart Health Package', price: 1999 },
    'diabetes-panel': { name: 'Diabetes Panel', price: 899 },
    'senior-citizen': { name: 'Senior Citizen Care', price: 3999 }
  };

  const currentPackage = packageId ? packages[packageId as keyof typeof packages] : null;

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit to your backend
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    onClose();
    setStep(1);
    setFormData({
      selectedDate: '',
      selectedTime: '',
      fullName: '',
      phone: '',
      email: '',
      address: '',
      medicalHistory: '',
      emergencyContact: '',
      specialRequests: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Book Your Appointment</h2>
            {currentPackage && (
              <p className="text-blue-600 font-semibold">{currentPackage.name} - ₹{currentPackage.price.toLocaleString()}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <div className={`ml-2 text-sm ${step >= stepNumber ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
                  {stepNumber === 1 ? 'Date & Time' : stepNumber === 2 ? 'Personal Details' : 'Confirmation'}
                </div>
                {stepNumber < 3 && <div className="flex-1 h-px bg-gray-300 mx-4"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Date & Time Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Select Date & Time</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="selectedDate"
                    value={formData.selectedDate}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time
                  </label>
                  <select
                    name="selectedTime"
                    value={formData.selectedTime}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Please arrive 15 minutes before your scheduled time</li>
                  <li>• Fasting may be required for certain tests</li>
                  <li>• Bring a valid ID and previous medical reports if any</li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Emergency contact number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History (Optional)
                </label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  placeholder="Any existing medical conditions, medications, or allergies"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or requests"
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800">Confirm Your Booking</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Package:</h4>
                    <p className="text-gray-600">{currentPackage?.name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Amount:</h4>
                    <p className="text-gray-600">₹{currentPackage?.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Date:</h4>
                    <p className="text-gray-600">{formData.selectedDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Time:</h4>
                    <p className="text-gray-600">{formData.selectedTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Name:</h4>
                    <p className="text-gray-600">{formData.fullName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone:</h4>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Payment Options:</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" defaultChecked className="text-green-600" />
                    <span className="text-green-700">Pay at Center</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-green-600" />
                    <span className="text-green-700">Online Payment (Get 5% discount)</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : onClose()}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            
            {step < 3 ? (
              <button
                onClick={handleNext}
                disabled={step === 1 && (!formData.selectedDate || !formData.selectedTime)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!isLoggedIn ? 'Login Required' : 'Next'}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;