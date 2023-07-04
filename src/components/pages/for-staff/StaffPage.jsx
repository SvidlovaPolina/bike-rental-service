import { Link } from 'react-router-dom'
import priority_high from '../../../assets/priority_high.svg'
import css from './StaffPage.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { axiosToken } from '../../../store/tokenSlice'

function StaffPage() {

	const dispatch = useDispatch();
	const {status, error} = useSelector(state => state.token)
	// console.log(status)

	useEffect(() => {
		dispatch(axiosToken())
	}, [dispatch])

	return (
		<div className={css.container}>
			{status === 'loading' && <h3>Loading...</h3>}
			{status === 'resolved' && 
			<>
				<div className={css.information}>
					<img src={priority_high} alt='Exclamation point' />
					<h2 className={css.titleInformation}>Важная информация</h2>
				</div>
				<div className={css.text}>
					<p className={css.textInformation}>В связи с участившимися случаями кражи имущества (велосипедов) компании, было принято решение вести учет этих случаев, а так же назначить для каждого случая ответственного сотрудника, который будет уточнять у арендатора детали происшествия, консультировать по дальнейшим действиям и отслеживать прогресс.</p>
					<p className={css.textInformation}>Чтобы увидеть полный список всех случаев краж, нажмите <Link to="/cases">сюда</Link> <br /> Список ответственных сотрудников находится <Link to="/employees">тут</Link></p>
				</div>
			</>}
			{error && <p className={css.forStaffText}>Эта страница доступна только авторизованным сотрудникам сервиса Bikee.<br />Пожалуйста, <Link to="/authorization">войдите</Link> или <Link to="/registration">зарегистрируйтесь</Link>.</p>}
		</div>
	)
}

export default StaffPage