import React, { useState } from 'react'
import TweetProp from './TweetProp';

const TweetState = () => {
    const [tweets,setTweets]=useState(
        [
            {
                id:1,
                name:"Elon Musk",
                twitterhandle:"elonmusk",
                tweet:"Lorem ipsum dolor sit",
                likes:0,
                dislikes:0
            },{
                id:2,
                name:"Jeff Bezos",
                twitterhandle:"jeffbezos",
                tweet:"Lorem ipsum dolor sit",
                likes:0,
                dislikes:0
            },
            {
                id:3,
                name:"Mukesh Ambani",
                twitterhandle:"mukambani",
                tweet:"Lorem ipsum dolor sit",
                likes:0,
                dislikes:0
            },
            {
                id:4,
                name:"Gautam Adani",
                twitterhandle:"gautamadani",
                tweet:"Lorem ipsum dolor sit",
                likes:0,
                dislikes:0
            }
   
        ]
    );
    
    // Function to handle like-- we need to pass id 
    // because we needt o check a particular element of json
    const hLike=(id)=>{
        const index=tweets.findIndex(el=>el.id===id);
        setTweets([...tweets],tweets[index].likes+=1);
        console.log(tweets[index].likes+" "+tweets[index].name);

        // const latestState=[...tweets];
        // const index=tweets.findIndex(el=>el.id===id);
        // latestState[index].likes+=1
        // setTweets(latestState);
        // console.log("Like");


    };
    
    const hDis=(id)=>{
        const index2=tweets.findIndex(el=>el.id===id);
        setTweets([...tweets],tweets[index2].dislikes++);
        console.log(tweets[index2].dislikes +" "+tweets[index2].name);

    };

    const renderTweets=()=>{
        return tweets.map(item=>{
            return <TweetProp tweet={item} handleLike={hLike} handleDislike={hDis}></TweetProp>
        });
    };



  return (
    <>
        {renderTweets()}
    </>
  )
}

export default TweetState