# Next.js Project

This is a Next.js application built with React, Tailwind CSS, and Framer Motion, designed to provide a modern and responsive user experience. It features a comprehensive set of UI components powered by Radix UI and includes authentication flows.

## Features

*   **Authentication:** User login, signup, and forgot password functionalities using NextAuth.js.
*   **Dashboard:** A protected route for authenticated users.
*   **Services Page:** Displays available services.
*   **Contact Page:** For user inquiries.
*   **Responsive Design:** Built with Tailwind CSS for a mobile-first approach.
*   **Animations:** Smooth and engaging UI animations powered by Framer Motion and `tailwindcss-animate`.
*   **Reusable UI Components:** A rich library of custom and Radix UI-based components.
*   **Static Export:** Configured for static HTML export, allowing for easy deployment to static hosting platforms.

## Technologies Used

*   **Framework:** Next.js 13
*   **UI Library:** React
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion, tailwindcss-animate
*   **UI Components:** Radix UI
*   **Icons:** Lucide React
*   **Authentication:** NextAuth.js
*   **Form Management:** React Hook Form, Zod
*   **Database (Potential):** MongoDB, Supabase (based on dependencies)
*   **TypeScript:** For type-safe development

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

*   Node.js (v18 or higher recommended)
*   npm or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd nextjs-project
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will generate a static export of your application in the `out/` directory, as configured in `next.config.js`.

### Running the Production Build

To start the production server (after building):

```bash
npm run start
# or
yarn start
```

## Project Structure

```
.
├── app/                  # Next.js pages and routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── contact/          # Contact page
│   ├── dashboard/        # User dashboard
│   ├── forgot-password/  # Forgot password page
│   ├── login/            # Login page
│   ├── services/         # Services page
│   └── signup/           # Signup page
├── components/           # Reusable React components
│   ├── layout/           # Layout-specific components (footer, etc.)
│   ├── navigation/       # Navigation components (navbar, bottom-nav)
│   ├── sections/         # Page sections (hero, services, testimonials)
│   └── ui/               # Shadcn/Radix UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions, constants, types
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore patterns
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
