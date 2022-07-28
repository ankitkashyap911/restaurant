import React from 'react'

const Navbar = ({filteritem , Uniquedata}) => {
  return (
    <>
                <nav className='navbar'> 
          <div className='btn-group'>

          {
            Uniquedata.map((curelem)=>{
              return <button className='btn-group__item'onClick={()=> filteritem(curelem)}>{curelem}</button> 

            }

            )
          }

           {/* ye tha js ka tarika ⬇  */}


            {/* <button className='btn-group__item'onClick={()=> filteritem("breakfast")}>breakfast</button>  */}

            {/* <button className='btn-group__item'onClick={()=> filteritem("lunch")}>lunch</button> 

            <button className='btn-group__item'onClick={()=> filteritem("dinner")}>dinner</button> 

            <button className='btn-group__item'onClick={()=> filteritem("evening")}>evening</button>  */}

            {/* <button className='btn-group__item'onClick={()=> setMenuData(Menu)}>all</button>  */}
          </div>
        </nav>

    </>
  )
}

export default Navbar;