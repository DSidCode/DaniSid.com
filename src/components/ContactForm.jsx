import React, { useState } from 'react';
import { track } from '../lib/analytics';
import { T } from '../i18n';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsApp';
import { Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function ContactForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'web',
    request_type: 'quote',
    message: '',
    rgpd: false,
    newsletter: false,
    'bot-field': '',
  });

  // Si cambia la preselección desde las tarjetas de servicio
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas de cliente
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage(T.contact.validation.required);
      return;
    }
    if (!formData.rgpd) {
      setStatus('error');
      setErrorMessage(T.contact.validation.rgpdRequired);
      return;
    }
    if (formData.message.trim().length < 15) {
      setStatus('error');
      setErrorMessage(T.contact.validation.messageMin);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Codificación URL Encoded para Netlify Forms
      const payload = new URLSearchParams({
        'form-name': 'contacto',
        ...formData,
        rgpd: formData.rgpd ? 'true' : 'false',
        newsletter: formData.newsletter ? 'true' : 'false',
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (response.ok) {
        setStatus('success');
        track('contact_form_submit', {
          service: formData.service,
          type: formData.request_type,
          newsletter: formData.newsletter,
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(T.contact.errorText);
    }
  };

  // Construir mensaje de WhatsApp de respaldo con datos ya introducidos
  const fallbackWhatsappText = encodeURIComponent(
    `Hola Daniel, intenté enviar el formulario de danisid.com:\n` +
    `• Nombre: ${formData.name || 'No especificado'}\n` +
    `• Email: ${formData.email || 'No especificado'}\n` +
    `• Servicio: ${formData.service}\n` +
    `• Tipo: ${formData.request_type}\n` +
    `• Mensaje: ${formData.message || 'Sin mensaje'}`
  );
  const fallbackWhatsappUrl = `https://wa.me/34641868620?text=${fallbackWhatsappText}`;

  return (
    <section id="contacto" className="border-t border-[var(--color-ds-border)] bg-[var(--color-ds-bg)] py-20 md:py-28 relative">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Cabecera de sección */}
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs text-[var(--color-ds-primary)] uppercase tracking-widest mb-3">
            {T.contact.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--color-ds-text)] uppercase mb-4">
            {T.contact.title}
          </h2>
          <p className="text-sm md:text-base text-[var(--color-ds-muted)] leading-relaxed">
            {T.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna Izquierda: Formulario */}
          <div className="lg:col-span-7 bg-[var(--color-ds-surface)] border border-[var(--color-ds-border)] p-6 sm:p-10 relative">
            
            {status === 'success' ? (
              <div className="py-8 text-center sm:text-left space-y-6">
                <div className="inline-flex p-3 bg-[var(--color-ds-primary)]/10 border border-[var(--color-ds-primary)] text-[var(--color-ds-primary)] rounded-full">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--color-ds-text)]">
                  {T.contact.successTitle}
                </h3>
                <p className="text-sm text-[var(--color-ds-muted)] leading-relaxed font-mono">
                  {T.contact.successText}
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--color-ds-primary)] text-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    <WhatsAppIcon size={14} /> Escribir por WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'web',
                        request_type: 'quote',
                        message: '',
                        rgpd: false,
                        newsletter: false,
                        'bot-field': '',
                      });
                    }}
                    className="border border-[var(--color-ds-border)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ds-text)] hover:border-[var(--color-ds-primary)] transition-colors"
                  >
                    {T.contact.successAction}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot para Akismet / Netlify */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don’t fill this out if you're human:
                    <input
                      name="bot-field"
                      value={formData['bot-field']}
                      onChange={handleChange}
                    />
                  </label>
                </p>

                {/* 1. Nombre y Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] mb-2">
                      {T.contact.fields.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={T.contact.fields.namePlaceholder}
                      className="w-full bg-[var(--color-ds-bg)] border border-[var(--color-ds-border)] px-4 py-3 text-sm text-[var(--color-ds-text)] focus:border-[var(--color-ds-primary)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] mb-2">
                      {T.contact.fields.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={T.contact.fields.emailPlaceholder}
                      className="w-full bg-[var(--color-ds-bg)] border border-[var(--color-ds-border)] px-4 py-3 text-sm text-[var(--color-ds-text)] focus:border-[var(--color-ds-primary)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Empresa / Proyecto y Servicio */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-muted)] mb-2">
                      {T.contact.fields.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={T.contact.fields.companyPlaceholder}
                      className="w-full bg-[var(--color-ds-bg)] border border-[var(--color-ds-border)] px-4 py-3 text-sm text-[var(--color-ds-text)] focus:border-[var(--color-ds-primary)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] mb-2">
                      {T.contact.fields.service} *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[var(--color-ds-bg)] border border-[var(--color-ds-border)] px-4 py-3 text-sm text-[var(--color-ds-text)] focus:border-[var(--color-ds-primary)] focus:outline-none transition-colors"
                    >
                      {T.contact.servicesList.map(srv => (
                        <option key={srv.id} value={srv.id} className="bg-[#0A0A0A] text-[#F4F0EB]">
                          {srv.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Objetivo de la Solicitud (Radio buttons) */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] mb-2.5">
                    {T.contact.fields.requestType}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {T.contact.requestTypes.map(item => {
                      const isSelected = formData.request_type === item.id;
                      return (
                        <label
                          key={item.id}
                          className={`flex items-center gap-3 p-3.5 border text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[var(--color-ds-primary)] bg-[var(--color-ds-primary)]/10 text-[var(--color-ds-text)] shadow-[0_0_15px_rgba(212,175,55,0.08)]'
                              : 'border-[var(--color-ds-border)] text-[var(--color-ds-muted)] hover:border-[var(--color-ds-primary)]/50 hover:text-[var(--color-ds-text)] bg-[var(--color-ds-bg)]/40'
                          }`}
                        >
                          {/* Indicador custom de radio: círculo oscuro con punto oro cuando está activo */}
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? 'border-[var(--color-ds-primary)] bg-[var(--color-ds-primary)]/20' : 'border-zinc-700 bg-zinc-950'
                          }`}>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ds-primary)]" />
                            )}
                          </span>
                          <input
                            type="radio"
                            name="request_type"
                            value={item.id}
                            checked={isSelected}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="font-mono text-[11px] leading-tight select-none">{item.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Mensaje */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] mb-2">
                    {T.contact.fields.message} *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={T.contact.fields.messagePlaceholder}
                    className="w-full bg-[var(--color-ds-bg)] border border-[var(--color-ds-border)] p-4 text-sm text-[var(--color-ds-text)] focus:border-[var(--color-ds-primary)] focus:outline-none transition-colors leading-relaxed"
                  />
                  <div className="text-right font-mono text-[10px] text-[var(--color-ds-muted)] mt-1">
                    {formData.message.length}/15 min
                  </div>
                </div>

                {/* 5. Casillas RGPD y Marketing con custom checkbox oscuro */}
                <div className="space-y-3.5 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <span className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      formData.rgpd
                        ? 'border-[var(--color-ds-primary)] bg-[var(--color-ds-primary)] text-black'
                        : 'border-zinc-700 bg-zinc-950 group-hover:border-[var(--color-ds-primary)]/60'
                    }`}>
                      {formData.rgpd && (
                        <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current stroke-current stroke-1">
                          <path d="M2 6l3 3 5-5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      name="rgpd"
                      required
                      checked={formData.rgpd}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-mono text-xs text-[var(--color-ds-muted)] leading-relaxed group-hover:text-[var(--color-ds-text)] transition-colors">
                      He leído y acepto la{' '}
                      <a
                        href="/privacidad.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-ds-primary)] underline underline-offset-2 hover:opacity-80"
                      >
                        política de privacidad
                      </a>{' '}
                      para el tratamiento de mis datos de contacto. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <span className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      formData.newsletter
                        ? 'border-[var(--color-ds-primary)] bg-[var(--color-ds-primary)] text-black'
                        : 'border-zinc-700 bg-zinc-950 group-hover:border-[var(--color-ds-primary)]/60'
                    }`}>
                      {formData.newsletter && (
                        <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current stroke-current stroke-1">
                          <path d="M2 6l3 3 5-5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-mono text-xs text-[var(--color-ds-muted)] leading-relaxed group-hover:text-[var(--color-ds-text)] transition-colors">
                      {T.contact.fields.newsletter}
                    </span>
                  </label>
                </div>

                {/* Feedback de error */}
                {status === 'error' && (
                  <div className="p-4 bg-red-950/40 border border-red-500/50 space-y-3">
                    <div className="flex items-start gap-3 text-red-200 text-xs font-mono">
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <div>{errorMessage || T.contact.errorText}</div>
                    </div>
                    <a
                      href={fallbackWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-ds-primary)] hover:underline pt-1"
                    >
                      <WhatsAppIcon size={12} /> {T.contact.errorWhatsappBtn} &rarr;
                    </a>
                  </div>
                )}

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[var(--color-ds-primary)] text-black py-4 px-8 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {T.contact.submittingBtn}
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      {T.contact.submitBtn}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Columna Derecha: Tarjetas de Asistencia Inmediata & Llamada 15 min */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta Destacada: Agendar Llamada 15 min */}
            <div className="bg-[var(--color-ds-surface)] border border-[var(--color-ds-border)] p-6 sm:p-8 relative overflow-hidden group">
              <div className="flex items-center gap-2 text-[var(--color-ds-primary)] font-mono text-xs uppercase tracking-widest mb-3">
                <Clock size={16} />
                <span>Atención Rápida</span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--color-ds-text)] mb-3">
                {T.contact.directCallTitle}
              </h3>
              <p className="font-mono text-xs text-[var(--color-ds-muted)] leading-relaxed mb-6">
                {T.contact.directCallDesc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('contact_call_click', { channel: 'whatsapp_15min' })}
                className="inline-flex items-center justify-between w-full border border-[var(--color-ds-primary)] text-[var(--color-ds-primary)] p-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-ds-primary)] hover:text-black transition-colors"
              >
                <span className="flex items-center gap-2">
                  <WhatsAppIcon size={16} />
                  {T.contact.directCallCta}
                </span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Garantías y Seguridad RGPD */}
            <div className="border border-[var(--color-ds-border)] p-6 font-mono text-xs text-[var(--color-ds-muted)] space-y-3 bg-[var(--color-ds-surface)]/40">
              <div className="flex items-center gap-2 text-[var(--color-ds-text)] uppercase tracking-wider font-bold">
                <ShieldCheck size={16} className="text-[var(--color-ds-primary)]" />
                <span>Privacidad y Confidencialidad</span>
              </div>
              <p className="leading-relaxed text-[11px] text-[var(--color-ds-muted)]">
                Tus datos se transmiten con cifrado HTTPS y se procesan exclusivamente para responder a tu proyecto. Sin spam ni cesiones a terceros.
              </p>
              <div className="pt-3 text-[11px] text-[var(--color-ds-text)] border-t border-[var(--color-ds-border)] flex items-center justify-between">
                <span className="text-[var(--color-ds-muted)]">Tiempo medio de respuesta:</span>
                <span className="text-[var(--color-ds-primary)] font-bold tracking-wider">&lt; 24h laborables</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
