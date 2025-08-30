import react, {useEffect, useRef, useState} from 'react';
import cards_data from '../../assets/cards/Cards_data.js';
import './Titlecard.css'
import {Link} from "react-router-dom";
// https://image.tmdb.org/t/p/w500/
function Titlecard({title,category}) {
    const [apidata,setapidata] = useState([]);
    const cardsref = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjI2MjY1NWZiMjBkZGYwOWI1NTEwNmFiZmM1ZTljYSIsIm5iZiI6MTc1NjI4NDM0Ni40MDksInN1YiI6IjY4YWVjNWJhZjkwMzYwMDZhYmZhOTBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JxYdG4NDNjHlcmVSNG6ReqzOvC9W08Bk7reRXVGfIWA'
        }
    };

    const handlewheel = (event) => {
        event.preventDefault();
        cardsref.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        const cardsEl = cardsref.current;
        cardsref.current.addEventListener('wheel',handlewheel,{passive:false});
        fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setapidata(res.results))
            .catch(err => console.error(err));
    },[]);

    return (
        <div className="titlecards">
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsref}>
                {apidata.map((card,index) => {
                    return <Link to={`player/${card.id}`} className="card" key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500/'+card.backdrop_path} alt={card.name}/>
                        <p>{card.title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}
export default Titlecard;