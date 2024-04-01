from pydantic import BaseModel

# User Create model for signup requests
class UserCreate(BaseModel):
    email: str
    password: str

# User model for displaying user information securely
class User(BaseModel):
    email: str

    class Config:
        orm_mode = True

# User in database model includes hashed_password for internal use
class UserInDB(User):
    hashed_password: str
