import { Link } from 'react-router-dom'
import axios from 'axios'
import priority_high from '../../../assets/priority_high.svg'
import css from './StaffPage.module.css'

function StaffPage() {
	let auth = false

	let token = window.localStorage.getItem('token')
	console.log(token)
	
	if (token !== 'undefined') {
		// console.log(token)
		let config = {
			method: 'get',
		  	maxBodyLength: Infinity,
			url: 'https://sf-final-project-be.herokuapp.com/api/auth/',
			headers: { 
				"authorization": `Bearer ${token}`
			},
		};

		axios(config)
		  .then(function (response) {
			console.log(response.data.status)
			if (response.data.status === "OK") 
			{
				auth = true
			}
	  		})
	  	.catch(function (error) {
		  console.log(error);
	  	});
		console.log(auth)
	}


	return (
		<>
			{auth ? 
			(<div className={css.container}>
				<div className={css.information}>
					<img src={priority_high} alt='Exclamation point' />
					<h2 className={css.titleInformation}>Важная информация</h2>
				</div>
				<div className={css.text}>
					<p className={css.textInformation}>В связи с участившимися случаями кражи имущества (велосипедов) компании, было принято решение вести учет этих случаев, а так же назначить для каждого случая ответственного сотрудника, который будет уточнять у арендатора детали происшествия, консультировать по дальнейшим действиям и отслеживать прогресс.</p>
					<p className={css.textInformation}>Чтобы увидеть полный список всех случаев краж, нажмите <Link to="/cases">сюда</Link> <br /> Список ответственных сотрудников находится <Link to="/employees">тут</Link></p>
				</div>
			</div>) : 
			(<div className={css.container}>
				<p className={css.forStaffText}>Эта страница доступна только авторизованным сотрудникам сервиса Bikee.<br />Пожалуйста, <Link to="/authorization">войдите</Link> или <Link to="/registration">зарегистрируйтесь</Link>.</p>
				<Link to="/staff-auth">Авторизованным сотрудникам</Link>
			</div>)
			}
		</>
	)
}

export default StaffPage