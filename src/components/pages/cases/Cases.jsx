import css from './Cases.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeCase, addCase } from '../../../store/caseSlice'
import { useEffect } from 'react'
import clsx from 'clsx'

const Cases = () => {

  const dispatch = useDispatch();

  const cases = useSelector(state => state.cases.cases)
  console.log(cases)

  useEffect(() => {
    dispatch(addCase())
  }, [cases])
  
  const DeleteCase = (id) => {
    let result = dispatch(removeCase({ id }))
		console.log(result)
  }

  return (
    <>
      <Link to="/staff" className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
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
          {cases.map((data) => 
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
                    <button className={clsx(css.button, css.delete)} onClick={(e) => {DeleteCase(data._id)}}>Удалить</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
        <Link to="/case">Детальная страница кражи</Link>
      </div>
    </>
  )
}

export default Cases
