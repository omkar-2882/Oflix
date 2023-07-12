import React, { useState } from 'react'

const MovieItem = (props) => {
    const [fclass, setFclass] = useState("")
    const [yturl, setYturl] = useState("")
    const imgEndpoint = props.imgEndpoint;
    const searchYoutubeVideo = async (query) => {
        fetch(props.searchOnYoutube(query))
            .then(res => res.json())
            .then((res) => {
                const bestSearch = res.items[0];
                const youtubeUrl = `https://www.youtube.com/embed/${bestSearch.id.videoId}?autoplay=1&controls=0`;
                // console.log(youtubeUrl);
                setYturl(youtubeUrl);
                setFclass("dshow")
            })
            .catch(err => console.log(err))
        // setYturl(`https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1&controls=0`);
        // setFclass("dshow");
    }

    const handleMouseEnter = () => {
        searchYoutubeVideo(props.movie.title);
    };

    const handleMouseLeave = () => {
        setYturl("");
        setFclass("");
    };
    return (
        <>
            <div className="movie-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <img
                    src={imgEndpoint + "w500/" + props.movie.backdrop_path}
                    alt={props.movie.title}
                />
                <iframe className={fclass} width={420} height={315} src={yturl}>

                </iframe>
            </div>
        </>
    )
}

export default MovieItem