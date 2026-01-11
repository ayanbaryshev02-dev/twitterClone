const MenuItem = ({item}) =>{
    return(
         <div className='d-flex'>
                <div style={{width: 30, height: 30}}>
                {item.icon}
                </div>
                <p className='mx-3' style={{fontSize: 18}}>{item.name}</p>
                </div>
    )
}
export default MenuItem