from sqlalchemy.orm import Session
from models import Transaction

def get_transactions(db: Session):
    return db.query(Transaction).all()

def create_transaction(db: Session, amount: float, category: str, description: str):
    transaction = Transaction(amount=amount, category=category, description=description)
    db.add(transaction)
    db.commit()
    db.refresh(transaction)
    return transaction

def delete_transaction(db: Session, transaction_id: int):
    transaction = db.query(Transaction).filter(Transaction.id == transaction_id).first()
    if transaction:
        db.delete(transaction)
        db.commit()
        return True
    return False
