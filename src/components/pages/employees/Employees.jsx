import css from './Employees.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosOfficers } from '../../../store/officerSlice'
import { deleteOfficer } from '../../../store/officerSlice'

const Employees = () => {

  const dispatch = useDispatch()
  const staff = useSelector(state => state.officers.officers)
  const {status, error} = useSelector(state => state.officers)

  useEffect(() => {
    dispatch(axiosOfficers())
  }, [dispatch])

  return (
    <>
      <Link to="/staff" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      {status === 'load' && <h4 className={css.update}>Обновите страницу, чтобы увидеть изменения</h4>}
      {error && <h4>An error occured: {error}</h4>}

        <table>
          <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th className={css.hide}>E-mail</th>
                <th className={css.hide}>Идентификатор сотрудника</th>
                <th>Одобрен</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staff.map((data) => 
                  <tr key={data._id}>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td className={css.hide}>{data.email}</td>
                      <td className={css.hide}>{data._id}</td>
                      <td>{data.approved ? 'Да' : 'Нет'}</td>
                    <td>
                      <Link to={`/employees/:${data._id}`} key={data._id}>
                        <button className={clsx(css.button, css.additional)}>Дополнительно</button>
                      </Link>
                      <button className={clsx(css.button, css.delete)} onClick={() => dispatch(deleteOfficer(data._id))}>Удалить</button>
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Employees
