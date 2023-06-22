import { Link } from 'react-router-dom'
import css from './StaffPage.module.css'

function StaffPage() {
	return (
		<>
			<div className={css.container}>
				<p className={css.forStaffText}>Эта страница доступна только авторизованным сотрудникам сервиса Bikee.<br />Пожалуйста, <Link to="/authorization">войдите</Link> или <Link to="/registration">зарегистрируйтесь</Link>.</p>
				<Link to="/staff-auth">Авторизованным сотрудникам</Link>
			</div>
		</>
	)
}

export default StaffPage