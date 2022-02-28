import React,{ useState }from 'react';
import './Tweet.css';

const TweetProp = (props) => {
  return (
    <>
        <div className='parCont'>
            {/* Tweet handel */}

            <div className='p1'>
                <div className='name'>{props.tweet.name}</div>
                <div className='handle'><h4>@{props.tweet.twitterhandle}</h4></div>
            </div>

            {/* tweet Content */}

            <div className='p2'>
                <div><p>{props.tweet.tweet}</p></div>
            </div>

            {/* tweet likes */}
            <div className='p3'>
                <button onClick={()=>props.handleLike(props.tweet.id)} style={{color:props.tweet.likes>=props.tweet.dislikes?'green':'blue'}}> 
                   
                    <i className="fa-solid fa-thumbs-up"> {props.tweet.likes}</i>
                </button>

                <button onClick={()=>props.handleDislike(props.tweet.id)} style={{color:'red'}}><i className="fa-solid fa-thumbs-down"> {props.tweet.dislikes}</i></button>
                
                

            </div>

        </div>
    
    </>
  )
}

export default TweetProp