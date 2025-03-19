import numpy as np
from nn_random_generator import generate_uniform_random_number

called_numbers = set()
bingo_card = None
minibingos_registrados = set()

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
    global bingo_card, minibingos_registrados
    card = []
    for key in BINGO_MAPPING:
        column = []
        while len(column) < 5:
            num = generate_uniform_random_number()
            if num in BINGO_MAPPING[key] and num not in column:
                column.append(num)
        card.append(column)
    card[2][2] = "FREE" 
    bingo_card = np.array(card).T.tolist()
    minibingos_registrados.clear() 
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
    global minibingos_registrados
    
    for i in range(5):
        if i not in minibingos_registrados and all(cell == "X" or cell == "FREE" for cell in bingo_card[i]):
            minibingos_registrados.add(i)
            return True
        
        if (i + 5) not in minibingos_registrados and all(bingo_card[row][i] == "X" or bingo_card[row][i] == "FREE" for row in range(5)):
            minibingos_registrados.add(i + 5)
            return True

def check_bingo():
    return all(all(cell == "X" or cell == "FREE" for cell in row) for row in bingo_card)

def reset_game():
    global called_numbers, bingo_card, minibingos_registrados
    called_numbers.clear()
    bingo_card = None
    minibingos_registrados.clear()

def get_game_status():
    return sorted(list(called_numbers))