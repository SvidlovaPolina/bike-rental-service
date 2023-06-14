import css from './Forms.module.css'

const FormRegistration = () => {
	return (
        <div className={css.form}>
            <form className={css.formRegistration}>
                <p className={css.formName}>Регистрация</p>

                <p className={css.inputText}>E-mail* <input 
				className={css.input}
				type="email" 
				name="email" 
				placeholder="E-mail">
				</input></p>
						
				<p className={css.inputText}>Пароль* <input 
				className={css.input}
				type="password" 
				name="password" 
				placeholder="Введите пароль">
				</input></p>

				<p className={css.inputText}>Имя <input 
				className={css.input}
				type="text" 
				name="name" 
				placeholder="">
				</input></p>

				<p className={css.inputText}>Фамилия <input 
				className={css.input}
				type="text" 
				name="lastname" 
				placeholder="">
				</input></p>

				<p className={css.inputText}>Client ID* <input 
				className={css.input}
				type="text" 
				name="clientid" 
				placeholder="">
				</input></p>

				<button className={css.submit} type='submit'>Зарегистрироваться</button>
			</form>
		</div>
    )
}

export default FormRegistration