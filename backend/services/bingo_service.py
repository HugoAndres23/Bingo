import numpy as np
from nn_random_generator import generate_uniform_random_number

# Almacenar números generados
called_numbers = set()
bingo_card = None

# Mapeo de números a letras
BINGO_MAPPING = {
    "B": list(range(1, 16)),
    "I": list(range(16, 31)),
    "N": list(range(31, 46)),
    "G": list(range(46, 61)),
    "O": list(range(61, 76))
}

def get_bingo_letter(number):
    for letter, num_range in BINGO_MAPPING.items():
        if number in num_range:
            return letter
    return ""

def generate_bingo_card():
    global bingo_card
    card = []
    for key in BINGO_MAPPING:
        column = np.random.choice(BINGO_MAPPING[key], size=5, replace=False).tolist()
        card.append(column)
    card[2][2] = "FREE"  # Espacio libre en el centro
    bingo_card = np.array(card).T.tolist()
    return bingo_card

def draw_new_number():
    global called_numbers, bingo_card
    if bingo_card is None:
        return None, "Debe generar una tabla antes de pedir un número"
    
    available_numbers = set(range(1, 76)) - called_numbers
    if not available_numbers:
        return None, "Todos los números han sido llamados"
    
    new_number = generate_uniform_random_number()
    while new_number in called_numbers:
        new_number = generate_uniform_random_number()
    
    called_numbers.add(new_number)
    mark_number_in_card(new_number)
    return new_number, get_bingo_letter(new_number)

def mark_number_in_card(number):
    global bingo_card
    for row in bingo_card:
        for i in range(len(row)):
            if row[i] == str(number):
                print(f"Valor: {row[i]}, Tipo: {type(row[i])}, Número: {number}, Tipo: {type(number)}")
                row[i] = "X"

def get_card_status():
    return bingo_card

def check_minibingo():
    for row in bingo_card:
        if all(cell == "X" or cell == "FREE" for cell in row):
            return True
    for col in range(5):
        if all(row[col] == "X" or row[col] == "FREE" for row in bingo_card):
            return True
    return False

def check_bingo():
    return all(all(cell == "X" or cell == "FREE" for cell in row) for row in bingo_card)

def reset_game():
    global called_numbers, bingo_card
    called_numbers.clear()
    bingo_card = None

def get_game_status():
    return sorted(list(called_numbers))