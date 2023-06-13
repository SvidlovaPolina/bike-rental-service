import css from './Helppage.module.css'

function HelpPage() {
	return (
		<>
			<div className={css.container}>
				<h2 className={css.title}>Часто задаваемые вопросы</h2>
				<div className={css.question}>
					<p className={css.questionText}>Как арендовать велосипед?</p>
				</div>
				<div className={css.answer}>
					<p className={css.answerText}>Отсканируйте QR код на замке или руле велосипеда. Если не получилось отсканировать, введите номер велосипеда вручную (без тире).<br />
					После открытия замка, проверьте исправность велосипеда, замка, работы тормозов. Если что-то из этого неисправно, завершите аренду этого велосипеда и арендуйте другой.</p>
				</div>
				<div className={css.question}>
					<p className={css.questionText}>Как завершить аренду?</p>
				</div>
				<div className={css.answer}>
					<p className={css.answerText}>Завершите аренду на парковке. Парковка выделена знаком "P". Переведите замок велосипеда на заднем колесе в закрытое положение и удерживайте кнопку "Завершить аренду" в приложении на смартфоне.</p>
				</div>
				<div className={css.question}>
					<p className={css.questionText}>Велосипед украли! Что делать?</p>
				</div>
				<div className={css.answer}>
					<p className={css.answerText}>Нажмите на кнопку ниже, чтобы сообщить о краже в службу поддержки. Для заполнения формы необходимы ваши ФИО и детали поездки.</p>
				</div>
				<div className={css.buttonReportBlock}>
					<button className={css.buttonReport}>Сообщить о краже</button>
				</div>
				<div className={css.question}>
					<p className={css.questionText}>Как связаться со службой поддержки?</p>
				</div>
				<div className={css.answer}>
					<p className={css.answerText}>Связаться со службой технической поддержки можно в приложении, раздел "Помощь", а так же написать письмо на электронную почту support@bikee.ru. Уточните Ваш запрос и укажите номер транспортного средства и номер телефона учетной записи.</p>
				</div>
			</div>
		</>
	)
}

export default HelpPage