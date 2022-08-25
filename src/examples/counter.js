var number = 0;
var btnOneClassName = "btnRed";
var btnMinusClassName = "btnRed";

var addOne = () => {
  number++;
  renderApp();
};
var minusOne = () => {
  number--;
  renderApp();
};

function renderApp() {
  var template2 = (
    <div>
      <h1>Number: {number}</h1>
      <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>
        +1
      </button>
      <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>
        -1
      </button>
    </div>
  );

  ReactDOM.render(template2, root);
}

function tick() {
  var element = (
    <div>
      <h2>time is: {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, root);
}

setInterval(tick, 1000);

// renderApp();