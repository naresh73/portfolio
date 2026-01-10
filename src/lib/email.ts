// Email utility functions
// This file can be extended with additional email-related utilities

export interface ContactFormData {
  name: string
  email: string
  contactNumber: string
  message: string
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhoneNumber(phone: string): boolean {
  // Basic phone validation - accepts various formats
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
  return phoneRegex.test(phone)
}

export function formatEmailContent(data: ContactFormData): string {
  return `
    Name: ${data.name}
    Email: ${data.email}
    Contact Number: ${data.contactNumber}
    Message: ${data.message}
  `
}

