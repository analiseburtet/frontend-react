import React, { useState , useEffect } from 'react'
import './App.scss';
import axios from "axios";
import Header from "./components/header/header.component";
import Posts from "./components/posts/posts.component";
import Pagination from "./components/pagination/pagination.component";

const App = () => {
	const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(9);
	
	const API_KEY = process.env.REACT_APP_API_KEY; 
	
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(`https://gorest.co.in/public-api/posts?access-token=${API_KEY}`);
			console.log(res);
			setPosts(res.data.result);
			setLoading(false);
		}
			
		fetchPosts();
	}, []);
	
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return(
		<div className="App">
			<Header/>
			<div className="main">
				<Posts posts={currentPosts} loading={loading}/>
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
			</div>	
		</div>
	);
};

export default App;