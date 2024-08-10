import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loader'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
    
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

    return <div>
        <ContactForm/>
    <SearchBox />
    {loading && <Loader />}
    {error && <Error />}
    <ContactList/>
    </div>
}