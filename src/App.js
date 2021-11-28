import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Container from './components/Container';

import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const click = useSelector(state => state.click);

    return (
        <Container>
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: 'click' });
                }}
            >
                {click}
            </button>

            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    );
}

export default App;
