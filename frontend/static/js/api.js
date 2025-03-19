const BASE_URL = 'http://localhost:8000';

export async function getCard() {
    try {
        let response = await axios.get(`${BASE_URL}/generate-card`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function getStatus() {
    try {
        let response = await axios.get(`${BASE_URL}/card-status`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function getNumber() {
    try {
        let response = await axios.get(`${BASE_URL}/draw-number`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function checkBinguito() {
    try {
        let response = await axios.get(`${BASE_URL}/check-minibingo`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function checkBingo() {
    try {
        let response = await axios.get(`${BASE_URL}/check-bingo`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function resetGame() {
    try {
        let response = await axios.get(`${BASE_URL}/reset-game`);
        if (response) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}