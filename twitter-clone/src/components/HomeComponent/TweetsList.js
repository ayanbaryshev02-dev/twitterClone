
import Tweet from "./Tweet"

const TweetsList = ({ tweets }) => {
    
    return(
        tweets.map((tweet)=>
        <Tweet {...tweet} key={tweet.id}/>)
    )
}
export default TweetsList