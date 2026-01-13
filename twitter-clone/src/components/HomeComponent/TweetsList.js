
import Tweet from "./Tweet"

const TweetsList = ({ tweets }) => {
    
    return(
        tweets.map((tweet, index)=>
        <Tweet {...tweet} key={index}/>)
    )
}
export default TweetsList