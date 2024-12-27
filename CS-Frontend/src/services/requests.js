import axiosInstance from "../utils/axios";



class Requests {

    constructor() {
    }

    async getRequest(url, role) {

        let token = '';
        if (role === 'admin') {
            token = localStorage.getItem('adminToken');
        }
        let headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axiosInstance.get(url, headers);
            return response.data;
        } catch (error) {
            console.log("Error in get request", error.message)
            return error;
        }
    }

    async postRequest(url, data, role, isMedia = false) {
        let token = '';
        if (role === 'admin') {
            token = localStorage.getItem('adminToken');
        }
        let headers = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': isMedia ? 'multipart/form-data' : 'application/json',

            }
        }
        try {
            const response = await axiosInstance.post(url, data, headers);
            return response.data;
        } catch (error) {
            console.log("Error in post request", error.message)
            return error;
        }
    }

    async putRequest(url, data) {
        try {
            const response = await axiosInstance.put(url, data);
            return response.data;
        } catch (error) {
            console.log("Error in put request", error.message)
            return error;
        }
    }

    async deleteRequest(url, role) {
        let token = '';
        if (role === 'admin') {
            token = localStorage.getItem('adminToken');
        }
        let headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axiosInstance.delete(url, headers);
            return response.data;
        } catch (error) {
            console.log("Error in delete request", error.message)
            return error;
        }
    }


    async loginRequest(url, data) {
        try {
            const response = await axiosInstance.post(url, data);
            // store data in local storage
            return response.data;

        } catch (error) {
            console.log("Error in login", error.message)
            return error;
        }
    }

    async registerRequest(url, data) {
        try {
            const response = await axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.log("Error in register", error.message)
            return error;
        }
    }
}

const requests = new Requests();

export const {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
    loginRequest,
    registerRequest
} = requests;