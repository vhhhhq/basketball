import React from 'react'
import './Header.css'

import logo from '../../assets/image/Logo.svg'
import Search from '../../assets/image/Search.svg'
import Favorite from '../../assets/image/Favorite.svg'
import Cart from '../../assets/image/Cart.svg'

const Header = () => {
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='header-logo'>
					<img src={logo} alt=''/>
				</div>
				<div className='header-menu-block'>
					<a className='txt-header' href=''>Man</a>
					<a className='txt-header' href=''>Woman</a>
					<a className='txt-header' href=''>Jersey</a>
					<a className='txt-header' href=''>Teams</a>
					<a className='txt-header' href=''>App</a>
				</div>
				<div className='header-items-block'>
					<a href="">
						<img src={Search} alt='search icon' className='header-items' />
					</a>
					<a href="">
						<img src={Favorite} alt='favorite icon' className='header-items' />
					</a>
					<a href="">
						<img src={Cart} alt='cart icon' className='header-items' />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header