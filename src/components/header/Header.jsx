import { Routes, Route, Link } from 'react-router-dom'
import PageLayout from '../page-layout/PageLayout'
import HelpPage from '../help/Helppage'
import StaffPage from '../for-staff/StaffPage'
import Logo from '../../assets/logo.svg'
import css from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className={css.header}>
				<div className={css.bikee}>
					<img className={css.logo} src={Logo} alt='' />
					<h1 className={css.title}>Bike Rental Service</h1>
				</div>
				<nav className={css.navigation}>
					<Link to="/">Главная</Link>
					<Link to="/help">Помощь</Link>
					<Link to="/staff">Сотрудникам</Link>
				</nav>
				<p className={css.sprint}>Profile</p>
			</header>
			<Routes>
				<Route path="/" element={<PageLayout />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/staff" element={<StaffPage />} />
			</Routes>
		</>
	)
}

export default Header