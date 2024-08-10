import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectAuthError, selectAuthLoader } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import css from './LoginForm.module.css'

export default function LoginForm() {

    const loader = useSelector(selectAuthLoader);
    const error = useSelector(selectAuthError);

    const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(login(values))
        action.resetForm();
    }
    
    return <div>
    <Formik
        initialValues={{
            email: '',
            password:'',
        }}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
            <div className={css.container}>
                <label className={css.label}>Email</label>
                <Field className={css.input} type='email' name='email' />
            </div>
            <div className={css.container}>
                <label className={css.label}>Password</label>
                <Field className={css.input} type='password' name='password' />
            </div>
            <button className={css.btn} type="submit">Log In</button>
        </Form>
        </Formik>
        {loader && <Loader />}
        {error && <Error />}
        </div>
}