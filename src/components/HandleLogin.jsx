import { useState } from 'react';

export function HandleLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  //   const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert('Login effettuato');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showPassword, setshowpassword] = useState(false);

  const toggleShowPassword = () => {
    setshowpassword(!showPassword);
  };

  return { handleSubmit, handleChange, toggleShowPassword, showPassword, formData };
}
