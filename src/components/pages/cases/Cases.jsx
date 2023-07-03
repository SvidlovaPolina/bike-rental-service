import css from './Cases.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosCases } from '../../../store/caseSlice'
import clsx from 'clsx'

const Cases = () => {

  const dispatch = useDispatch()
  const thefts = useSelector(state => state.cases.cases)

  useEffect(() => {
    dispatch(axiosCases())
  }, [dispatch])

  // const DeleteTheft = (id) => {
  //   console.log(id)
  //   let config = {
  //     method: 'delete',
  //     maxBodyLength: Infinity,
  //     url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + id,
  //     headers: { 
  //       "authorization": `Bearer ${window.localStorage.getItem('token')}`
  //     },
  //   };
    
  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  
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
                    <button className={clsx(css.button, css.delete)}>Удалить</button>
                    {/* onClick={(e) => {DeleteTheft(data._id)}} */}
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
