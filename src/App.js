import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item-1 carousel-items active">

          </div>
          <div class="carousel-item-2 carousel-items">

          </div>
          <div class="carousel-item-3 carousel-items">

          </div>
          <div class="carousel-item-4 carousel-items">

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="banner">

      </div>
      <header>
        <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

        <div class="offcanvas-sm offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Learning BD</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul>
              <li><a href="./Home">Home</a></li>
              <li><a href="./Course">Course</a></li>
              <li><a href="./Blogs">Blogs</a></li>
              <li><a href="./About Us">About Us</a></li>
            </ul>
          </div>
        </div>



      </header>
    </div>
  );
}

export default App;
