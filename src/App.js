import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          text: "You can observe a lot just by watching.",
          author: "Yogi Berra"
        },
        {
          text: "Be the chief but never the lord.",
          author: "Lao Tzu"
        },
        {
          text: "Self-complacency is fatal to progress.",
          author: "Margaret Sangster"
        },
        {
          text:
            "Genius is one percent inspiration and ninety-nine percent perspiration.",
          author: "Thomas Edison"
        },
        {
          text: "Nothing happens unless first we dream.",
          author: "Carl Sandburg"
        }
      ],
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra"
    };
  }

  genQuote = () => {
    let ranQuote = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      text: this.state.quotes[ranQuote].text,
      author: this.state.quotes[ranQuote].author
    });
  };

  render() {
    const { text, author } = this.state;
    return (
      <div className="wrapper">
        <div className="box">
          <div className="inner-box">
            <h1>"{text}"</h1>
            <h2>- {author}</h2>
            <div className="twitter">
              <button onClick={this.genQuote}>Change Quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
