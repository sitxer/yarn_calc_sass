import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';



class App extends Component {
  render() {
      let cards = [],
          content = [
              {
                image: "https://bitsgap.com/images/VFfZVbD.svg",
                header: "Your funds are only yours",
                paragraphs: ["Bitsgap doesn't have access to your funds, and your money are always kept directly at the exchange. Your exchanges are connected via secure API keys.",
                "API enables our platform to execute trades and generate portfolio in a secure way, without withdrawal option. API doesn’t reveal any information about your password and private information."
                ]
              },
              {
                image: "https://bitsgap.com/images/384Xet_.svg",
                header: "Safer than your internet bank",
                paragraphs: ["All information delivered to our servers is encrypted with 2048-bit standard and stored on a secure network, protected by a firewall, so nobody has access to your data. This high-security standard makes Bitsgap twice as safe as most internet banks."]
              },
              {
                image: "https://bitsgap.com/images/168afcC.svg",
                header: "Extra security layer",
                paragraphs: ["We strongly recommend using 2FA not only for Bitsgap but also for the email address associated with your account. This will add one more security and safety measure to make sure your account is kept safe."]
              },
          ];

      for (let i = 0; i < content.length; i++) {
          cards.push(<Card key={i} header={content[i].header} image={content[i].image} paragraphs={content[i].paragraphs}/>);
      }
    return (
      <div className="App">
          <div className="flexbox">
              <div className="layout column">
                  <div className="container">
                      <h1>What makes Bitsgap safe to use?</h1>

                      {cards}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
