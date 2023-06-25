import { useState } from 'react'
import css from './Forms.module.css'

const FormRegistration = () => {

	const [values, setValues] = useState({
		Email: '',
		Password: '',
		ClientId: '',
		FirstName: '',
		LastName: '',
		// approved: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.Email && values.Password && values.ClientId) {
			SignUp()
		}
	}

	const SignUp = () => {
		let axios = require('axios');

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up',
			headers: { },
			data : {
				"email": values.Email,
				"password": values.Password,
				"firstName": values.FirstName,
				"lastName": values.LastName,
				"clientId": values.ClientId	
			}
		};

		// 1ce988f9-a327-4c5e-b749-4ba64ca7ea9b

		axios(config)
			.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	return (
        <div className={css.form}>
            <form onSubmit={handleSubmit} className={css.formRegistration}>
                <p className={css.formName}>Регистрация</p>

                <p className={css.inputText}>E-mail* <input 
				className={css.input}
				type='email'
				name='Email'
				placeholder='E-mail'
				value={values.Email}
				onChange={handleChange}>
				</input></p>
						
				<p className={css.inputText}>Пароль* <input 
				className={css.input}
				type='password'
				name='Password'
				placeholder='Введите пароль'
				value={values.Password}
				onChange={handleChange}>
				</input></p>

				<p className={css.inputText}>Имя <input 
				className={css.input}
				type='text'
				name='FirstName'
				placeholder=''
				value={values.FirstName}
				onChange={handleChange}>
				</input></p>

				<p className={css.inputText}>Фамилия <input 
				className={css.input}
				type='text'
				name='LastName'
				placeholder=''
				value={values.LastName}
				onChange={handleChange}>
				</input></p>

				<p className={css.inputText}>Client ID* <input 
				className={css.input}
				type='text'
				name='ClientId'
				placeholder=''
				value={values.ClientId}
				onChange={handleChange}>
				</input></p>

				<button className={css.submit} type='submit'>Зарегистрироваться</button>
			</form>
		</div>
    )
}

export default FormRegistration