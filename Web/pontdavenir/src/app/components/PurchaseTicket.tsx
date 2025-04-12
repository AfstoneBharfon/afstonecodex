'use client';

import { useState } from 'react';

interface TicketTier {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface PurchaseTicketProps {
  ticketTiers: TicketTier[];
}

const PurchaseTicket: React.FC<PurchaseTicketProps> = ({ ticketTiers }) => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    specialRequirements: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPurchasing(true);
    
    // Simulate API call for ticket purchase
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseComplete(true);
    }, 1500);
  };

  const selectedTicket = ticketTiers.find(tier => tier.id === selectedTier);
  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;

  if (purchaseComplete) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase Complete!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for purchasing tickets to the Professional Growth Summit. 
            A confirmation email has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => {
              setPurchaseComplete(false);
              setSelectedTier(null);
              setShowForm(false);
              setFormData({name: '', email: '', company: '', specialRequirements: ''});
            }}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Return to Tickets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {ticketTiers.map((tier) => (
        <div 
          key={tier.id} 
          className={`bg-white rounded-lg overflow-hidden border transition duration-300 ${
            selectedTier === tier.id 
              ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50' 
              : 'border-gray-200 hover:border-indigo-500'
          }`}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold">${tier.price}</span>
              <span className="text-gray-500 mb-1">/person</span>
            </div>
            <ul className="mb-8 space-y-3">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              className={`w-full font-medium py-3 px-4 rounded-lg transition duration-300 ${
                selectedTier === tier.id 
                  ? 'bg-indigo-900 text-white' 
                  : 'bg-indigo-700 hover:bg-indigo-800 text-white'
              }`}
              onClick={() => handleSelectTier(tier.id)}
            >
              {selectedTier === tier.id ? 'Selected' : 'Select Ticket'}
            </button>
          </div>
        </div>
      ))}

      {showForm && selectedTier && (
        <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Complete Your Purchase</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input 
                  required
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                <input 
                  required
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity*</label>
                <select 
                  id="quantity" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
              <textarea 
                id="specialRequirements" 
                name="specialRequirements" 
                value={formData.specialRequirements}
                onChange={handleInputChange}
                rows={3} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <button 
                  type="button"
                  onClick={() => {
                    setSelectedTier(null);
                    setShowForm(false);
                  }}
                  className="w-full md:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isPurchasing}
                  className="w-full md:w-auto bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  {isPurchasing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Complete Purchase'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PurchaseTicket;