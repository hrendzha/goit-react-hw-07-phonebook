import contactsActions from './contacts-actions';
import contactsApi from '../../services/contacts-api';

const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest());

    try {
        const contacts = await contactsApi.fetchContacts();
        dispatch(contactsActions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsActions.fetchContactsError(error.message));
    }
};

const addContact = contactData => async dispatch => {
    dispatch(contactsActions.addContactRequest());

    try {
        const contact = await contactsApi.addContact(contactData);
        dispatch(contactsActions.addContactSuccess(contact));
    } catch (error) {
        dispatch(contactsActions.addContactError(error.message));
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(contactsActions.deleteContactRequest());

    try {
        const { id } = await contactsApi.deleteContact(contactId);
        dispatch(contactsActions.deleteContactSuccess(id));
    } catch (error) {
        dispatch(contactsActions.deleteContactError(error.message));
    }
};

export default { fetchContacts, addContact, deleteContact };
