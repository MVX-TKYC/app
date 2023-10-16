from fastapi import FastAPI
from network import getAllTransactions

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/profile/{address}")
async def address(address):
    # 1. get transactions
    data = getAllTransactions(address)

    # 2. convert into dataframe

    # 3. put them in model

    return {
        "message": "Hello World " + address,
        "transactions": data
    }