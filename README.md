# Horizon

Horizon is a sophisticated financial SaaS platform built with Next.js. It enables real-time management of multiple bank accounts, transaction monitoring, money transfers, and comprehensive financial oversight.

## ⚙️ Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Adds static types to JavaScript for improved development and code quality.
- **Appwrite**: Backend-as-a-service platform for authentication, databases, and storage.
- **Plaid**: Service for connecting bank accounts and retrieving financial data.
- **Dwolla**: Payment platform for transferring funds between accounts.
- **React Hook Form**: Manages form state and validation in React.
- **Zod**: TypeScript-first schema declaration and validation library.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Chart.js**: Library for creating interactive and customizable charts.
- **ShadCN**: UI component library for React with a focus on accessibility and design consistency.

## 🔋 Features

### 1. Authentication

- **SSR Authentication**: Utilizes server-side rendering (SSR) to provide secure authentication and performance improvements.
- **Validations and Authorization**: Ensures user credentials meet security standards and manages user permissions based on roles and authentication status.

### 2. Connect Banks

- **Plaid Integration**: Allows users to link multiple bank accounts and view real-time financial data, including transactions, balances, and account details.

### 3. Home Page

- **Financial Overview**: Displays a consolidated view of total balance, recent transactions, and categorized spending from all connected bank accounts.
- **Data Visualization**: Provides charts and graphs for visualizing key financial metrics and trends.

### 4. My Banks

- **Bank Listing**: Shows a list of all linked banks with detailed information including balances and account details.
- **Account Details**: Presents relevant information for each bank account, including transaction histories.

### 5. Transaction History

- **Pagination and Filtering**: Allows users to navigate their transaction history with pagination controls and apply filters to sort transactions by date, amount, or category.

### 6. Real-time Updates

- **Dynamic Data Refresh**: Reflects changes instantly across relevant pages when new bank accounts are connected or transactions occur, ensuring users see the most current information.

### 7. Funds Transfer

- **Dwolla Integration**: Facilitates funds transfers between accounts with fields for recipient details and bank IDs.
- **Validation**: Ensures required fields are completed and correctly formatted before processing transfers.

### 8. Responsiveness

- **Adaptive Design**: Ensures a consistent user experience across various devices, including desktops, tablets, and mobile phones, using responsive design principles.

## 🤸 Quick Start

### Prerequisites

- Git
- Node.js
- npm (Node Package Manager)


## Installation
Install the project dependencies using npm:
npm install

## Set Up Environment Variables
Create a .env file in the root of your project and add the following content:


#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

Replace the placeholder values with your actual credentials obtained from Appwrite, Plaid, and Dwolla.

## Running the Project
To start the development server, run:

npm run dev
Open http://localhost:3000 in your browser to view the project.


