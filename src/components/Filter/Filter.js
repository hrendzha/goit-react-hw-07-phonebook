import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.css';

function Filter() {
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <label className={s.field}>
            <span className={s.label}>Find contacts by name</span>
            <input
                type="text"
                name="filter"
                value={filter}
                autoComplete="off"
                onChange={e =>
                    dispatch(contactsActions.filterChange(e.target.value))
                }
            />
        </label>
    );
}

export default memo(Filter);
