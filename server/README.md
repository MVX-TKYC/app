# Backend

## Overview

TODO

## Usage

### Start

```
uvicorn main:app --reload
```

### Documentation

When running the server, the Swagger documentation is available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### Speeding up development


To enable the reading of transactions from local storage instead of the network, you should create a .env file and specify the path to the folder using the following variable:

```
TRANSACTIONS_CACHE_PATH="path_to_folder"
```

Within this designated folder, you should store transaction data in individual files named after their corresponding addresses. For example, you may have a file named `erd1hdejmz9shgquyk6k85da5r9rvmk49p4lts8z9pvc3fd5kku78qrsrusact.json`, which contains all the relevant transactions.