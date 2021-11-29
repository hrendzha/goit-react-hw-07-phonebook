import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsApi from 'services/contacts-api';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const contacts = await contactsApi.fetchContacts();
    return { contacts };
});

const addContact = createAsyncThunk(
    'contacts/addContact',
    async contactData => {
        const contact = await contactsApi.addContact(contactData);
        return { contact };
    },
);

const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async contactId => {
        const { id } = await contactsApi.deleteContact(contactId);
        return { id };
    },
);

export default { fetchContacts, addContact, deleteContact };
