import React, { Component } from "react";
import { FaCocktail, FaHiking, FaBicycle, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "There is nothing better than serving delicious food items with cocktails."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Walking is the most ancient exercise and still the best modern exercise."
      },
      {
        icon: <FaBicycle/>,
        title: "Ride Freely",
        info:
          "Nothing compares to the simple pleasure of a bike ride."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Beer is made from hops. Hops are plants. Therefore, beer is a salad."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="S e r v i c e s" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
