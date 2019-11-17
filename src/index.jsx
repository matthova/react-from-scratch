import Hovact from "./Hovact";

/** @jsx Hovact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Hovact</h2>
  </div>
);

// eslint-disable-next-line react/no-deprecated
Hovact.render(element, document.getElementById("root"));
