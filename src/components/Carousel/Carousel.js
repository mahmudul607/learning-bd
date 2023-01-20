import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="item">
       <div className="img img1"></div>
         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="item">
      <div className="img img2"><img src="https://i.gifer.com/origin/aa/aa5165eb495c25971190bbaf72ad38fb_w200.gif" alt="" /></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="item">
      <div className="img img3"></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </div>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;