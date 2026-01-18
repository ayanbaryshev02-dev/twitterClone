import searchIcon from './images/search.png';

const FilterComponent = ({searchTerm, onSearchChange}) =>{
   return(
    <div className="d-flex mx-5 ">
        <div className="mb-3 w-100 ">
            
            <input 
                    placeholder="Поиск в Твиттере" 
                    className="rounded-pill border border-light bg-light w-100 py-2"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{
                        backgroundImage: `url(${searchIcon})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '15px center',
                        backgroundSize: '18px 18px',
                        paddingLeft: '45px', 
                        outline: 'none' 
                    }}
                />
            </div>
        
    </div>
   ) 
}
export default FilterComponent