import React, { useState } from 'react';

const RegistrationForm = () => {
  // Stato per gestire i dati del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    paymentInfo: '',
  });

  // Funzione per gestire i cambiamenti nei campi del form
  const handleChange = event => {
    const { name, value } = event.target;
    // Aggiorna lo stato con i nuovi dati, preservando i valori esistenti e aggiungendo/modificando i nuovi
    setFormData({ ...formData, [name]: value });
  };

  // Funzione per gestire la sottomissione del form
  const handleSubmit = event => {
    event.preventDefault();

    // Invio dei dati al backend quando il form viene sottomesso
    fetch('http://localhost:8080/customers/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(formData), // Converte i dati del form in JSON e li invia al backend
    })
      .then(response => {
        if (response.ok) {
          // Se la risposta è OK, notifica l'utente della registrazione riuscita
          alert('Registration successful!');
        } else {
          // Se ci sono errori o risposte non valide dal backend, notifica l'utente dell'errore
          alert('Error during registration.');
        }
      })
      .catch(error => console.error('Error during registration:', error)); // Gestisce gli errori di rete o del backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campi del form per inserire i dati */}
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      {/* Aggiungi altri campi per indirizzo, telefono, informazioni di pagamento, ecc. */}
      <button type="submit">Register</button> {/* Pulsante per sottomettere il form */}
    </form>
  );
};

export default RegistrationForm;
