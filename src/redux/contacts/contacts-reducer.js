import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const items = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (_, { payload }) =>
        payload.contacts,
    [contactsActions.addContactSuccess]: (state, { payload }) => [
        ...state,
        payload.contact,
    ],
    [contactsActions.deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload.id),
});

const loading = createReducer(false, {
    [contactsActions.fetchContactsRequest]: () => true,
    [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsError]: () => false,
    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,
    [contactsActions.deleteContactRequest]: () => true,
    [contactsActions.deleteContactSuccess]: () => false,
    [contactsActions.deleteContactError]: () => false,
});

const error = createReducer(null, {
    [contactsActions.fetchContactsError]: (_, { error }) => error,
    [contactsActions.addContactError]: (_, { error }) => error,
    [contactsActions.deleteContactError]: (_, { error }) => error,
});

const filter = createReducer('', {
    [contactsActions.filterChange]: (_, { payload }) => payload.filter,
});

const contactsReducer = combineReducers({
    items,
    loading,
    error,
    filter,
});

export { contactsReducer };
