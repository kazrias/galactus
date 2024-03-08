import './Categories.css'
import { CtBtn } from './CtBtn/CtBtn'
import { changeCategory } from '../../store/slices/appSlice'
import { useDispatch } from 'react-redux'
const btns = [
  {
    'id': 1,
    'type': 'Clothes',
  },
  {
    'id': 2,
    'type': 'Shoes',
  },
  {
    'id': 3,
    'type': 'Furniture',
  },
  {
    'id': 4,
    'type': 'Beauty',
  },
]
export const Categories = ({ }) => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <div className="categories-btns">
        {
          btns.map(({ id, type }) => (
            <CtBtn key={id} type={type} onClick={() => dispatch(changeCategory({ category: type }))} />
          ))
        }
      </div>
    </div>
  )
}