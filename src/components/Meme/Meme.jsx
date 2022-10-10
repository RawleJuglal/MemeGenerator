import React from 'react';
import './Meme.css'
import memesData from '../../memesData.js'

export default function Meme(){
    let [memeImage, setMemeImage] = React.useState("");

    function getMemeImage(){
        setMemeImage(memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)].url);
    }

    return(
        <div className='--meme-meme-container'>
            <div className='row --meme-meme-form-container'>
                    <div className='col-6 --meme-top-text-column-container'>
                        <div className="mb-3 --meme-top-text-container">
                            <input type="email" className="form-control --meme-top-text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='shut up' />
                        </div>
                    </div>
                    <div className='col-6 --meme-bottom-text-column-container'>
                        <div className="mb-3 --meme-bottom-text-container">
                            <input type="email" className="form-control --meme-bottom-text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='and take my money' />
                        </div>
                    </div>
                    <div className='col-12 --meme-submit-container'>
                        <button type="submit" onClick={getMemeImage} className="btn btn-purple-gradient">Get a New Meme Image 🖼</button>
                    </div>  
            </div>
            <img className='--meme-meme-img' src={memeImage} alt="Logo" />;
        </div>
    )
}