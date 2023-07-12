import React, { useEffect, useState } from 'react'

const BannerSection = (props) => {

    const imgEndpoint = "https://image.tmdb.org/t/p";
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const fetchTrendingMovies = () => {
            fetch(props.trendingMoviePath)
                .then(res => res.json())
                .then((res) => {
                    const list = res.results;
                    console.log(list)
                    const randomIndex = parseInt(Math.random() * list.length);
                    setMovie(list[randomIndex]);
                })
                .catch((err) => console.log(err));
        }
        fetchTrendingMovies();
    }, [])

    // console.log(movie);
    const bannerStyle = {
        backgroundImage: `url(${imgEndpoint}/original/${movie.backdrop_path})`,
    };

    return (
        <>
            <div className="banner-section" style={bannerStyle}>
                <div className="overlay">

                    <div className="banner-content container">
                        <p class="banner__title">
                            {movie.title}
                        </p>
                        <p class="banner__info">Released {movie.release_date}</p>
                        <p class="banner__overview">{
                            movie.overview && movie.overview.length > 200
                                ? movie.overview.slice(0, 250).trim() + " ..."
                                : movie.overview
                        }
                        </p>
                        <div class="action-buttons-cont">
                            <button class="action-button">
                                <i class="fa-solid fa-play" style={{ color: "#000000" }}></i>
                                &nbsp;&nbsp; Play
                            </button>
                            <button class="action-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-info-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                                &nbsp;&nbsp;More Info
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BannerSection