import Logo from '../../assets/logo.png'
import css from './Footer.module.css'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<img className={css.logo} src={Logo} alt='' />
			<h1 className={css.title}>Bikee</h1>
			<div className={css.copy}>
				<p>г. Санкт-Петербург, ул. Фрилансеров, 5а<br />
				+7 922 122 21 11<br />
				bikee@rent.ru<br /><br />
				Copyright. 2023</p>
			</div>
		</footer>
	)
}

export default Footer