import React from 'react'


export const Card = ({ personaje }) => {
	return (
		<section className='personaje'>
			<div className='personaje-header'>
				<div className='estado'>
				</div>
			</div>

			<div className='personaje-body '>
				<figure>
					{/* <img src={personaje.image} class="img-thumbnail" alt={personaje.price} /> */}
				</figure>

         <div>
                <h2>{personaje.title}</h2>
        </div>
				
			</div>
		</section>
	)
}
