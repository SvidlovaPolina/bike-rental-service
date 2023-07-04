import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Logo from '../../assets/logo.png'
import css from './Header.module.css'
// import axios from 'axios'

const Header = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);
	const {status, error} = useSelector(state => state.auth)
	console.log(status)

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
				{error && <span></span>}
				{status === 'resolved' && <span className={css.exit}>Выйти</span>}
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
				{/* <p className={css.sprint}>Выйти</p> */}
            	</div>
            	}
			</header>
		</>
	)
}
// const Header = () => {
// 	const [auth, setAuth] = useState('');

// 	useEffect(() => {
// 		let token = window.localStorage.getItem('token')
		
// 		if (token !== 'undefined') {

// 			let config = {
// 				method: 'get',
// 			  	maxBodyLength: Infinity,
// 				url: 'https://sf-final-project-be.herokuapp.com/api/auth/',
// 				headers: { 
// 					"authorization": `Bearer ${token}`
// 				},
// 			}

// 			axios(config)
// 			  .then(function (response) {
// 				if (response.data.status === "OK") 
// 					{
// 						setAuth('+')
// 					}
// 		  		})
// 		  	.catch(function (error) {
// 			  console.log(error);
// 			  setAuth('-')
// 		  	});
// 		} else {
// 			setAuth('-')
// 		}
// 	}, [setAuth])

// 	if (auth === '-') {
// 		return (
// 			<header className={css.header}>
// 				<div className={css.bikee}>
// 				<img className={css.logo} src={Logo} alt='' />
// 					<h1 className={css.title}>Bikee</h1>
// 				</div>
// 				<nav className={css.navigation}>
// 					<Link to="/">Главная</Link>
// 					<Link to="/help">Помощь</Link>
// 					<Link to="/staff">Сотрудникам</Link>
// 				</nav>
// 				<span></span>
// 			</header>
// 		)
// 	} else if (auth === '+') {
// 		return (
// 			<header className={css.header}>
// 				<div className={css.bikee}>
// 				<img className={css.logo} src={Logo} alt='' />
// 					<h1 className={css.title}>Bikee</h1>
// 				</div>
// 				<nav className={css.navigation}>
// 					<Link to="/">Главная</Link>
// 					<Link to="/help">Помощь</Link>
// 					<Link to="/staff">Сотрудникам</Link>
// 				</nav>
// 				<span>Выйти</span>
// 			</header>
// 		)
// 	} else if (auth === '') {
// 		<header className={css.header}>
// 			<div className={css.bikee}>
// 			<img className={css.logo} src={Logo} alt='' />
// 				<h1 className={css.title}>Bikee</h1>
// 			</div>
// 				<nav className={css.navigation}>
// 					<Link to="/">Главная</Link>
// 					<Link to="/help">Помощь</Link>
// 					<Link to="/staff">Сотрудникам</Link>
// 				</nav>
// 			<span></span>
// 		</header>
// 	}
// }

export default Header