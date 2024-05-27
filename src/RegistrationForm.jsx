import React, { useState } from 'react';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'Please enter your first name!';
    if (!form.lastName) newErrors.lastName = 'Please enter your last name!';
    if (!form.email) newErrors.email = 'Please enter your email!';
    if (!form.contact) newErrors.contact = 'Please enter your contact number!';
    else if (form.contact.length !== 10) newErrors.contact = 'Invalid number! Must be 10 digits.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert('Registration successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />
        </label>
        {errors.contact && <p>{errors.contact}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
