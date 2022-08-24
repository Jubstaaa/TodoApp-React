"use strict";

// JSX - Javascript XML
var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello React"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var number = 0;
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnRed";

var addOne = function addOne() {
  number++;
  renderApp();
};

var minusOne = function minusOne() {
  number--;
  renderApp();
};

function renderApp() {
  var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnPlusOne",
    className: btnOneClassName,
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnMinusOne",
    className: btnMinusClassName,
    onClick: minusOne
  }, "-1"));
  ReactDOM.render(template2, root);
}

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "time is: ", new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}

setInterval(tick, 1000); // renderApp();
