import NewTweet from "./NewTweet"
import TweetsList from "./TweetsList"
import React from "react"
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from "./images"

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            content: '',
            tweets: [
        {
            id: 0,
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: "АЛГА КАЗАКСТАН",
            replies: 200,
            retweets: 1000,
            likes: 500,
        },
        {
            id: 1,
            authorName: 'NFactorial',
            authorUserName: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: "Курсы курсы курсы",
            replies: 200,
            retweets: 1000,
            likes: 500,
        },
    ]
        }

    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet ={
            id: this.state.tweets.length,
            authorName: 'Ayan',
            authorUserName: '@ayanbaryshev',
            img: PROFILE_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
        }   
    
        this.setState({
            tweets: [...this.state.tweets, newTweet],
            content: ''
        })
    }

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
        
    }

    render(){

        const { tweets, content } = this.state;
        const {searchTerm} = this.props

        const filteredTweets = tweets.filter(tweet =>
            tweet.content.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            tweet.authorName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            tweet.authorUserName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )

          return(
            <div className="w-50 nt-3">         
            <h5 className="mx-3">Home</h5>
            <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
            <TweetsList tweets = {filteredTweets} deleteTweet={this.deleteTweet} />
         </div>
        )
}
}
export default Home




// const Home = () =>{
//     return(
//         <div className="w-50 nt-3">
//         <h5 className="mx-3">Home</h5>
//         <NewTweet />
//         <TweetsList />
//         </div>
//     )
// }
// export default Home