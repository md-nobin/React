// Practice with hitesh

// function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.hrf);
//   domElement.setAttribute("target", reactElement.props.target);

//   container.appendChild(domElement);
// }

// const reactElement = {
//   type: "a",
//   props: {
//     hrf: "http//google.com",
//     target: "_blank",
//   },
//   children: "Click me to visite google",
// };

// const main = document.getElementById("root");

// customRender(reactElement, main);

// Doing by myself:

// const element = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Click hear to visite google",
// };

// function renderElement(element, container) {
//   const domElement = document.createElement(element.type);
//   domElement.innerHTML = element.children;
//   domElement.setAttribute("href", element.props.href);
//   domElement.setAttribute("target", element.props.target);
//   container.appendChild(domElement);
// }

// const rootdiv = document.getElementById("root");

// renderElement(element, rootdiv);

// Practice with hitesh . makeing code more effesient
const element = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click hear to visite google",
};

function renderElement(element, container) {
  const domelement = document.createElement(element.type);
  domelement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === "children") continue;
    domelement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domelement);
}

const rootdiv = document.getElementById("root");

renderElement(element, rootdiv);
