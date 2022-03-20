import {Carousel} from '3d-react-carousal';
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

let slides = [
  <img height={400} width={600}  src="img/abpta.jpg" alt="6" />,
  <img height={400} width={600}  src="img/img(68).jpg" alt="1" />,
  <img height={400} width={600} src="img/img(69).jpg" alt="2" />  ,
  <img height={400} width={600} src="img/img(70).jpg" alt="3" />  ,
  <img height={400} width={600} src="img/img(71).jpg" alt="4" />  ,
  <img height={400} width={600} src="img/img(72).jpg" alt="5" />   ];




export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* <div className="row">
        <Carousel slides={slides} style={{height: '800px'}} height={300} autoplay={true} interval={10000}/>
        </div> */}
        <div className="row">
          <div className="col-xs-12 col-md-7">
          <Carousel slides={slides}  autoplay={false} interval={10000}/>
            {/* <img src="img/about.jpg" className="img-responsive" alt="" /> */}
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
