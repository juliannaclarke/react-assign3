import './styles.css'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import MemeContext from '../../../context/memeContext.js';

export const MemeDetailsPage = (props) => {
    const {id} = useParams();

    const [meme, setMeme] = useState({});

    const globalState = useContext(MemeContext);

    useEffect( () => {
        const meme = globalState.memes.find(
            (meme) => meme.id.stringValue === id
            );
        setMeme(meme);
    }, [])

    if (meme) {
        console.log("found a meme");
        return (
            <div className="memes-page">
                <h1 className="memes-title"> {meme.name?.stringValue} </h1>
                <img src={meme.image?.stringValue} alt="meme" />
            </div>
        )
    } else{
        return(<p>No meme with this ID</p>)
    }
}