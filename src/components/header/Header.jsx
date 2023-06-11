import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import css from './Header.module.css'

const Header = () => {
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
				<p className={css.sprint}>Profile</p>
			</header>
		</>
	)
}

export default Header