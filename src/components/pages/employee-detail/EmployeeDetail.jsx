import css from './EmployeeDetail.module.css'
import clsx from 'clsx'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import Avatar from '../../../assets/avatar.jpg'

const EmployeeDetail = () => {

  const match = useResolvedPath('')
  const staffId = match.pathname.split(':')[1]

  const [ edit, setEdit ] = useState(
    new Map()
  )

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/' + staffId,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       }
    };
    
    axios(config)
    .then(function (response) {
      let data = response.data.data
      // console.log(data)
      setEdit(new Map([
        ['firstName', data.firstName],
        ['lastName', data.lastName],
        ['email', data.email],
        ['approved', data.approved],
      ]))
    })

    .catch(function (error) {
      console.log(error);
    });
  }, [staffId])

  const onchange = (e, name) => {
    edit.set(name, e.target.innerHTML);
  }

  const Save = () => {
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://sf-final-project-be.herokuapp.com/api/officers/' + staffId,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
       },
       data: {
        'firstName': edit.get('firstName'),
        'lastName': edit.get('lastName'),
        'email': edit.get('email'),
        'approved': edit.get('approved')
       }
    };
    
    axios(config)
    .then(function (response) {
      // let data = response.data
      console.log(response)
    })

    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Link to='/employees'className={css.homeLink}>&#8592; Назад</Link>
      <div className={css.container}>
      <img className={css.avatar} src={Avatar} alt='Avatar with business cat'/>
      <div className={css.staffInformation}>
        <table>
            <thead>
              <tr>
                <th>Имя</th>
                <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'firstName')}>{edit.get('firstName')}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Фамилия</th>
                <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'lastName')}>{edit.get('lastName')}</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'email')}>{edit.get('email')}</td>
              </tr>
              <tr>
                <th>Одобрен</th>
                <td contentEditable={true} suppressContentEditableWarning={true} onInput={(e) => onchange(e, 'approved')}>{edit.get('approved')}</td>
              </tr>
            </tbody>
          </table>
      </div>
        <div className={css.editButtons}>
        <button className={clsx(css.button, css.additional)} onClick={Save}>Сохранить изменения</button>
      </div>
    </div>
    </>
  )
}

export default EmployeeDetail
