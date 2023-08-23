import React, { useEffect, useState } from "react";
import "./Home.css";
import MoviesSection from "./MoviesSection";
import BannerSection from "./BannerSection";
import Navbar from "./Navbar";

const Home = () => {
	const apikey = "a71d353b577171c711db8b02d2d984e4";
	const apiEndpoint = "https://api.themoviedb.org/3";

	const apiPaths = {
		fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
		fetchMovieList: (id) =>
			`${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
		fetchTrending: `${apiEndpoint}/trending/movie/day?api_key=${apikey}&language=en-US`,
		searchOnYoutube: (query) =>
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDmnl7xS3XUkZC8RGv-pE29Se--BLSn5Us`
	};

	const [categories, setcategories] = useState([])

	const searchYoutubeTrailer = (query) => {
		fetch(apiPaths.searchOnYoutube(query))
		.then(res=>res.json())
	}

	useEffect(() => {
		const fetchAllCategories = () => {
			fetch(apiPaths.fetchAllCategories)
				.then(res => res.json())
				.then((res) => {
					setcategories(res.genres);
				})
				.catch(err => console.log(err));
		}
		fetchAllCategories();
	}, [])

	return (
		<>
			<Navbar/>
			<BannerSection trendingMoviePath={apiPaths.fetchTrending} />
			<div class="banner_fadeBottom"></div>
			<div className="movies-container container">
				{
					categories.map((cat) => {
						const moviesPath = apiPaths.fetchMovieList(cat.id)
						return (<MoviesSection key={cat.id} category={cat} moviesPath={moviesPath} searchOnYoutube={apiPaths.searchOnYoutube} />)
					})                          
				}
				{/* <MoviesSection /> */}
			</div>
		</>
	);
};

export default Home;
