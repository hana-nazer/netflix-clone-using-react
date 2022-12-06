import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setmovies(response.data.results)
        }).catch(err => {
            // alert('network error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
     
      const handleMovieTrailer = (id)=>{
       console.log(id);
       axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data);
        if(response.data.results.length !== 0){
            setUrlId(response.data.results[0])
        }
        else{
            console.log("EMpty Array");
        }
       })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) => 
                    <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
         )}
            </div>
          {urlId && <Youtube videoId={urlId.key} opts={opts} ></Youtube>}
        </div>
    )
}

export default RowPost