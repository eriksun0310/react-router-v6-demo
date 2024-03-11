import React from 'react'
import Home from './Home'
import { Link, NavLink } from 'react-router-dom'

/*
Link vs NavLink 的差別
Link: replace 不要記住上一頁、state: 可以使用  const location  = useLocation() 取值
NavLink: isActive的props: className={({isActive}) => isActive ? "active":""}
*/
const Header = () => {

  return (
    <nav>
        <Link to='/' replace>Home</Link> | 
        <Link to='/products' replace  state={{name:'yu yu'}}>Products</Link>
    </nav>
  )
}

export default Header