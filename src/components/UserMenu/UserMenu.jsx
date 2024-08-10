import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from './UserMenu.module.css'

export default function UserMenu() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUser);

    return <div className={css.box}>
                <p className={css.text}>Welcome, {userName.name}</p>
                    <button
                        onClick={() => {
                            dispatch(logout())
                        }}
                        className={css.btn}
                        type="button">Log out</button>
            </div>
}