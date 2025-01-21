from fastapi import FastAPI
from mixpanel import Mixpanel
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel;
app=FastAPI();
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class User(BaseModel):
    name:str;
    email:str;
    id:str


mp=Mixpanel("b5bee29b37e022dc7d4e1240a487cdb1");
@app.get("/")
async def root():
    return {"message":"Hello World"}
@app.post("/demo")  
async def demo(data:User):
    mp.track(data.id,'Loggedin',{'name': data.name,'email':data.email})
    return {"message":"true"}
