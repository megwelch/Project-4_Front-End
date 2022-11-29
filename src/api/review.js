import apiUrl from '../apiConfig'
import axios from 'axios'

export const reviewCreate = (data, user, showId) => {
	return axios({
		method: 'POST',
		url: apiUrl + `/reviews/${showId}`,
		data: {
			review: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const reviewIndex = (showId) => {
	return axios({
		method: 'GET',
		url: apiUrl + `/reviews/${showId}`
	})
}

export const reviewUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/reviews/' + id,
		data: {
			review: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const reviewDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/reviews/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}