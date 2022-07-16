import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      


      <header className="App-header">
        <div className="Menulist">
            <ul className="Menulist-ul">
            
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#Gallery">Gallery</a>
              </li>
              <li>
                <a href="#Event">Event</a>
              </li>
            </ul>
        </div>

       
        <p>
          Dragon Phoenix Lion Dance
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <div id="Home">
        <h1>Home</h1>
      </div>

      <div id="About">
        <h1>About</h1>


      </div>

      <div id="Contact">
        <h1>Contact</h1>
        <ul>
          <li>
            Email: dragonephoenixliondance@gmail.com
          </li>
          <li>
            Phone: +1 714-837-9364 (Bao Nguyen)
          </li>
        </ul>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div class="wrapper">
          <ul>
            <li class="facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <div class="slider">
                <p>facebook</p>
              </div>
            </li>
            
            <li class="twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <div class="slider">
                <p>twitter</p>
              </div>
            </li>
            
            <li class="instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <div class="slider">
                <p>instagram</p>
              </div>
            </li>
            
            <li class="google">
              <i class="fa fa-google" aria-hidden="true"></i>
              <div class="slider">
                <p>google</p>
              </div>
            </li>
            
            <li class="whatsapp">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
              <div class="slider">
                <p>whatsapp</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      

      <div id="Gallery">
        <h1>Gallery</h1>
      </div>

      <div id="Event">
        <h1>Event</h1>
      </div>



      
    </div>
  );
}

export default App;
