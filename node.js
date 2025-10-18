// validation.js
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.getElementById('submitBtn');
        
        // Khai báo các fields cần validate
        this.fields = {
            fullName: {
                element: document.getElementById('fullName'),
                error: document.getElementById('fullNameError'),
                validate: this.validateFullName.bind(this)
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                validate: this.validateEmail.bind(this)
            },
            password: {
                element: document.getElementById('password'),
                error: document.getElementById('passwordError'),
                validate: this.validatePassword.bind(this)
            },
            confirmPassword: {
                element: document.getElementById('confirmPassword'),
                error: document.getElementById('confirmPasswordError'),
                validate: (value) => this.validateConfirmPassword(value)
            },
            agree: {
                element: document.getElementById('agreeTerms'),
                error: document.getElementById('agreeError'),
                validate: this.validateAgree.bind(this)
            }
        };

        this.init();
    }

    init() {
        console.log('🔧 Form Validator Initialized');
        
        // Real-time validation trên mỗi input
        Object.values(this.fields).forEach(field => {
            if (field.element.type !== 'checkbox') {
                // Validation khi người dùng rời khỏi input (blur)
                field.element.addEventListener('blur', () => {
                    this.validateField(field);
                });
                
                // Clear error khi người dùng bắt đầu nhập
                field.element.addEventListener('input', () => {
                    this.clearFieldError(field);
                });
            } else {
                // Checkbox validation
                field.element.addEventListener('change', () => {
                    this.validateField(field);
                });
            }
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
    }

    validateField(field) {
        let value;
        
        if (field.element.type === 'checkbox') {
            value = field.element.checked;
        } else {
            value = field.element.value.trim();
        }
        
        const result = field.validate(value);
        
        if (!result.isValid) {
            this.showError(field, result.message);
        } else {
            this.showSuccess(field);
        }
        
        return result.isValid;
    }

    validateForm() {
        console.log('🔄 Validating form...');
        
        let isFormValid = true;
        let firstInvalidField = null;
        
        // Validate tất cả fields
        Object.values(this.fields).forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
                if (!firstInvalidField) {
                    firstInvalidField = field.element;
                }
            }
        });

        if (isFormValid) {
            this.submitForm();
        } else {
            // Focus vào field đầu tiên bị lỗi
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        }
    }

    // 🔧 VALIDATION RULES

    validateFullName(fullName) {
        console.log('📝 Validating full name:', fullName);
        
        if (!fullName) {
            return { isValid: false, message: 'Full name is required' };
        }
        
        if (fullName.length < 2) {
            return { isValid: false, message: 'Full name must be at least 2 characters' };
        }
        
        if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(fullName)) {
            return { isValid: false, message: 'Full name can only contain letters and spaces' };
        }
        
        // Kiểm tra có ít nhất 2 từ (first name và last name)
        const nameParts = fullName.trim().split(/\s+/);
        if (nameParts.length < 2) {
            return { isValid: false, message: 'Please enter both first and last name' };
        }
        
        return { isValid: true, message: '' };
    }

    validateEmail(email) {
        console.log('📧 Validating email:', email);
        
        if (!email) {
            return { isValid: false, message: 'Email is required' };
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        
        return { isValid: true, message: '' };
    }

    validatePassword(password) {
        console.log('🔐 Validating password');
        
        if (!password) {
            return { isValid: false, message: 'Password is required' };
        }
        
        if (password.length < 8) {
            return { isValid: false, message: 'Password must be at least 8 characters' };
        }
        
        if (!/(?=.*[a-z])/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one lowercase letter' };
        }
        
        if (!/(?=.*[A-Z])/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one uppercase letter' };
        }
        
        if (!/(?=.*\d)/.test(password)) {
            return { isValid: false, message: 'Password must contain at least one number' };
        }
        
        return { isValid: true, message: '' };
    }

    validateConfirmPassword(confirmPassword) {
        const password = this.fields.password.element.value;
        console.log('🔑 Validating password confirmation');
        
        if (!confirmPassword) {
            return { isValid: false, message: 'Please confirm your password' };
        }
        
        if (confirmPassword !== password) {
            return { isValid: false, message: 'Passwords do not match' };
        }
        
        return { isValid: true, message: '' };
    }

    validateAgree(checked) {
        console.log('✅ Validating terms agreement:', checked);
        
        if (!checked) {
            return { isValid: false, message: 'You must agree to the terms and conditions' };
        }
        
        return { isValid: true, message: '' };
    }

    // 🎨 UI HELPERS

    showError(field, message) {
        field.error.textContent = message;
        field.element.classList.add('error');
        field.element.classList.remove('success');
    }

    showSuccess(field) {
        field.error.textContent = '';
        field.element.classList.add('success');
        field.element.classList.remove('error');
    }

    clearFieldError(field) {
        field.error.textContent = '';
        field.element.classList.remove('error');
    }

    async submitForm() {
        console.log('🚀 Submitting form...');
        
        // Hiển thị loading state
        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Creating Account...';
        this.form.classList.add('loading');
        
        try {
            // Giả lập API call
            await this.simulateAPICall();
            
            console.log('🎉 Form submitted successfully!');
            
            // Hiển thị success message
            alert('🎉 Account created successfully! Welcome to Clarity!');
            
            // Reset form
            this.form.reset();
            
            // Clear all validations
            Object.values(this.fields).forEach(field => {
                this.clearFieldError(field);
            });
            
        } catch (error) {
            console.error('❌ Form submission failed:', error);
            alert('❌ Registration failed. Please try again.');
        } finally {
            // Reset button state
            this.submitBtn.disabled = false;
            this.submitBtn.textContent = 'Sign Up';
            this.form.classList.remove('loading');
        }
    }

    simulateAPICall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true });
            }, 70000);
        });
    }
}

// 🚀 Khởi tạo validator khi trang load
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, initializing form validator...');
    new FormValidator('registrationForm');
});