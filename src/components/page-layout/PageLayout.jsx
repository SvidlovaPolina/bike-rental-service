import Sapiens from '../../assets/sapiens.png'
import Phone from '../../assets/phone.jpg'
import IconFind from '../../assets/IconFind.svg'
import IconQR from '../../assets/IconQR.svg'
import IconRate from '../../assets/IconRate.svg'
import IconStart from '../../assets/IconStart.svg'
import css from './PageLayout.module.css'

const PageLayout = () => {
	return (

		<div className={css.layout}>
			<div className={css.service}>
				<div className={css.descriptionService}>
					<h1 className={css.titleService}>Сервис проката велосипедов</h1>
					<p className={css.textService}>Наша цель — сделать передвижение по городу радостным и комфортным для всех</p>
				</div>
				<img className={css.sapiens} src={Sapiens} alt='Girl on a bike' />
			</div>

			<div className={css.howToUse}>
				<h1 className={css.title}>Как пользоваться</h1>
				<div className={css.instruction}>
					<img className={css.phone} src={Phone} alt='' />
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

			</div>
		</div>
	)
}

export default PageLayout