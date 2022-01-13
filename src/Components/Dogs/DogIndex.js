import React, {useState} from 'react';

const [dogPic, setDogPic] = useState()
 const cornDogs =() => {

    

    const randomImg =(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogPic(data.message))
    })



    
    return(
        <div className='main Dogs'>
            <button onClick={randomImg}></button>

            {dogPic && <img src={dogPic}></img>}
        </div>
    );
 }


export default cornDogs;