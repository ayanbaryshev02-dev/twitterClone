import { COMMENTS, KZ_IMG_PATH, LIKES, RETWEETS, SHARE } from "./images"

const Tweet = (tweet) => {
    return(
        <div className="mt-3 px-1" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className="mx-5" style={{fontSize:13, fontWeight:"600"}}>You might like! <span style={{color: "blue"}}>See more</span></p>
            <div className="d-flex">
                <img src={tweet.img} style={{width: 50, height:50, borderRadius: 100}}/>
            <div className="mx-3">
                <p style={{fontWeight: 600}}>{tweet.authorName} <span style={{color: "gray"}}>{tweet.authorUserName}</span></p>
                <p>{tweet.content.length > 200 
                ? tweet.content.slice(0, 200) + '...'
                :tweet.content}</p>  
            </div>
            </div>

            <div className="d-flex mx-auto justify-content-between" style={{width: '80%'}}>
                    <div className="d-flex"> 
                        <div style={{width: 20, height: 20}}>{COMMENTS}</div>
                        <p className="px-1">{tweet.replies}</p>
                    </div>      
                    <div className="d-flex"> 
                        <div  style={{width: 20, height: 20}}>{RETWEETS}</div>
                        <p className="px-1">{tweet.retweets}</p>
                    </div>
                    <div className="d-flex"> 
                        <div  style={{width: 20, height: 20}}>{LIKES}</div>
                        <p className="px-1">{tweet.likes}</p>
                    </div>
                    <div className="d-flex"> 
                        <div  style={{width: 20, height: 20}}>{SHARE}</div>
            </div>
            
                </div>
        </div>
    )
}
export default Tweet