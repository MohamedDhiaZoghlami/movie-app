import React from "react";
import { Data } from "./Data";
import { Container, Wrap, Wrapper, MoneyBox, Money, Btn } from "./Table.styles";
import { IconContext } from "react-icons";
import { FaRegCheckCircle, FaTimesCircle } from "react-icons/fa";

function Table() {
  return (
    <IconContext.Provider value={{ color: "white", size: "25px" }}>
      <Wrapper>
        <Container>
          <Wrap>
            <p></p>
            <div className='box'>
              <h3>Free</h3>
            </div>
            <div className='box'>
              <h3>Basic</h3>
            </div>
            <div className='box'>
              <h3>Premium</h3>
            </div>
          </Wrap>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap>
                  <p>{item.title}</p>
                  <div className='box'>
                    {item.free ? <FaRegCheckCircle /> : <FaTimesCircle />}
                  </div>
                  <div className='box'>
                    {item.basic ? <FaRegCheckCircle /> : <FaTimesCircle />}
                  </div>
                  <div className='box'>
                    {item.premium ? <FaRegCheckCircle /> : <FaTimesCircle />}
                  </div>
                </Wrap>
              </>
            );
          })}
          <Wrap>
            <p>Video Quality</p>
            <div className='box'>
              <h1>SD(480p)</h1>
            </div>
            <div className='box'>
              <h1>HD(720p)</h1>
            </div>
            <div className='box'>
              <h1>FHD(1080p)</h1>
            </div>
          </Wrap>
          <MoneyBox>
            <Money>
              <div><p>Free</p></div>
              <h1>
                $0 <span>/month</span>
              </h1>
            </Money>
            <Money>
              <div><p>Basic</p></div>
              <h1>
                $10 <span>/month</span>
              </h1>
            </Money>
            <Money>
              <div><p>Premium</p></div>
              <h1>
                $40 <span>/month</span>
              </h1>
            </Money>
          </MoneyBox>
          <div className='btn'>
            <Btn>Subscribe</Btn>
          </div>
        </Container>
      </Wrapper>
    </IconContext.Provider>
  );
}

export default Table;
