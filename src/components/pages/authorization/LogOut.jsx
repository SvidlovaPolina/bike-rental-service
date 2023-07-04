import { LogOut } from '../../../store/tokenSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

const Out = () => {

const dispatch = useDispatch();
const navigate = useNavigate()

useEffect(() => {
    dispatch(LogOut())
    navigate("/staff");
}, [dispatch, navigate])

  return (
    <div></div>
  )
}

export default Out
