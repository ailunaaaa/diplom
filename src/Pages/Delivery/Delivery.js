import React, { useState } from 'react';
import './Delivery.css';
import b1 from '../../img/home222.jpg' 
import slide1 from '../../img/home222.jpg' 
const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    deliveryDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <div>
      <h2>Delivery Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Delivery Date:
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
            />
          </label>
         


    <div className="container">
     <img 
              src={slide1} 
              alt="" 
            />  
      <div className="description right">
        <h2>Доставка</h2>
        <p>Мы предоставляем быструю и надежную доставку прямо до вашего порога. Наши услуги доступны в любое время и для любого адреса.</p>
      </div>
    </div>
 

export default App;

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeliveryForm;
