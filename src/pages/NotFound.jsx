import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    
    // 進入NotFound 過一秒後導向 Home頁面
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },1000)
    }, [])
  return (
    <h1>404 Not Found</h1>
  )
}

export default NotFound