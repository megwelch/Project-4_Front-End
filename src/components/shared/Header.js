import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link className='nav-link' to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link className='nav-link' to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link className='nav-link' to='/favorites' style={linkStyle}>
				Favorites
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link className='nav-link' to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link  className='nav-link' to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar variant='dark' className='nav-bar p-0'>
		<Navbar style={{padding: '0px'}}>
            <Link to='/' className='bingeworthy d-flex align-items-center' style={linkStyle}>
                <div className='mb-2'>Bingeworthy</div> <i class="fa-solid fa-tv"></i>
            </Link>
        </Navbar>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ms-auto d-flex align-items-center nav-link'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header