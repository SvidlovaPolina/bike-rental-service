import { useState } from 'react'
import css from './Forms.module.css'

const FormReport = () => {

	const [values, setValues] = useState({
		licenseNumber: '',
		ownerFullName: '',
		type: '',
		clientId: '',
		color: '',
		date: '',
		description: '',
		// officer: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.licenseNumber && values.ownerFullName && values.clientId && values.type) {
			Report()
		}
	}

	const Report = () => {
		let axios = require('axios');

		let config = {
		  method: 'post',
		  maxBodyLength: Infinity,
		  url: 'https://sf-final-project-be.herokuapp.com/api/public/report',
		  headers: { },
		  data : {
			"licenseNumber": values.licenseNumber,
			"ownerFullName": values.ownerFullName,
			"type": values.type,
			"clientId": values.clientId,
			"color": values.color,
			"date": values.date,
			"description": values.description
		  }
		};
		
		axios(config)
		.then(function (response) {
		  console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
		  console.log(error);
		});
	}

	// 1ce988f9-a327-4c5e-b749-4ba64ca7ea9b

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit} className={css.formReport}>
                <p className={css.formName}>Сообщить о краже</p>

                <p className={css.inputText}>Номер лицензии* <input 
				className={css.input}
				type='text'
				name='licenseNumber'
				placeholder='12 символов'
				onChange={handleChange}
				value={values.licenseNumber}>
				</input></p>
						
				<p className={css.inputText}>ФИО* <input 
				className={css.input}
				type='text'
				name='ownerFullName'
				placeholder=''
				onChange={handleChange}
				value={values.ownerFullName}>
				</input></p>

				<p className={css.inputText}>Client ID* <input 
				className={css.input}
				type='text'
				name='clientId'
				placeholder=''
				onChange={handleChange}
				value={values.clientId}>
				</input></p>

				<p className={css.inputText}>Тип велосипеда <select 
                className={css.select} 
				name='type'
				defaultValue='general'
				onChange={handleChange}>
                    <option value='general'>general</option>
                    <option value='sport'>sport</option>
                </select></p>

				<p className={css.inputText}>Цвет велосипеда <input 
				className={css.input}
				type='text'
				name='color'
				placeholder=''
				onChange={handleChange}
				value={values.color}>
				</input></p>

				<p className={css.inputText}>Дата кражи <input 
				className={css.input}
				type='date'
				name='date'
				placeholder=''
				onChange={handleChange}
				value={values.date}>
				</input></p>

                <p className={css.inputText}>Дополнительная информация <textarea 
				className={css.input}
				type='text'
				name='description'
				placeholder=''
				onChange={handleChange}
				value={values.description}>
				</textarea></p>

				<button className={css.submit} type='submit'>Отправить</button>
			</form>
		</div>
    )
}

export default FormReport