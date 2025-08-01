import { useState, useCallback } from 'react';
import { z } from 'zod';

interface ValidationRule<T> {
  field: keyof T;
  schema: z.ZodType<any>;
  message?: string;
}

interface FormError {
  field: string;
  message: string;
}

interface UseFormValidationReturn<T> {
  errors: FormError[];
  validate: (data: T, rules: ValidationRule<T>[]) => boolean;
  validateField: (field: keyof T, value: any, rules: ValidationRule<T>[]) => boolean;
  clearErrors: () => void;
  clearFieldError: (field: keyof T) => void;
  hasError: (field: keyof T) => boolean;
  getFieldError: (field: keyof T) => string | undefined;
}

export const useFormValidation = <T>(): UseFormValidationReturn<T> => {
  const [errors, setErrors] = useState<FormError[]>([]);

  const validate = useCallback((data: T, rules: ValidationRule<T>[]): boolean => {
    const newErrors: FormError[] = [];

    rules.forEach(rule => {
      try {
        rule.schema.parse(data[rule.field]);
      } catch (error) {
        if (error instanceof z.ZodError) {
          newErrors.push({
            field: String(rule.field),
            message: rule.message || error.issues[0]?.message || 'Invalid value'
          });
        }
      }
    });

    setErrors(newErrors);
    return newErrors.length === 0;
  }, []);

  const validateField = useCallback((
    field: keyof T, 
    value: any, 
    rules: ValidationRule<T>[]
  ): boolean => {
    const rule = rules.find(r => r.field === field);
    if (!rule) return true;

    try {
      rule.schema.parse(value);
      // Remove any existing error for this field
      setErrors(prev => prev.filter(error => error.field !== String(field)));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = rule.message || error.issues[0]?.message || 'Invalid value';
        
        // Update or add error for this field
        setErrors(prev => {
          const filteredErrors = prev.filter(e => e.field !== String(field));
          return [...filteredErrors, { field: String(field), message: errorMessage }];
        });
      }
      return false;
    }
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const clearFieldError = useCallback((field: keyof T) => {
    setErrors(prev => prev.filter(error => error.field !== String(field)));
  }, []);

  const hasError = useCallback((field: keyof T): boolean => {
    return errors.some(error => error.field === String(field));
  }, [errors]);

  const getFieldError = useCallback((field: keyof T): string | undefined => {
    return errors.find(error => error.field === String(field))?.message;
  }, [errors]);

  return {
    errors,
    validate,
    validateField,
    clearErrors,
    clearFieldError,
    hasError,
    getFieldError
  };
};

// Email validation
export const emailSchema = z.string()
  .email('Please enter a valid email address')
  .min(1, 'Email is required');

// Phone validation
export const phoneSchema = z.string()
  .regex(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number')
  .min(10, 'Phone number must be at least 10 digits');

// Name validation
export const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be less than 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

// Password validation
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number');

// Common validation schemas
export const validationSchemas = {
  email: emailSchema,
  phone: phoneSchema,
  name: nameSchema,
  password: passwordSchema,
  required: (fieldName: string) => z.string().min(1, `${fieldName} is required`),
  minLength: (min: number, fieldName: string) => 
    z.string().min(min, `${fieldName} must be at least ${min} characters`),
  maxLength: (max: number, fieldName: string) => 
    z.string().max(max, `${fieldName} must be less than ${max} characters`),
};