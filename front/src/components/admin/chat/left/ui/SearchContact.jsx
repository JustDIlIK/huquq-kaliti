import React, {useState} from 'react';

const SearchContact = () => {
    const [search, setSearch] = useState('');

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <label htmlFor="search-input" className={'relative p-4'}>
            <svg className={'absolute top-7 left-8'} width="18" height="18" viewBox="0 0 18 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.5 16.5L11.5001 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11168 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11168 4.11168 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11168 13.1667 7.33333Z"
                    stroke={`${search.length ? '#005FFF': '#747881'}`} strokeWidth="1.66667" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
            <input
                id={'search-input'}
                type="text"
                placeholder={'Поиск'}
                value={search}
                onChange={handleChange}
                className={'border rounded-full py-2.5 pr-6 pl-12 w-full focus:outline-0'}/>
        </label>
    );
};

export default SearchContact;