import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export const Filtrar = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

  

	return (

    <div>
    <nav class="navbar navbar-light ">
        <div class="container-fluid">
        <img className='logo' src="../favicon.svg" alt=""/>
          <a class="navbar-brand text-light">Navbar</a>
          <a class="navbar-brand text-light">Navbar</a>
          <a class="navbar-brand text-light">Navbar</a>
          <form class="d-flex input-group w-auto" id='inpu'>
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </form>
        </div>
      </nav>
     
      {/* slider */}
      <div className=''>
  <Carousel>
    <Carousel.Item  interval={1000}>
      <img
        className="d-block w-100"
        src="./encan.svg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="./spiderman.svg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./spacejam.svg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
</div>
<br/> <br/> <br/>
     
</div>
		


	)
}