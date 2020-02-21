import React from "react";

const Contact = () => {
  return (
    <Route
    {...routeProps}
    render={() => {
      window.location.replace(props.link);
      return null;
    }}
  />
  );
}

export default Contact;
