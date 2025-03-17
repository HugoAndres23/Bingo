from fastapi import FastAPI, APIRouter
from services.bingo_service import (
    generate_bingo_card, draw_new_number, reset_game, get_game_status,
    get_card_status, check_minibingo, check_bingo
)

app = FastAPI()
router = APIRouter()

@router.get("/generate-card")
def generate_card():
    return {"card": generate_bingo_card()}

@router.get("/draw-number")
def draw_number():
    number, message = draw_new_number()
    if number is None:
        return {"message": message}
    return {"number": number, "letter": message}

@router.get("/card-status")
def card_status():
    return {"card": get_card_status()}

@router.get("/check-minibingo")
def check_mini_bingo():
    return {"minibingo": check_minibingo()}

@router.get("/check-bingo")
def check_bingo_status():
    return {"bingo": check_bingo()}

@router.get("/reset-game")
def reset_game_endpoint():
    reset_game()
    return {"message": "El juego ha sido reiniciado"}

@router.get("/game-status")
def game_status():
    return {"called_numbers": get_game_status()}

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)