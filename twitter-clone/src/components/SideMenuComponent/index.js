import './styles.css'
import {HOME_SVG} from './images'

const SideMenu = () => {
    return(
        <div className="w-25 mt-3 mx-5">
            <img src={require('./images/twitter.png')} className='logo-icon' />
        <div className='d-flex'>
            <div style={{width: 30, height: 30}}>
                {HOME_SVG}
                </div>
            
            <p className='mx-3' style={{fontSize: 18}}>Home</p>
        </div>
        </div>
    )
}
export default SideMenu