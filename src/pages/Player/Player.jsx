import react, {useEffect, useState} from 'react';
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png';
import {useNavigate, useParams} from "react-router-dom";
const Player = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [apidata, setApidata] = useState({
        name: "",
        key: "",
        published_at:"",
        type:""
    });
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjI2MjY1NWZiMjBkZGYwOWI1NTEwNmFiZmM1ZTljYSIsIm5iZiI6MTc1NjI4NDM0Ni40MDksInN1YiI6IjY4YWVjNWJhZjkwMzYwMDZhYmZhOTBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JxYdG4NDNjHlcmVSNG6ReqzOvC9W08Bk7reRXVGfIWA'
        }
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApidata(res.results[0]))
            .catch(err => console.error(err));
    },[])
    return (
        <div className={"player"}>
            <img src={back_arrow} alt="Back Arrow" onClick={() => {navigate(-2)}}/>
            <iframe width={'90%'} height={'90%'}
            src={`https://www.youtube.com/embed/${apidata.key}`}
            title={'trailer'} frameBorder={'0'} allowFullScreen></iframe>
            <div className={"player-info"}>
                <p>{apidata.published_at.slice(0,10)}</p>
                <p>{apidata.name}</p>
                <p>{apidata.type}</p>
            </div>
        </div>
    );
}
export default Player;