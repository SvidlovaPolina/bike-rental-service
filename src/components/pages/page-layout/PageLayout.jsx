import Sapiens from '../../../assets/sapiens.png'
import SapiensPhone from '../../../assets/sapiens-phone.svg'
import IconFind from '../../../assets/IconFind.svg'
import IconQR from '../../../assets/IconQR.svg'
import IconRate from '../../../assets/IconRate.svg'
import IconStart from '../../../assets/IconStart.svg'
import GooglePlay from '../../../assets/GooglePlay.png'
import AppStore from '../../../assets/AppStore.svg'
import clsx from 'clsx'
import css from './PageLayout.module.css'

const PageLayout = () => {
	return (

		<div className={css.layout}>
			<section className={css.service}>
				<div className={css.descriptionService}>
					<h1 className={css.titleService}>Сервис проката велосипедов</h1>
					<p className={css.textService}>Наша цель — сделать передвижение по городу радостным и комфортным для всех</p>
				</div>
				<img className={css.sapiens} src={Sapiens} alt='Girl on a bike' />
			</section>

			<section className={css.howToUse}>
				<h2 className={css.title}>Как пользоваться</h2>
				<div className={css.instruction}>
					<div className={css.instructionIcon}>
						<img src={IconFind} alt='Map pin icon' />
						<img src={IconQR} alt='QR-code icon' />
						<img src={IconRate} alt='Speed icon' />
						<img src={IconStart} alt='Route icon' />
					</div>
					<div className={css.instructionTitle}>
						<p>Найди велосипед</p>
						<p>Отсканируй QR</p>
						<p>Выбери тариф</p>
						<p>Можно ехать!</p>
					</div>
					<div className={css.instructionDescription}>
						<p>На карте в приложении отмечены все наши велосипеды, доступные для аренды</p>
						<p>Когда велосипед перед тобой – нажми на круглую кнопку сканирования. Отсканируй QR-код. Он будет на руле велосипеда</p>
						<p>Выбирай тариф для короткой или длинной поездки</p>
						<p>Жми “Старт” и можно ехать. Когда решишь завершить поездку – найди на карте парковку</p>
					</div>
				</div>
			</section>

			<section className={css.rates}>
				<h2 className={css.title}>Наши тарифы</h2>
				<div className={css.ratesCards}>
					<div className={clsx(css.cards, css.cardMinutes)}>
						<p>Тариф “Минуты”</p>
						<p>2 ₽/мин</p>
						<p>1 ₽/мин</p>
						<p className={css.booking}>бронирование</p>
					</div>
					<div className={clsx(css.cards, css.cardThirty)}>
						<p>Тариф “Полчаса”</p>
						<p>55 ₽/ 30 мин</p>
						<p>1 ₽/мин</p>
						<p className={css.booking}>бронирование</p>
					</div>
					<div className={clsx(css.cards, css.cardNinety)}>
						<p>Тариф “90 минут”</p>
						<p>150 ₽/ 90 мин</p>
						<p>1 ₽/мин</p>
						<p className={css.booking}>бронирование</p>
					</div>
				</div>
				<div className={css.ratesText}>
					<p>Чтобы добраться до велосипеда, мы предоставляем 10 минут бесплатного бронирования. Если во время поездки тебе нужно отлучиться, но ты не хочешь завершать аренду, то воспользуйся функцией "Пауза" и плати 1 рубль в минуту.</p>
				</div>
			</section>

			<section className={css.mobileApp}>
				<img className={css.sapiensPhone} src={SapiensPhone} alt='Guy walks with a phone in his hand' />
				<div className={css.downloadApp}>
					<h2 className={css.titleApp}>Мобильное приложение</h2>
					<p className={css.textApp}>Скачай наше приложение, <br />чтобы начать пользоваться сервисом</p>
					<div className={css.downloadButtons}>
						<img src={GooglePlay} alt='Download button from Google Play' />
						<img src={AppStore} alt='Download button from App Store' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default PageLayout