import React from "react";
import Cars from "../Cars.json";
import  Carousel  from "react-bootstrap/Carousel";



function CarData() {
  return (
    <>
      <div className="Container">
        {Cars &&
          Cars.map((Car) => {
            return (

              <div className="box">
                <strong>{Car.bodyType}</strong>
                <br />
                <b>{Car.modelName}</b> {Car.modelType}
                <br />

                <Carousel>
                {<img src={Car.imageUrl} alt="cars" />}
                  
                </Carousel>


                <div className="a mj">
                  <div className="cr 1 m mk ml mm m n n op q v product-list-caro">
                    <div className="a m2">
                     <pre> <a href="LEARN">LEARN</a>        <a href="LEARN">SHOP</a></pre>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <br /><br />

                <div className="recharge">
                 <a href="recharge">HYBRID CARS</a>
                </div>
                <div>
                </div>
              </div> 
            );
          })}
      </div>
    </>
  );
}

export default CarData;
