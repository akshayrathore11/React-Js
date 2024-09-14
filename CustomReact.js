function customRender(reactElement, container) {
    // const domElem = document.createElement(reactElement.type);
    // domElem.innerHTML = reactElement.children;
    // domElem.setAttribute("href", reactElement.props.href);

    // container.appendChild(domElem);

  const domElem = document.createElement(reactElement.type);
  domElem.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    domElem.setAttribute(prop,  reactElement.props[prop]);
  }
  container.appendChild(domElem);


}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.querySelector("#customReact");

customRender(reactElement, mainContainer);
