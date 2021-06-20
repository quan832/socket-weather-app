import React from "react";
import { APP_TOKEN } from "../../util/appUtil";

const IndexPage = (props) => {
  React.useEffect(() => {
    const token = localStorage.getItem(APP_TOKEN);
    console.log(token);
    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");
    }
    // eslint-disable-next-line
  }, [0]);
  return <div></div>;
};

export default IndexPage;
