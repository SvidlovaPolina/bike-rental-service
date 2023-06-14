import css from './Forms.module.css'

const FormAuthorization = () => {
	return (
        <div className={css.form}>
            <form className={css.formAuthorization}>
                <p className={css.formName}>Авторизация</p>

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

				<button className={css.submit} type='submit'>Войти</button>
			</form>
		</div>
    )
}

export default FormAuthorization