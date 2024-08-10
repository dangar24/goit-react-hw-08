import { Link } from "react-router-dom";
import css from './AuthNav.module.css'

export default function AuthNav() {
    return <div className={css.box}>
                <Link className={css.link} to='/register'>Registrer</Link>
                <Link className={css.link} to='/login'>Log In</Link>
            </div>
}