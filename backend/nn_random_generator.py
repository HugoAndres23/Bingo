import torch
import torch.nn as nn
import torch.optim as optim

# Parámetros
num_samples = 100000
min_val, max_val = 1, 75
num_classes = max_val - min_val + 1

def generate_training_data(num_samples, min_val, max_val):
    return torch.arange(min_val, max_val + 1).repeat(num_samples // num_classes + 1)[:num_samples]

# Definimos la red neuronal
class RandomNumberGenerator(nn.Module):
    def __init__(self, num_classes):
        super(RandomNumberGenerator, self).__init__()
        self.fc1 = nn.Linear(1, 64)
        self.fc2 = nn.Linear(64, 128)
        self.fc3 = nn.Linear(128, num_classes)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        x = self.fc3(x)
        return x 

# Entrenamiento
model = RandomNumberGenerator(num_classes)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

data = generate_training_data(num_samples, min_val, max_val)
labels = (data - min_val).long()
inputs = torch.rand((num_samples, 1))

epochs = 500
for epoch in range(epochs):
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()
    if epoch % 100 == 0:
        print(f'Epoch [{epoch}/{epochs}], Loss: {loss.item():.4f}')

# Función para generar un número aleatorio
def generate_uniform_random_number():
    with torch.no_grad():
        input_noise = torch.rand((1, 1))
        output_probs = torch.softmax(model(input_noise), dim=1)
        random_number = torch.multinomial(output_probs, 1).item() + min_val
        return random_number