'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactFormData, ContactFormState, FormErrors } from '@/types';
import { validateContactForm, sanitizeInput, hasFormErrors, getFieldError, formatIndonesianPhone } from '@/utils/validation';

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>({
    formData: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    },
    isSubmitting: false,
    submitMessage: '',
    submitStatus: 'idle'
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const services = [
    'Pilih Layanan',
    'Pengembangan Web',
    'Aplikasi Mobile',
    'Konsultasi IT',
    'Pemasaran Digital',
    'UI/UX Design',
    'Lainnya'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Sanitize input
    const sanitizedValue = sanitizeInput(value);

    setFormState(prev => ({
      ...prev,
      formData: {
        ...prev.formData,
        [name]: sanitizedValue
      }
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = validateContactForm(formState.formData);
    setErrors(newErrors);

    return !hasFormErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous states
    setFormState(prev => ({
      ...prev,
      submitMessage: '',
      submitStatus: 'idle'
    }));

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Start submission
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle'
    }));

    try {
      // Format phone number
      const formattedData = {
        ...formState.formData,
        phone: formatIndonesianPhone(formState.formData.phone)
      };

      // Here you would normally send the data to your backend
      // For now, we'll simulate the API call
      await simulateFormSubmission(formattedData);

      // Success
      setFormState({
        formData: {
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        },
        isSubmitting: false,
        submitMessage: 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera!',
        submitStatus: 'success'
      });

      setErrors({});

    } catch (error) {
      // Error handling
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitMessage: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung.',
        submitStatus: 'error'
      }));
    }
  };

  // Simulate API call
  const simulateFormSubmission = async (data: ContactFormData): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Network error'));
        }
      }, 1500);
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telepon',
      value: '+62 8215 8736 885',
      link: 'tel:+6282158736885'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@astrods.id',
      link: 'mailto:info@astrods.id'
    },
    {
      icon: '📍',
      title: 'Alamat',
      value: 'Banyuasin, Sumatera Selatan, Indonesia',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Jam Operasional',
      value: 'Senin - Jumat: 09:00 - 18:00',
      link: '#'
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: '💬',
      link: 'https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch',
      color: 'rgb(37, 211, 102)'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: '#',
      color: 'rgb(59, 130, 246)'
    },
    {
      name: 'Instagram',
      icon: '📷',
      link: '#',
      color: 'rgb(236, 72, 153)'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'rgb(49, 54, 52)',
          backgroundImage: 'linear-gradient(135deg, rgb(49, 54, 52) 0%, rgb(30, 41, 59) 100%)',
          padding: '120px 0 80px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '48px',
              fontWeight: '800',
              lineHeight: '60px',
              letterSpacing: '-0.5px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '24px'
            }}
          >
            Hubungi Kami
          </h1>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: '30px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}
          >
            Kami siap membantu mewujudkan solusi digital yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a
              href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'rgb(95, 198, 124)',
                color: 'rgb(255, 255, 255)',
                borderRadius: '200px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
              }}
            >
              WhatsApp Langsung
            </a>
            <a
              href="mailto:info@astrods.id"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: 'rgb(95, 198, 124)',
                border: '2px solid rgb(95, 198, 124)',
                borderRadius: '200px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '16px'
                  }}
                >
                  {info.icon}
                </div>
                <h3
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '8px'
                  }}
                >
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    color: 'rgb(229, 242, 239)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'rgb(95, 198, 124)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(229, 242, 239)'}
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ backgroundColor: 'rgb(30, 41, 59)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: '800',
                lineHeight: '44px',
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px'
              }}
            >
              Kirim Pesan
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'rgb(156, 163, 175)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Isi form di bawah ini dan kami akan menghubungi Anda sesegera mungkin
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: errors.name
                      ? '1px solid rgb(239, 68, 68)'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Masukkan nama lengkap Anda"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <div
                    id="name-error"
                    style={{
                      color: 'rgb(239, 68, 68)',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: errors.email
                      ? '1px solid rgb(239, 68, 68)'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="email@example.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <div
                    id="email-error"
                    style={{
                      color: 'rgb(239, 68, 68)',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Perusahaan
                </label>
                <input
                  type="text"
                  name="company"
                  value={formState.formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Nama perusahaan (opsional)"
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: errors.phone
                      ? '1px solid rgb(239, 68, 68)'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="+62 8xx-xxxx-xxxx"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && (
                  <div
                    id="phone-error"
                    style={{
                      color: 'rgb(239, 68, 68)',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {errors.phone}
                  </div>
                )}
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Layanan yang Dibutuhkan
                </label>
                <select
                  name="service"
                  value={formState.formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {services.map((service, index) => (
                    <option key={index} value={service} style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '8px'
                  }}
                >
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formState.formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: errors.message
                      ? '1px solid rgb(239, 68, 68)'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Jelaskan kebutuhan Anda..."
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <div
                    id="message-error"
                    style={{
                      color: 'rgb(239, 68, 68)',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {errors.message}
                  </div>
                )}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                type="submit"
                disabled={formState.isSubmitting}
                style={{
                  padding: '16px 40px',
                  backgroundColor: formState.isSubmitting ? 'rgb(107, 114, 128)' : 'rgb(95, 198, 124)',
                  color: 'rgb(255, 255, 255)',
                  border: 'none',
                  borderRadius: '200px',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: formState.isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
                }}
              >
                {formState.isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>

            {formState.submitMessage && (
              <div
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: formState.submitStatus === 'error'
                    ? 'rgba(239, 68, 68, 0.1)'
                    : 'rgba(95, 198, 124, 0.1)',
                  border: formState.submitStatus === 'error'
                    ? '1px solid rgb(239, 68, 68)'
                    : '1px solid rgb(95, 198, 124)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  color: formState.submitStatus === 'error'
                    ? 'rgb(239, 68, 68)'
                    : 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '16px'
                }}
                role={formState.submitStatus === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {formState.submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '60px 0' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              color: 'rgb(255, 255, 255)',
              marginBottom: '16px'
            }}
          >
            Hubungi Kami Melalui
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '16px',
              color: 'rgb(156, 163, 175)',
              marginBottom: '40px'
            }}
          >
            Pilih platform yang paling nyaman untuk Anda
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  backgroundColor: social.color,
                  borderRadius: '50%',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '24px'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}