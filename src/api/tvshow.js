import axios from "axios"
import apiUrl from "../apiConfig"

export const favoriteTvShow = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/favorites',
		data: {
			tvShow: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const favoritesIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + `/favorites`,
        headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const favoritesDelete = (user, showId) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + `/favorites/${showId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        }
	})
}