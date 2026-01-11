import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "./images"
import Tweet from "./Tweet"

const TweetsList = () => {
    const tweets = [
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

    return(
        tweets.map((tweet, index)=>
        <Tweet {...tweet} key={index}/>)
    )
}
export default TweetsList