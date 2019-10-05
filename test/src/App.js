import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "Build/src.json",
      "Build/UnityLoader.js"
    );
  }

  render() {
    return <Unity style={{width : "100px", height : "1000px"}} unityContent={this.unityContent} />;
  }
}
