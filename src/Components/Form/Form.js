import React, { useState } from 'react';
import './form.css';
// Start form proj - rashin gholijani farahani
const Header = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold text-purple-800">Fill out the Form</h1>
      <p className="text-lg text-gray-600">Please provide the following details:</p>
    </header>
  );
};

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    major: '',
    address: '',
    email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div className="form-container bg-gray-100 p-6 rounded-lg shadow-lg">
      <Header /> 
      <form onSubmit={handleSubmit} className="form space-y-4">
        <label className="form-label">
          <span className="text-pink-500 font-semibold">Name</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-input"
            placeholder="John Doe"
            required
          />
        </label>
        <label className="form-label">
          <span className="text-pink-500 font-semibold">Family Name</span>
          <input
            type="text"
            name="familyName"
            onChange={handleChange}
            className="form-input"
            placeholder="Doe"
            required
          />
        </label>
        <label className="form-label">
          <span className="text-pink-500 font-semibold">Major</span>
          <input
            type="text"
            name="major"
            onChange={handleChange}
            className="form-input"
            placeholder="Computer Science"
          />
        </label>
        <label className="form-label">
          <span className="text-pink-500 font-semibold">Address</span>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="form-input"
            placeholder="123 Main St"
          />
        </label>
        <label className="form-label">
          <span className="text-pink-500 font-semibold">Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-input"
            placeholder="john.doe@example.com"
            required
          />
        </label>
        <button
          type="submit"
          className="form-submit bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {formSubmitted && (
        <div className="form-data mt-4 bg-purple-100 p-4 rounded-lg">
          <h2 className="text-purple-800 font-semibold">Form Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Family Name: {formData.familyName}</p>
          <p>Major: {formData.major}</p>
          <p>Address: {formData.address}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
