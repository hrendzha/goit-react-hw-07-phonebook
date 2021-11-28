import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts-reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        click: (state = 0, { type }) => {
            switch (type) {
                case 'click':
                    return state + 1;

                default:
                    return state;
            }
        },
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export { store };
