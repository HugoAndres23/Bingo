from fastapi import APIRouter, Request

router = APIRouter()


@router.get("/")
async def home(request: Request):

    return {
        "message": "Welcome to the BINGO API!",
    }
