import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactList.module.css';

function ContactList() {
    const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);

    const dispatch = useDispatch();

    useEffect(() => {
        const promise = dispatch(contactsOperations.fetchContacts());

        return () => {
            promise.abort();
        };
    }, [dispatch]);

    return (
        <ul>
            {visibleContacts.map(({ id, name, number }) => (
                <li className={s.listItem} key={id}>
                    <ContactListItem
                        name={name}
                        number={number}
                        onClick={() =>
                            dispatch(contactsOperations.deleteContact(id))
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

export default memo(ContactList);
