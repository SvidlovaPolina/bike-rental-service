import css from './Cases.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const Cases = () => {
  const [ thefts, setThefts ] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/cases/',
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       }
    };
    
    axios(config)
    .then(function (response) {
      setThefts(response.data.data)
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [thefts.data])

  const DeleteTheft = (id) => {
    console.log(id)
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + id,
      headers: { 
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
      },
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
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
                    <button className={clsx(css.button, css.delete)} onClick={(e) => {DeleteTheft(data._id)}}>Удалить</button>
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
