import axiosInst from "@/service/axios.instance.js";

export default class HttpClient {
    async get(url, options = {}) {
        try {
            return await axiosInst(url, {method: 'GET', ...options});
        } catch (error) {
            console.error(`Ошибка GET ${url}:`, error);
            // throw error;
        }
    }

    async post(url, body, options = {}) {
        try {
            return await axiosInst(url, {
                method: 'POST',
                body,
                ...options,
            });
        } catch (error) {
            console.error(`Ошибка POST ${url}:`, error);
        }
    }

    async put(url, body, options = {}) {
        try {
            return await axiosInst(url, {
                method: 'PUT',
                body,
                ...options,
            });
        } catch (error) {
            console.error(`Ошибка PUT ${url}:`, error);
        }
    }

    async delete(url, options = {}) {
        try {
            return await axiosInst(url, {
                method: 'DELETE',
                ...options,
            });
        } catch (error) {
            console.error(`Ошибка DELETE ${url}:`, error);
        }
    }
}
