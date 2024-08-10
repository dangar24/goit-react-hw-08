import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filters/slice'
import { selectNameFilter } from '../../redux/filters/selectors'

export default function SearchBox() {
    
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter)

    return <div className={css.container}>
        <p className={css.text}>Find contacts by name</p>
        <input
            type="text" 
            className={css.input}
            value={filterValue}
            onChange={(event) => {
                dispatch(changeFilter(event.target.value));
            }}/>
    </div>
}