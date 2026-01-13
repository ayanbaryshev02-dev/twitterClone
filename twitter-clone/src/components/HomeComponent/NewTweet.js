import { PROFILE_IMG_PATH } from "./images"

const NewTweet = ({content, onChangeTextInput}) => {
    return(
        <div className="p-3 d-flex flex-column" style={{borderBottom: '2px solid whitesmoke'}}>
            <div>  
                <img src={PROFILE_IMG_PATH} style={{width: 50, borderRadius: 50}}/>
                <input onChange={onChangeTextInput} value={content} placeholder="Whats?" style={{border: 'none', fontSize: 18, outline: 'none'}} className="mx-3" />
            </div>
            <button style={{alignSelf: 'flex-end', color: 'white', background: '#1D9BF0', borderRadius: 20, border: 'none',}}>Tweet</button>
        </div>
    )
}
export default NewTweet