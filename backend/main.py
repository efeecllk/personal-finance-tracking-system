from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import crud

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/transactions/")
def read_transactions(db: Session = Depends(get_db)):
    return crud.get_transactions(db)

@app.post("/transactions/")
def add_transaction(amount: float, category: str, description: str = "", db: Session = Depends(get_db)):
    return crud.create_transaction(db, amount, category, description)

@app.delete("/transactions/{transaction_id}")
def remove_transaction(transaction_id: int, db: Session = Depends(get_db)):
    return crud.delete_transaction(db, transaction_id)


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  # 
    allow_headers=["*"],  # 
)

