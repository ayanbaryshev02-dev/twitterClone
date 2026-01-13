
import Tweet from "./Tweet"

const TweetsList = ({ tweets, deleteTweet }) => {
    
    return(
        tweets.map((tweet)=>
        <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet}/>)
    )
}
export default TweetsList