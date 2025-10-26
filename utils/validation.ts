import { ContactFormData, FormErrors } from '@/types';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation for Indonesian format
const PHONE_REGEX = /^(?:(?:\+|00)62|0)[2-9]\d{7,12}$/;

// Minimum character requirements
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 1000;

/**
 * Validates contact form data
 * @param formData - The contact form data to validate
 * @returns Object containing validation errors (empty if valid)
 */
export function validateContactForm(formData: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Nama harus diisi';
  } else if (formData.name.trim().length < MIN_NAME_LENGTH) {
    errors.name = `Nama minimal ${MIN_NAME_LENGTH} karakter`;
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Nama maksimal 50 karakter';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email harus diisi';
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Format email tidak valid';
  }

  // Phone validation
  if (!formData.phone.trim()) {
    errors.phone = 'Nomor telepon harus diisi';
  } else if (!PHONE_REGEX.test(formData.phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Format nomor telepon Indonesia tidak valid (contoh: 08123456789 atau +628123456789)';
  }

  // Company validation (optional)
  if (formData.company && formData.company.trim().length > 100) {
    errors.company = 'Nama perusahaan maksimal 100 karakter';
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Pesan harus diisi';
  } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Pesan minimal ${MIN_MESSAGE_LENGTH} karakter`;
  } else if (formData.message.trim().length > MAX_MESSAGE_LENGTH) {
    errors.message = `Pesan maksimal ${MAX_MESSAGE_LENGTH} karakter`;
  }

  return errors;
}

/**
 * Sanitizes input by removing HTML tags and trimming whitespace
 * @param input - The input string to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();
}

/**
 * Checks if form has any validation errors
 * @param errors - Form errors object
 * @returns True if there are errors, false otherwise
 */
export function hasFormErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Formats Indonesian phone number to a standard format
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatIndonesianPhone(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Convert numbers starting with 0 to +62 format
  if (cleaned.startsWith('0')) {
    return '+62' + cleaned.substring(1);
  }

  // Add +62 if not present and number doesn't start with country code
  if (!cleaned.startsWith('62') && !cleaned.startsWith('+')) {
    return '+62' + cleaned;
  }

  // Add + if number starts with 62 but no +
  if (cleaned.startsWith('62')) {
    return '+' + cleaned;
  }

  return phone;
}

/**
 * Validates Indonesian phone number format with more flexible rules
 * @param phone - Phone number string
 * @returns True if valid Indonesian phone number
 */
export function isValidIndonesianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');

  // Accept various formats:
  // +628123456789
  // 08123456789
  // 628123456789
  // 0821-2345-6789
  // 0812 3456 789

  const regex = /^(?:(?:\+|00)62|0)[2-9]\d{7,12}$/;
  return regex.test(cleaned);
}

/**
 * Gets field error message for display
 * @param errors - Form errors object
 * @param fieldName - Name of the field
 * @returns Error message or empty string
 */
export function getFieldError(errors: FormErrors, fieldName: keyof FormErrors): string {
  return errors[fieldName] || '';
}