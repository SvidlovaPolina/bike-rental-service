import css from './Cases.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosCases } from '../../../store/caseSlice'
import { deleteCase } from '../../../store/caseSlice'

const Cases = () => {

  const dispatch = useDispatch()
  const thefts = useSelector(state => state.cases.cases)
  const {status, error} = useSelector(state => state.cases)

  useEffect(() => {
    dispatch(axiosCases())
  }, [dispatch])
  
  return (
    <>
      <Link to="/staff" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

        <table>
          <thead>
            <tr>
              <th>Лицензионный номер</th>
              <th>Тип</th>
              <th>Цвет</th>
              <th>Идентификатор кражи</th>
              <th>Описание</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {thefts.map((data) => 
                <tr key={data._id}>
                  <td>{data.licenseNumber}</td>
                  <td>{data.type}</td>
                  <td>{data.color}</td>
                  <td>{data._id}</td>
                  <td>{data.description}</td>
                  <td>
                  <Link to={`/cases/:${data._id}`} key={data._id}>
                    <button className={clsx(css.button, css.additional)}>Дополнительно</button>
                  </Link>
                    <button className={clsx(css.button, css.delete)} onClick={() => dispatch(deleteCase(data._id))}>Удалить</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cases
