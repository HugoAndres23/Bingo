import numpy as np
from sklearn.ensemble import RandomForestClassifier

def build_random_generator():
    model = RandomForestClassifier(n_estimators=100)
    
    # Datos de entrenamiento (simulación de aleatoriedad)
    X_train = np.random.rand(10000, 5)
    y_train = np.random.randint(1, 76, size=(10000,))
    
    model.fit(X_train, y_train)
    return model

# Crear y entrenar el modelo
model = build_random_generator()

def generate_uniform_random_number(seed=None):
    if seed is None:
        seed = np.random.rand(1, 5)  # Vector de ruido aleatorio
    num = model.predict(seed.reshape(1, -1))[0]  # Generar número
    return int(num)