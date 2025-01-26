import router from '@/router'
import axios from 'axios'

const axiosInst = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://parq-test.agnt.ru/api/v1/app',
	headers: {
		Accept: 'application/json',
	},
})

axiosInst.interceptors.request.use(
	config => {
		const token = localStorage.getItem('access_token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		config.headers.Origin = 'http://localhost:5173/'
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axiosInst.interceptors.response.use(
	async response => {
		return response
	},
	error => {
		if (
			(error.response && error.response.status === 401) ||
			(error.response.status === 403 &&
				router.currentRoute.value.path !== '/login')
		) {
			localStorage.removeItem('access_token')
			sessionStorage.removeItem('access_token')
			router.push({ name: 'login' })
		}
		return Promise.reject(error)
	}
)

export default axiosInst
