import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
import contactsOperations from './contacts-operations';

const { fetchContacts, addContact, deleteContact } = contactsOperations;

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload.contacts,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload.contact],
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload.id),
});

const loading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { error }) => error,
    [fetchContacts.pending]: () => null,

    [addContact.rejected]: (_, { error }) => error,
    [addContact.pending]: () => null,

    [deleteContact.rejected]: (_, { error }) => error,
    [deleteContact.pending]: () => null,
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
