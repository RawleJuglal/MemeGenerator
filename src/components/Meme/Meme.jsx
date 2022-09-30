import React from 'react';
import './Meme.css'

export default function Meme(){
    return(
        <div className='--meme-meme-container'>
            <form className='row --meme-meme-form-container'>
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
                        <button type="submit" className="btn btn-purple-gradient">Get a New Meme Image</button>
                    </div>  
            </form>
        </div>
    )
}