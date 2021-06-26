import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
//import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../Components/StyledHero";
import NavBar from "../Components/NavBar";


export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
        };
      }
      static contextType = RoomContext;
    
      // componentDidMount() {
      //   console.log(this.props);
      // }
      render() {
        <NavBar
          path1="/" name1="Home"
          path2="/rooms/" name2="Rooms" 
          path3="/activities" name3="Activities"
          path4="/facilities" name4="Facilities" 
          path5="/aboutUs" name5="About Us" 
          pathSign="/signIn" LogName="Log In">    
        </NavBar>
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
    
        if (!room) {
          return (
            <div className="error">
              <h3> no such room could be found...</h3>
              <Link to="/rooms" className="btn btn-primary">
                Back to Rooms
              </Link>
            </div>
        );
}
const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [mainImg, ...defaultImages] = images;
  console.log(defaultImages);

  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
}
