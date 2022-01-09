import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">TechTalk</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Welcome. {user.name}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blogs">The Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addBlog ">Create</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/weather">News</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="" onClick={handleLogout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
			) : (
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">TechTalk</a>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="/login">Log In</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/signup">Sign Up</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			)}
		</>
	)
}

export default NavBar
