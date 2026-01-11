import './styles.css'
import {HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG} from './images'

const SideMenu = () => {

    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
    ]

    return(
        <div className="w-25 mt-3 mx-5">
            <img src={require('./images/twitter.png')} className='logo-icon' />

            
        <div className='d-flex'>
            {menu.map((item, index)=>(
                <div>
                <div style={{width: 30, height: 30}}>
                {item.icon}
                </div>
                <p className='mx-3' style={{fontSize: 18}}>{item.name}</p>
                </div>
            ))}
            
        </div>
        </div>
        
    )
}
export default SideMenu