import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('contacts/changeFilter', filter => ({
    payload: { filter },
}));

export default {
    filterChange,
};
