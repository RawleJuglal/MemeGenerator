import React from 'react';
import './Meme.css'
// import memesData from '../../memesData.js'

export default function Meme(){
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => {
                return setAllMemes(()=>{
                    return data.data.memes
                })
            })
    },[])

    function getMemeImage(){
        return setMeme((prevState)=>{
            return {...prevState, randomImage: allMemes[Math.floor(Math.random()*allMemes.length)].url}
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        return setMeme((prevState)=>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="shut up and"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    
                />
                <input 
                    type="text"
                    placeholder="take my money"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText.length > 0 ? meme.topText : "Shut up and "}</h2>
                <h2 className="meme--text bottom">{meme.bottomText.length > 0 ? meme.bottomText : "take my money"}</h2>
            </div>
        </main>
    )
}