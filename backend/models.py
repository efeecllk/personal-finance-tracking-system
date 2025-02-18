from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
import datetime

Base = declarative_base()

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float, nullable=False)  # 
    category = Column(String, nullable=False)  # 
    description = Column(String, nullable=True)  #
    date = Column(DateTime, default=datetime.datetime.utcnow)  
