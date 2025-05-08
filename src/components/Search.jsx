import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {

    return (
        <div className='search'>
            <div>
                <img src="Search.svg" alt="Search" />
                <input
                    type="text"
                    placeholder='Search for a Movie...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>
    );
};



export default Search;