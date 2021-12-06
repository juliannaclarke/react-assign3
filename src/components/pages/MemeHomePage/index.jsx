import "./styles.css";
import {useEffect, useState, useContext} from 'react'
import { MemeItem } from "../../MemeItem";
import { MemeContext } from "../../../context/memeContext";

export const MemeHomePage = () => {
  const [memes, setMemes] = useState([]);

  const globalState = useContext(MemeContext);

  useEffect(
    () => {
      getMemes();
    }, []
  );

  const getMemes = async() => {
    try{
      const response = await fetch('https://firestore.googleapis.com/v1/projects/good-memes-4a2fd/databases/(default)/documents/memes/');
      const data = await response.json();

      const formattedData = data.documents.map((item) => {
        return item.fields
      });

      setMemes(formattedData);
      globalState.initializeMemes(formattedData);

    } catch (err){
      console.log(err);
    }
  }

  return (
    <div className="memes-page">
      <h1 className = 'memes-title'>All Memes</h1>
      <div className = 'memes-container'>
        {
          memes.map((meme) => (
            <MemeItem key={meme.id.stringValue} image={meme.image.stringValue} name={meme.name.stringValue} 
            content={meme.content.stringValue} id={meme.id.stringValue}></MemeItem>
          ))
        }
      </div>
    </div>
  );
};
