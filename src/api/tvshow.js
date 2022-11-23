import React from "react"
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