import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
   <header>
  <NavLink to="/" className={({isActive})=> isActive?'a':undefined} end  style={{textDecoration:'none'}}>HomePage</NavLink>
  <NavLink to="pictures" className={({isActive})=> isActive?'a':undefined} style={{textDecoration:'none'}}>Pictures</NavLink>
   </header>
  )
}

export default Navigation