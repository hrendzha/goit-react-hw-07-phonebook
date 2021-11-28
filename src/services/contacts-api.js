import axios from 'axios';

axios.defaults.baseURL = 'https://61a356fcd5e8330017291f97.mockapi.io';

function fetchContacts() {
    return axios.get('/contacts').then(res => res.data);
}

function addContact(data) {
    return axios.post('/contacts', data).then(res => res.data);
}

function deleteContact(id) {
    return axios.delete(`/contacts/${id}`).then(res => res.data);
}

export default { fetchContacts, addContact, deleteContact };
