import React from 'react'
import { Link } from 'react-router-dom'
import priority_high from '../../../assets/priority_high.svg'
import css from './StaffAuth.module.css'

const StaffAuth = () => {
  return (
    <>
        <div className={css.container}>
            <div className={css.information}>
                <img src={priority_high} alt='Exclamation point' />
                <h2 className={css.titleInformation}>Важная информация</h2>
            </div>
            <div className={css.text}>
                <p className={css.textInformation}>В связи с участившимися случаями кражи имущества (велосипедов) компании, было принято решение вести учет этих случаев, а так же назначить для каждого случая ответственного сотрудника, который будет уточнять у арендатора детали происшествия, консультировать по дальнейшим действиям и отслеживать прогресс.</p>
                <p className={css.textInformation}>Чтобы увидеть полный список всех случаев краж, нажмите <Link to="/cases">сюда</Link> <br /> Список ответственных сотрудников находится <Link to="/employees">тут</Link></p>
            </div>
        </div>
    </>
  )
}

export default StaffAuth

