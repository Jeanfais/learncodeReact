import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {

constructor(){
  super();
  this.state = {title: "title in the constructor"
}

}

render() {
  setTimeout(() => {
    this.setState({title: "title changed after 2s "});
  }, 2000);


  return(

  <div>

  <Header title = {this.state.title}
  />
  <Header title = {"different title"}
  />
  <Footer />
  </div>

  );
}
}


  {/* constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}


------
constructor() {
  super();
    this.state = { name: "will"};

}



*/}
