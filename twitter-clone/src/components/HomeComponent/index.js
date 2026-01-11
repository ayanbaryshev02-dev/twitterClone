import NewTweet from "./NewTweet"
import TweetsList from "./TweetsList"

const Home = () =>{
    return(
        <div className="w-50 nt-3">
        <h5 className="mx-3">Home</h5>
        <NewTweet />
        <TweetsList />
        </div>
    )
}
export default Home