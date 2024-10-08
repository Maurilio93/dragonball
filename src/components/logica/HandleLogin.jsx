import { useState } from 'react';
import Swal from 'sweetalert2';

export function HandleLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData.username, formData.password);
  };

  const handleLogin = (inputUsername, inputPassword) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.username === inputUsername && userInfo.password === inputPassword) {
      Swal.fire({
        icon: 'success',
        title: 'Accesso riuscito',
        text: `Bentornato, ${userInfo.username}!`,
      });
      // Aggiungi qui la logica per reindirizzare l'utente o salvare lo stato di accesso
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Errore di accesso',
        text: 'Username o password non corretti. Riprova.',
      });
    }
  };

  return { handleSubmit, handleChange, toggleShowPassword, showPassword, formData };
}
