import React from 'react'
import image from '../assets/fondo.png'
import image2 from '../assets/fondo2.png'
import './css/header.css'

const Header = () => {
	return (
		<div>
			<header className='header_img'>
				<img className='img' src={image} alt='imge' />
			</header>
		</div>
	)
}

export default Header
