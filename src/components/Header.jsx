import React from 'react'
import image from '../assets/fondo.png'
import image2 from '../assets/fondo2.png'
import "./css/header.css"


const Header = () => {
	return (
		<div>
			<header>
				<img className='image' src={image} alt='' />
			</header>
		</div>
	)
}

export default Header
