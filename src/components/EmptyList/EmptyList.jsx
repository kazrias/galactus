import './EmptyList.css'
import { Link } from 'react-router-dom'
import Alien2 from '../../images/Default_Imagine_an_alien_diplomat_from_a_distant_galaxy_visiti_0_e952779e-75db-41aa-b536-0e6a113e6166_0.png'
export const EmptyList = ({ type }) => {
  const text = `Your ${type} list is empty.`
  return (<>
    <div className="emptyList">
      <h3 className="emptyList-text">{text} <br /> <span className='emptyList-text--back'>
        <Link to='/'>Go back and add something!</Link>
      </span></h3>
      <img className="emptyList-img" src={Alien2} alt="" />
    </div>
  </>
  )
}