import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {


render() {

  const title = "Welcome will !";

  return(

  <div>

  <Header title = "Welcome will !" whaaat= {"no understand me"}
addingelement = {"in the object"} newProp={"for Header"}
  />
  <Header title = {"different title"} newProp={"it could be r"}
   whaaat= {title}
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
