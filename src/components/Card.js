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
					<img src={personaje.image} class="img-thumbnail" alt={personaje.name} />
				</figure>

         <div>
                <h2>{personaje.name}</h2>
        </div>
				
			</div>
		</section>
	)
}
