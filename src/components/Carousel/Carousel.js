import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className="item">
                    <div className="img img1"></div>
                    <Carousel.Caption>
                        <div className='caption-bg'>
                            <h2>Learning BD</h2>
                            <h5>Develop your knowledge around the world</h5>
                        </div>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="item">
                    <div className="img img2"></div>

                    <Carousel.Caption>
                        <div className='caption-bg'>
                            <h3>You Give Us Focus & Concerntrasion</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </Carousel.Caption>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="item">
                    <div className="img img3"></div>
                    <Carousel.Caption>
                        <div className='caption-bg'>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>

                    </Carousel.Caption>
                </div>

            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;