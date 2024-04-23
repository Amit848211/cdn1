
const style={
    width:"80%",
    fontSize:"18px"
}





const h1 = React.createElement("h1", {}, "Learn web development");
const p1 = React.createElement(
  "p",
  {style:style},
  "The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:"
);
const p2 = React.createElement("p", {style:style}, "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started."

);
const p3 = React.createElement("p", {style:style}, "As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.");

const div = React.createElement("div", {}, [h1,p1,p2,p3]);
ReactDOM.render(div, document.getElementById("root"));
