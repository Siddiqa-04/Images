# Imagify - Full Stack AI Text-to-Image Generator

A Full Stack AI SaaS application built using **MongoDB**, **Express**, **React**, and **Node.js** to generate images from text prompts. This app features a credit system for image generation, user authentication, and integration with an online payment gateway for purchasing additional credits.

---

## Features

### 🔑 User Authentication
- Secure user registration and login system.
- User account details stored in MongoDB.
- JWT-based authentication for secure session management.

### 🎨 AI-Powered Text-to-Image Generator
- Generate high-quality images using the **Clipdrop API**.
- Simple and user-friendly interface to input text prompts.

### 💳 Credit System
- Users get a fixed number of free credits upon signup.
- Each image generation deducts a credit.
- Option to purchase additional credits via an integrated online payment gateway.

### 🌐 Tech Stack
- **Frontend**: React with Tailwind CSS for a modern UI.
- **Backend**: Node.js and Express for API and business logic.
- **Database**: MongoDB to store user details, credits, and history.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js and npm installed.
- MongoDB running locally or a MongoDB Atlas connection string.
- Clipdrop API key.
- Online payment gateway credentials (e.g., Stripe or PayPal).

### Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/patil-swap/Imagify
    cd Imagify
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    CLIPDROP_API_KEY=your_clipdrop_api_key
    PAYMENT_GATEWAY_KEY=your_payment_gateway_key
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Application**:
    ```bash
    # Start the backend server
    npm run server

    # Start the React frontend
    cd client
    npm start
    ```

---

## Usage

1. **Sign Up**:
   Create a new account or log in with an existing one.

2. **Generate Images**:
   - Enter a text prompt.
   - Click the "Generate" button to create an image (1 credit per generation).

3. **Manage Credits**:
   - Check your remaining credits on the dashboard.
   - Purchase additional credits through the payment gateway.

---

## API Endpoints

### User Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login with existing credentials.

### Text-to-Image Generation
- `POST /api/images/generate` - Generate an image using the Clipdrop API.

### Credit Management
- `GET /api/credits` - Fetch remaining credits.
- `POST /api/credits/purchase` - Purchase additional credits.

---

## Folder Structure

```plaintext
.
├── client                 # React frontend
├── server                 # Node.js backend
├── models                 # MongoDB models
├── routes                 # Express API routes
├── utils                  # Utility functions
├── .env                   # Environment variables
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## Future Enhancements

- Add support for multiple AI models for image generation.
- Implement a gallery feature to save and view previously generated images.
- Enable sharing of generated images on social media.
- Add email notifications for payment receipts and credits usage.

---

## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- **Clipdrop API** for powering text-to-image generation.
- **MongoDB, Express, React, Node.js** for the robust tech stack.
- **Stripe/PayPal** for seamless payment integration.

---

## Contact
For any queries or feedback, feel free to reach out:
- **Email**: swapnilkpatil96@gmail.com
- **Portfolio**: [swapnil-web-portfolio.vercel.app](https://swapnil-web-portfolio.vercel.app)
