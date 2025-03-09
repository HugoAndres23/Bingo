from fastapi import FastAPI
from routes import home

app = FastAPI(
    title='BINGO'
)

app.include_router(home.router, tags=["Login"])