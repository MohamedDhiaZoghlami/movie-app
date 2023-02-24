import React , {useState} from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Wrapper, Content, Left, Mid, Right, HamBars,CloseBtn } from "./Navbar.styles";

function Navbar() {

  const [clicked,setClicked] = useState(false);

  const toggle  = () => {
      setClicked(!clicked);
  }

  return (
    <Wrapper>
      <Content>
        <Left>
        <Link to='/' className="link"><h1>TuniBest</h1></Link>  
        </Left>
        <Mid>
          <ul className={clicked ? "navshown" : "navhidden"}>
            <li>
              <Link to='/' className="link">Home</Link>
            </li>
            <li>
              <Link to='/Movies' className="link">Movies</Link>
            </li>
            <li>
              <Link to='/TvShows' className="link">Tv Shows</Link>
            </li>
            <li>
              <Link to='/Pricing' className="link">Pricing</Link>
            </li>
            <li>
              <Link to='/Faqs' className="link">FAQ's</Link>
            </li>
            <li>
              <Link to='/About' className="link">About Us</Link>
            </li>
          </ul>
        </Mid>
        <Right >
           <div className="toggleBtn" onClick={toggle}>{clicked ?  <CloseBtn /> : <HamBars />}</div>
        </Right>
      </Content>
    </Wrapper>
  );
}

export default Navbar;
