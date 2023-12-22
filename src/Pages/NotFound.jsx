import { Link } from "react-router-dom"
export const NotFound = () => {
  return (
    <div className="container" style={{ position: "absolute", inset: '0' }}>
      <div style={{ position: 'relative', height: '100%', textAlign: 'center', fontFamily: 'MBF Inno', color: '#fff', letterSpacing: '15px', fontSize: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2 >Oops, looks like you're lost in space!</h2>
        <p style={{ fontSize: '180px' }}>404</p>
        <p style={{textDecoration:'underline'}}><Link to='/'>Go home!</Link></p>
      </div>
    </div>
  )
}