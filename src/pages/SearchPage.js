import React, {useState} from 'react';
import axios from 'axios';

import RepoSearchForm from '../components/RepoSearchForm';
import Loader from '../components/Loader';
import RepoStorage from '../components/RepoStorage';
import SiteGreeter from "../components/SiteGreeter";

//**---- The bread and butter of this application - where the application fetches data from the API based off user input and passes the data off to the respective components to use ----**//

const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [repos, setRepos] = useState({ items: [] });
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	let API_URL = `https://api.github.com/search/repositories`;

	const fetchRepos = async () => {
          // Set loading before API operation starts
          // and error to false
          setLoading(true);
          setError(false);
	     try {
               const result = await axios.get(`${API_URL}?q=${searchTerm}`);
               setRepos(result.data);
	     }
	     catch(error) {
               // If an error is caught, then lets set this error state to true
		     setError(true);
	     }
	     // After API operation ends, setting loading back to false
	     setLoading(false);
	}

	const onInputChange = (e) => {
	     setSearchTerm(e.target.value);
	}

	const onSubmitHandler = (e) => {
          // Prevent browser refreshing after form submission
          e.preventDefault();
          // Call fetch repos async function
          fetchRepos();
	}

	return (
		<>
               <div>
                    <SiteGreeter />
               </div>
               <RepoSearchForm
                    onSubmitHandler={onSubmitHandler}
                    onInputChange={onInputChange}
                    searchTerm={searchTerm}
                    error={error}
               />
               <Loader
                    loading={loading}
                    searchTerm={searchTerm}
               />
               <RepoStorage repos={repos} />
		</>
	);
};

export default SearchPage;
