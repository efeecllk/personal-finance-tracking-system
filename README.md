# 💰 Personal Finance Tracker

## 📌 Project Overview
This project is a **Personal Finance Tracker** built as a learning experience to understand **database systems, backend development, and frontend integration**. The main goal is to explore how data is stored, retrieved, and manipulated using a relational database while creating a functional web application.

## 🚀 Features
- User can **add income and expenses**
- View a **transaction list** with all entries
- **Delete transactions** when needed (currently experiencing errors)
- Total budget is **automatically calculated**
- Uses a **REST API** for communication between frontend and backend

## 🛠 Tech Stack
### Backend:
- **FastAPI** (Python) - For building the API
- **SQLite** - Database system for storing financial data
- **SQLAlchemy** - ORM for database interactions
- **Uvicorn** - ASGI server to run the backend

### Frontend:
- **React.js** - Frontend framework for building UI
- **Bootstrap** - For responsive styling
- **Axios** - HTTP client for API requests

## 📂 Project Structure
```
finance-tracker/
│── backend/
│   ├── main.py  # API's main file
│   ├── models.py  # Database models
│   ├── database.py  # Database connection setup
│   ├── crud.py  # CRUD operations
│   ├── schemas.py  # Pydantic models
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTransaction.js  # Add income/expenses
│   │   │   ├── TransactionList.js  # Display transactions
│   │   ├── App.js  # Main React application
│   │   ├── config.js  # API base URL
│   ├── public/
│   ├── package.json  # React dependencies
│── README.md
```

## 🔧 Installation & Setup
### Backend Setup
1. Install dependencies:
    ```bash
    pip install fastapi uvicorn sqlalchemy sqlite3
    ```
2. Run the backend server:
    ```bash
    uvicorn main:app --reload
    ```
3. Open `http://127.0.0.1:8000/docs` to test API endpoints.

### Frontend Setup
1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm start
    ```

## 🌍 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/transactions/` | Fetch all transactions |
| `POST` | `/transactions/` | Add a new transaction |
| `DELETE` | `/transactions/{id}` | Delete a transaction (currently experiencing errors) |

## 🏗 Future Improvements
- Fix **delete transaction error**

## 📜 License
This project is licensed under the **MIT License**. Feel free to modify and enhance it for personal use!

---
🚀 **Happy Coding!**