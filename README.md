# Multi-Step Signup Form (React + Tailwind CSS)

 A beautifully animated, responsive multi-step signup form built with React and Tailwind CSS. It includes field validation, progress tracking, smooth transitions, and a success confirmation screen — all designed for a modern user experience.



## 🚀 Features

### ✅ 4-Step Signup Flow

1. Personal Information – Full name, email, and phone.

2. Account Details – Username, password, and confirmation.

3. Review & Confirmation – Summary with an edit option.

4. Final Step – Success screen with a congratulatory message.

### ✅ Validation Rules

1. All fields required before proceeding.

2. Email must be in valid format.

3. Password must be at least 6 characters.

4. Confirm password must match.

### ✅ UI & Design

1. Fully Responsive (desktop, tablet, mobile)

2. Animated progress bar (4 steps)

3. Glassmorphism card with gradient background

4. Smooth fade & hover transitions

5. Pure Tailwind animations — no external animation libraries used


## 🧭 How It Works

- The form starts at Step 1.

- On clicking Next, validation checks ensure required fields are filled correctly.

- Progress bar animates between steps.

- Final step displays a “Signup Successful 🎉” message.

## Folder Structure
```

📦 multi-step-signup-form
├── 📁 src
│   ├── App.jsx
│   ├── index.css
│   ├── 📁 components
│   │   ├── Step1.js
│   │   ├── Step2.js
│   │   ├── Step3.js
│   │   ├── Success.js
│   │   ├── ProgressBar.js
│   └── App.js
├── package.json
├── tailwind.config.js
└── README.md

```

 To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Amisha73/Multi-step-signUp-form
    ```

2. Install the required packages.
    ```sh
    npm install
    ```

3. Start the development server.
    ```sh
    npm start
    ```
