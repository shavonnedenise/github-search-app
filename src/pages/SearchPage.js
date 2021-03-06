import React, {useState} from 'react';
import axios from 'axios';

import RepoSearchForm from '../components/RepoSearchForm';
import Loader from '../components/Loader';
import RepoStorage from '../components/RepoStorage';
import SiteGreeter from "../components/SiteGreeter";

const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [repos, setRepos] = useState({ items: [] });
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	let API_URL = `https://api.github.com/search/repositories`;

	const fetchRepos = async () => {
	// set loading Before API operation starts
	setLoading(true);
	setError(false);
	try {
		const result = await axios.get(`${API_URL}?q=${searchTerm}`);
		setRepos(result.data);
	}
	catch(error) {
		setError(true);
	}
	// After API operation end
	setLoading(false);
	}

	const onInputChange = (e) => {
	setSearchTerm(e.target.value);
	}

	// Submit handler
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
