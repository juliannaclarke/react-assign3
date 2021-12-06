import './styles.css';

import { Link } from 'react-router-dom';

export const MemeItem = (props) => {
    const {image, name, content, id} = props;

    return(
        <Link to={`/meme/${id}`}>
            <div className="meme">
                <h1 className="meme-name"> {name} </h1>
                <img className="meme-photo" src={image} alt={content + "meme of" + name} />
                
                <p className="meme-content">{content + 'meme'}</p>
                
            </div>
        </Link>
    )
}