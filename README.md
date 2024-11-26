
* * *

Family-Expense-Insights-Tracker
===============================

Overview
--------

The **Family Expense Insights Tracker** is a backend application designed to manage and analyze family household expenses. The application facilitates tracking of household payments, income, and financial goals. It also allows data to be imported from an Excel file for further processing. The system is built with **Node.js** and **MongoDB**, and it includes features like:

*   Tracking payments made by household members.
*   Managing and analyzing financial data, including income, savings, and expenditures.
*   Logging activities and errors with Winston for better monitoring and debugging.
*   Importing financial data from an Excel file for further processing.

Features
--------

*   **Expense Tracking**: Track all expenses made by different family members.
*   **Income Management**: Manage household income and see the financial impact on savings.
*   **Financial Analysis**: View and analyze financial milestones, loans, and monthly spending.
*   **Excel Data Import**: Import financial records from an Excel sheet.
*   **Error Logging**: The system logs all errors and activities into log files, making troubleshooting easier.

Project Structure
-----------------

plaintext

Copy code

`Family-Expense-Insights-Tracker │ ├── .gitignore                    # Specifies files and folders to be ignored by Git ├── financial_and_transaction_data.xlsx  # Excel file with family financial records ├── loadData.js                   # Script for loading financial data from the Excel file ├── package.json                  # Node.js project dependencies and scripts ├── index.js                      # Entry point for the Express application ├── README.md                     # Project documentation │ ├── logs                          # Folder containing application logs │   ├── import-activity.log       # Logs for successful data import activities │   └── import-errors.log         # Logs for errors encountered during data import │ └── models                        # Folder for Mongoose data models     ├── Household.js              # Mongoose schema for household information     └── Payment.js                # Mongoose schema for payment records`

* * *

Setup Instructions
------------------

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js** (v14 or higher)
*   **MongoDB** (either locally or through a cloud provider like MongoDB Atlas)
*   **Excel file with family transaction data** (`financial_and_transaction_data.xlsx`)

### 1\. Clone the repository

Clone this repository to your local machine:

bash

Copy code

`git clone <repo-url> cd Family-Expense-Insights-Tracker`

### 2\. Install dependencies

Run the following command to install the necessary packages:

bash

Copy code

`npm install`

### 3\. Configure environment variables

Create a `.env` file at the root of the project and set the MongoDB URI for your database connection:

plaintext

Copy code

`DATABASE_URI=<your-mongodb-uri>`

Example of what this might look like for MongoDB Atlas:

plaintext

Copy code

`DATABASE_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense-tracker`

### 4\. Start the server

To run the application, use the following command:

bash

Copy code

`npm start`

The application should now be running on **http://localhost:3000**.

* * *

Usage
-----

### Importing Data from Excel

To import data from the Excel file, use the `loadData.js` script. This will read the data from `financial_and_transaction_data.xlsx` and store it in the MongoDB database.

Run the following command:

bash

Copy code

`node loadData.js`

The script will process the data and store it in the `Household` and `Payment` collections of the MongoDB database. Logs for activities and errors will be saved in the `logs/` folder.

* * *

API Endpoints
-------------

### `POST /api/payments`

Add a new payment record to the database.

**Request Body:**

json

Copy code

`{   "householdId": "123",   "memberId": "456",   "paymentDate": "2024-11-25T00:00:00Z",   "category": "Groceries",   "amount": 200 }`

**Response:**

*   **201 Created**: If the payment is successfully added.
*   **500 Internal Server Error**: If there is an issue with the request or server.

* * *

File and Directory Descriptions
-------------------------------

### 1\. `.gitignore`

This file specifies which files and folders should be ignored by Git. It includes the `node_modules/` folder (where dependencies are stored) and any environment files (like `.env`) that shouldn't be tracked.

### 2\. `financial_and_transaction_data.xlsx`

This is an Excel file that contains family financial data such as household income, expenses, and other financial details. It is used for importing data into the database. The structure of the Excel file should match the expected fields for the import script to process it correctly.

### 3\. `loadData.js`

This is the script used for importing financial data from the Excel file (`financial_and_transaction_data.xlsx`) into the MongoDB database. It reads the Excel file, processes the records, and stores them in the appropriate collections (`Household` and `Payment`). The script also logs the import activities and errors using **Winston**.

### 4\. `package.json`

This file contains metadata about the project, including the project's name, version, dependencies, and scripts. It also specifies the required packages for the project, such as **express**, **mongoose**, **winston**, **xlsx**, and **dotenv**.

### 5\. `index.js`

The entry point of the application, where the **Express** server is initialized and routes are defined. This file listens for incoming requests and handles the API endpoints, including adding payments.

### 6\. `models/Household.js`

This file defines the Mongoose schema for the **Household** model. It represents the structure of the household data, including income, savings, loan repayments, and financial milestones. This model is used to store and retrieve household-related information from the database.

### 7\. `models/Payment.js`

This file defines the Mongoose schema for the **Payment** model. It represents the structure of a payment record, which includes fields like household ID, member ID, payment date, category, and amount. This model is used to store and retrieve payment data from the database.


* * *

### Further Improvements

*   **Authentication**: Implement user authentication using JWT or OAuth for secure API access.
*   **Front-end Integration**: Create a front-end application to visualize the data and provide a more user-friendly interface.
*   **Data Analysis**: Implement features for analyzing trends in expenses, savings, and income over time.

* * *
