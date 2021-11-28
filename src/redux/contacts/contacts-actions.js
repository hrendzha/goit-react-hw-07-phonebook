import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('contacts/changeFilter', filter => ({
    payload: { filter },
}));

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction(
    'contacts/fetchContactsSuccess',
    contacts => ({
        payload: { contacts },
    }),
);
const fetchContactsError = createAction(
    'contacts/fetchContactsError',
    error => ({
        error,
    }),
);

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction(
    'contacts/addContactSuccess',
    contact => ({
        payload: { contact },
    }),
);
const addContactError = createAction('contacts/addContactError', error => ({
    error,
}));

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction(
    'contacts/deleteContactSuccess',
    id => ({
        payload: { id },
    }),
);
const deleteContactError = createAction(
    'contacts/deleteContactError',
    error => ({
        error,
    }),
);

export default {
    filterChange,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
};
