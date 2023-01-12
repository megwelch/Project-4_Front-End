import React, { Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link className='nav-link' to='/favorites' style={linkStyle}>
				Favorites
			</Link>
		</Nav.Item>
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
	<Navbar style={{padding: '0px'}} className='navigation-bar nav-bar' expand='lg'>  
	<Container>   
	  <Navbar.Brand>
		<Link to='/' className='bingeworthy d-flex align-items-center' style={linkStyle}>
			<div className='mb-2 site-name'>Bingeworthy</div> <i class="fa-solid fa-tv"></i>
    	</Link>
	  </Navbar.Brand>
	  <Navbar.Toggle className='ms-auto nav-toggler' aria-controls='basic-navbar-nav' />  
	  <Navbar.Collapse className='collapse' id='basic-navbar-nav'>  
	  	<Nav className='ms-auto d-flex align-items-center nav-link'>
			{alwaysOptions}
			{user ? authenticatedOptions : unauthenticatedOptions}
		</Nav>
	  </Navbar.Collapse>  
	</Container>  
  </Navbar> 
)

export default Header