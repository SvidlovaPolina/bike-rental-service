import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import css from './Header.module.css'

const Header = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	return (
		<>
			<header className={css.header}>
				<div className={css.bikee}>
					<img className={css.logo} src={Logo} alt='' />
					<h1 className={css.title}>Bikee</h1>
				</div>
				<nav className={css.navigation}>
					<Link to="/">Главная</Link>
					<Link to="/help">Помощь</Link>
					<Link to="/staff">Сотрудникам</Link>
				</nav>
				<span></span>
				<div className={css.burgerIcon} onClick={() => setIsMenuShown(!isMenuShown)}>
                <span></span>
                <span></span>
                <span></span>
            	</div>

				{isMenuShown && <div className={css.menu}>
                <div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/">Главная</Link></div>
                <div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/help">Помощь</Link></div>
				<div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/staff">Сотрудникам</Link></div>
				<p className={css.sprint}>Выйти</p>
            	</div>
            	}
			</header>
		</>
	)
}

export default Header