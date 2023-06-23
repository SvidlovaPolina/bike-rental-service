// import { useState } from 'react'
import css from './Forms.module.css'

const FormRegistration = () => {

	// const [values, setValues] = useState({
	// 	email: '',
	// 	password: '',
	// 	clientId: '',
	// 	firstName: '',
	// 	lastName: '',
	// 	// approved: ''
	// })

	// const regChange = e => {
	// 	const fieldName = e.target.name
	// 	setValues({...values, [fieldName]: e.target.value})
	// }

	// const SignUp = () => {
	// 	let axios = require('axios');

	// 	let config = {
	// 		method: 'post',
	// 		maxBodyLength: Infinity,
	// 		url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up',
	// 		headers: { },
	// 		data : {
	// 			"email": "first@mail.ru",
	// 			"password": "11111",
	// 			"firstname": "first",
	// 			"lastName": "first",
	// 			"clientid": "1ce988f9-a327-4c5e-b749-4ba64ca7ea9b"
	// 		}
	// 	};

	// 	axios(config)
	// 		.then(function (response) {
	// 		console.log(JSON.stringify(response.data));
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});
	// }

	return (
        <div className={css.form}>
            <form className={css.formRegistration}>
                <p className={css.formName}>Регистрация</p>

                <p className={css.inputText}>E-mail* <input 
				className={css.input}
				// id='auth'
				type='email'
				name='registration-email'
				placeholder='E-mail'>
				</input></p>
						
				<p className={css.inputText}>Пароль* <input 
				className={css.input}
				// id='pass'
				type='password'
				name='registration-password'
				placeholder='Введите пароль'>
				</input></p>

				<p className={css.inputText}>Имя <input 
				className={css.input}
				// id='firstname'
				type='text'
				name='firstname'
				placeholder=''>
				</input></p>

				<p className={css.inputText}>Фамилия <input 
				className={css.input}
				// id='lastname'
				type='text'
				name='lastname'
				placeholder=''>
				</input></p>

				<p className={css.inputText}>Client ID* <input 
				className={css.input}
				// id='clientid'
				type='text'
				name='clientid'
				placeholder=''>
				</input></p>

				<button className={css.submit} type='submit'>Зарегистрироваться</button>
			</form>
		</div>
    )
}

export default FormRegistration