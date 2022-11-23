// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
// import TvShow from './components/shows/TvShow'

import Button from 'react-bootstrap/Button'
import TvShow from './components/shows/TvShow'

const App = () => {
	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	console.log('user in app', user)
  	console.log('message alerts', msgAlerts)

  	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
  	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      		)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				{/* AllShows in Homepage */}
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
            		path='/sign-out'
            		element={
						<RequireAuth user={user}>
						<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
            		}
          		/>
          		<Route
            		path='/sign-out'
            		element={
						<RequireAuth user={user}>
						<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
            		}
          		/>
          		<Route
					path='/change-password'
					element={
              		<RequireAuth user={user}>
                	<ChangePassword msgAlert={msgAlert} user={user} />
              		</RequireAuth>}
          		/>
				{/* this is where my new route for single show is going to be */}
				<Route
					path='/tvshow/:id'
					element={
              		<RequireAuth user={user}>
                	<TvShow msgAlert={msgAlert} user={user} />
              		</RequireAuth>}
          		/>
				{/* <Route
					path='/favorites'
					element={
              		<RequireAuth user={user}>
                	<FavoriteTvShow msgAlert={msgAlert} user={user} />
              		</RequireAuth>}
          		/> */}
				</Routes>
					{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
		</Fragment>
	)
}

export default App
