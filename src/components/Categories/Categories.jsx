import './Categories.css'
import { CtBtn } from './CtBtn/CtBtn'
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
export const Categories = ({ currCategory, setCurrCategory }) => (
  <div className="categories">
    <div className="categories-btns">
      {
        btns.map(({ id, type }) => (
          <CtBtn key={id} type={type} currCategory={currCategory} setCurrCategory={setCurrCategory} />
        ))
      }
    </div>
  </div>
)