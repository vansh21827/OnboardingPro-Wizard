# OnboardingPro - Wizard

A modern, responsive multi-step onboarding wizard built with **React**, **Vite**, **React Hook Form**, and **Zod**. The application demonstrates scalable frontend architecture, reusable components, schema-based validation, and an intuitive onboarding experience commonly used in SaaS and FinTech platforms.

---

## Live Demo

https://onboarding-pro-wizard-eorg.vercel.app/

---

## Screenshots

| Personal Information | Account Details 
|----------------------|-----------------
<img width="587" height="807" alt="Screenshot 2026-07-11 225106" src="https://github.com/user-attachments/assets/dd2723c7-e9c4-4c61-aa72-341264f96796" /> | <img width="578" height="831" alt="Screenshot 2026-07-11 225211" src="https://github.com/user-attachments/assets/eb73aae6-2c61-4565-b628-a6ac190874e2" />

| Review | Success |
|--------|----------|
<img width="582" height="761" alt="Screenshot 2026-07-11 225227" src="https://github.com/user-attachments/assets/d184091c-8286-4f7e-8fce-c2829566e261" />|
<img width="582" height="740" alt="Screenshot 2026-07-11 225238" src="https://github.com/user-attachments/assets/008e4880-b0df-48be-9f07-0705b2e24683" />
---

## Features

### Multi-Step Wizard

- Three-step onboarding process
- Personal Information
- Account Details
- Review & Submit
- Success screen after submission

### Form Management

- React Hook Form integration
- Centralized state management
- Data persistence across steps
- Review before final submission

### Validation

- Real-time validation
- Zod schema validation
- Email validation
- Password length validation
- Confirm password matching
- Disabled Next button until valid

### User Experience

- Dynamic progress stepper
- Password show/hide toggle
- Responsive design
- Modern SaaS-inspired interface
- Reusable UI components
- Accessible form controls

### Architecture

- Component-based design
- Reusable UI library
- Separate validation schemas
- Clean folder structure
- Scalable project organization

---

## Tech Stack

- React 19
- Vite
- React Hook Form
- Zod
- JavaScript (ES6+)
- CSS3

---

## Folder Structure

```
multi-step-onboarding-wizard
│
├── |
│   ├── components
│   │   ├── layout
│   │   ├── steps
│   │   └── ui
│   │
│   ├── schemas
│   │   ├── personalSchema.js
│   │   └── accountSchema.js
│   │
│   ├── styles
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── variables.css
│   │   └── wizard.css
│   │
│   ├
│   │   
│   src
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/OnboardingPro-Wizard.git
```

Navigate to the project

```bash
cd OnboardingPro-Wizard
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Validation Rules

### Personal Information

- First Name is required
- Last Name is required
- Valid email address required

### Account Details

- Username is required
- Password must contain at least 8 characters
- Confirm Password must match Password

---

## Project Workflow

```
Personal Information
        ↓
Account Details
        ↓
Review Details
        ↓
Submit
        ↓
Success Screen
```

---

## Project Highlights

- Parent-managed form state
- Conditional rendering
- Multi-step navigation
- Real-time validation
- Responsive layout
- Dynamic progress indicator
- Password visibility toggle
- Reusable UI components
- Professional SaaS design
- Clean and scalable architecture

---

## Future Improvements

- Dark Mode
- Animated transitions
- API integration
- Authentication
- Social login
- File upload
- Save progress
- Internationalization (i18n)

---

## Learning Outcomes

This project demonstrates practical experience with:

- React component architecture
- State lifting
- React Hook Form
- Schema validation using Zod
- Responsive UI design
- Form validation
- Component reusability
- Frontend project organization
- Modern React development practices

---

## Author

**Vansh Bansal**

---
