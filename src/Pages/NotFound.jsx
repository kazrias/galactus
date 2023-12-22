import { Link } from "react-router-dom"
import './NotFound.css'
export const NotFound = () => {
  return (
    <div className="container container--notFound" style={{ position: "absolute", inset: '0' }}>
      <div style={{ position: 'relative', height: '100%', textAlign: 'center', fontFamily: 'MBF Inno', color: '#fff', letterSpacing: '15px', fontSize: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2 >Oops, looks like you're lost in space!</h2>
        <h3 style={{ fontSize: '180px' }}>404</h3>
        <p style={{ textDecoration: 'underline' }}><Link to='/'>Go home!</Link></p>
      </div>
    </div>
  )
}