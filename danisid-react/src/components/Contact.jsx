import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
      .then(() => {
        setFormStatus('¡Mensaje enviado correctamente!');
        setFormData({ user_name: '', user_email: '', user_message: '' });
        setTimeout(() => setFormStatus(''), 5000); // Limpia el mensaje después de 5 segundos
      })
      .catch((error) => {
        setFormStatus('Hubo un error al enviar el mensaje.');
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2
        className="section_title"
      >
        CONTACTO
      </h2>
      <div className="contact_container container grid">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form grid"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="visually-hidden">
            <label>No rellenes esto si eres humano: <input name="bot-field" /></label>
          </p>
          <div className="contact_group grid">
            <div>
              <label htmlFor="user_name" className="visually-hidden">Nombre</label>
              <input type="text" id="user_name" name="user_name" placeholder="Nombre" required className="contact_input" value={formData.user_name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="user_email" className="visually-hidden">Email</label>
              <input type="email" id="user_email" name="user_email" placeholder="Email" required className="contact_input" value={formData.user_email} onChange={handleChange} />
            </div>
          </div>
          <label htmlFor="user_message" className="visually-hidden">Mensaje</label>
          <textarea id="user_message" name="user_message" placeholder="Mensaje" required className="contact_input contact_area" value={formData.user_message} onChange={handleChange}></textarea>
          <button type="submit" className="button contact_button">Enviar Mensaje</button>
          {formStatus && <p className="contact_message" aria-live="polite">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;