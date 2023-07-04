import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../assets/logo.png'
import css from './Header.module.css'
import { axiosToken } from '../../store/tokenSlice'

const Header = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const dispatch = useDispatch();
	const {status, error} = useSelector(state => state.token)
	// console.log(status)

	useEffect(() => {
		dispatch(axiosToken())
	}, [dispatch])

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
				{status === 'loading' && <span></span>}
				{error && <span></span>}
				{status === 'resolved' && <Link to='/logout' className={css.exit}>Выйти</Link>}

				<div className={css.burgerIcon} onClick={() => setIsMenuShown(!isMenuShown)}>
                <span></span>
                <span></span>
                <span></span>
            	</div>

				{isMenuShown && <div className={css.menu}>
                <div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/">Главная</Link></div>
                <div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/help">Помощь</Link></div>
				<div className={css.items} onClick={() => setIsMenuShown(!isMenuShown)}><Link to="/staff">Сотрудникам</Link></div>
				<div className={css.items}>{status === 'resolved' && <Link to='/logout'>Выйти</Link>}</div>
            	</div>
            	}
			</header>
		</>
	)
}

export default Header