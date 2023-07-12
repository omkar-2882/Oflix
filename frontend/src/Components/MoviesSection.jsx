import React, { useEffect, useState } from "react";
import "./MoviesSection.css"
import MovieItem from "./MovieItem";

const MoviesSection = (props) => {

	const imgEndpoint = "https://image.tmdb.org/t/p/";

	const [movies, setMovies] = useState([])
	useEffect(() => {
		const fetchAllMovies = () => {
			fetch(props.moviesPath)
				.then(res => res.json())
				.then((res) => {
					setMovies(res.results);
				})
				.catch(err => console.log(err));
		}
		fetchAllMovies();
	}, [])

	// console.log(movies);

	return (
		<>
			<div className="movies-section">
				<h2 className="movies-section-heading">
					{props.category.name} <span className="explore-nudge">Explore All</span>
				</h2>
				<div className="movies-row">
					{
						movies.map((movie) => {
							return (
								<MovieItem key={movie.id} movie={movie} imgEndpoint={imgEndpoint} searchOnYoutube={props.searchOnYoutube}/>
							)
						})
					}
				</div>
			</div>
		</>
	);
};

export default MoviesSection;
