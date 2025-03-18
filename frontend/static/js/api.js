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
    // async getMe(token) {
    //     return axios.get(`${apiUrl}/me`, authHeaders(token));
    // },
    // async new_vote(token, data) {
    //     return await axios.post(`${apiUrl}/vote`, data, authHeaders(token));
    // },
    // async getcandidates(token) {
    //     try {
    //     let response = await axios.get(
    //         `${apiUrl}/candidates`,
    //         authHeaders(token)
    //     );
    //     return response.data;
    //     } catch (error) {
    //     throw new Error("Error al obtener candidatos: " + error.message);
    //     }
    // },
    // async getcandidatures(token) {
    //     try {
    //     let response = await axios.get(
    //         `${apiUrl}/candidatures`,
    //         authHeaders(token)
    //     );
    //     return response.data;
    //     } catch (error) {
    //     throw new Error("Error al obtener candidatos: " + error.message);
    //     }
    // },
    // async getcandidate(token, id) {
    //     return axios.get(`${apiUrl}/users/${id}`, authHeaders(token));
    // },
    // async getvotes(token) {
    //     return axios.get(`${apiUrl}/votes`, authHeaders(token));
    // },
    // async getMain(token) {
    //     return axios.get(`${apiUrl}/main`, authHeaders(token));
    // },