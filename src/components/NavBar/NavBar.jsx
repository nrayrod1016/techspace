import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<li>
								Welcome, {user.name}
							</li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</li>
							<li>
								<Link to="/addBlog">New Blog</Link>
							</li>
							<li>
								<Link to='/blogs'>Blog List</Link>
							</li>
							<li>
								<Link to='/weather'>Weather</Link>
							</li>
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
