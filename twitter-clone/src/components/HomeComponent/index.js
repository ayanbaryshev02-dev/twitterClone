import NewTweet from "./NewTweet"
import TweetsList from "./TweetsList"
import React from "react"
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "./images"

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            content: '',
            tweets: [
        {
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: "LOREFPOK: :FKfkfgj fkjgr",
            replies: 200,
            retweets: 1000,
            likes: 500,
        },
        {
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

    render(){

        const { tweets, content } = this.state;

          return(
            <div className="w-50 nt-3">         
            <h5 className="mx-3">Home</h5>
            <NewTweet content={content} onChangeTextInput={this.onChangeTextInput}/>
            <TweetsList tweets = {tweets}/>
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