import React from 'react'

const menucard = ({ Menuread }) => {

    return (
        <>
            <section className='main-card--cointainer'>
            {Menuread.map((curElem) => {

                const{id, name, category, image, } = curElem;

                return (

                    <div className='card container' key={id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{id}
                            </span>
                            <span className='card-author subtle'>{category}
                            </span>
                            <h2 className='card-title'>{name}</h2>
                            <span className='card-description subtle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo molestiae porro quis cupiditate. Recusandae quis praesentium nisi eius error? Numquam possimus vel beatae veniam vitae iste autem delectus ipsam atque.</span>
                            <div className='card-read'>read</div>

                        </div>
                        <img src={image} alt="images" className='card-media' />
                        <span className='card-body subtle'>order now</span>
                    </div>

                </div>
                )
            }

            )};
                    </section>

        </>
    )
}

export default menucard;