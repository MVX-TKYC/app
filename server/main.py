from fastapi import FastAPI, Response, status
from network import get_all_transactions
from converter import NoTokenError, flatten_transactions
from profile import calculate_profile
import os
import json

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/profile/{address}")
async def address(address, response: Response ):    

    transactions = get_all_transactions(address)

    try:

        df = flatten_transactions(transactions)
        profile = calculate_profile(address, df)

        return {
            "address": address,
            "profile": profile
        }

    except NoTokenError:
        response.status_code = status.HTTP_400_BAD_REQUEST

        return {
            "address": address,
            "error": "Address do not have tokens."
        }
