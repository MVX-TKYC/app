from fastapi import FastAPI
from network import get_all_transactions
from converter import flatten_transactions
from profile import get_profile

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/profile/{address}")
async def address(address):    

    transactions = get_all_transactions(address)
    df = flatten_transactions(transactions)
    profile = get_profile(address, df)

    return {
        "address": address,
        "profile": profile
    }