import { useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
            <div style={{margin: 'auto'}} className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5 text-center'>
                    <h2>Are you sure you want to sign out?</h2>
        
                        <Button className='m-2 sign-out-btn' onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button className='m-2 sign-out-btn' onClick={onCancel}>
                            Cancel
                        </Button>
                </div>
            </div>
		</>
	)
}

export default SignOut
