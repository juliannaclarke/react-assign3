import React, {useState} from 'react';

export const MemeContext = React.createContext({
    memes: [],
    initialiseMemes: () => {},
});

export const MemeContextProvider = (props) => {
    const [memes, setMemes] = useState([]);

    const initMemes = (memesFromAPI) => {
        setMemes(memesFromAPI);
    }

    
    
    return (<MemeContext.Provider
     value={{memes: memes, initializeMemes: initMemes }}
    >
        {props.children}
    </MemeContext.Provider>)

} 

export default MemeContext;