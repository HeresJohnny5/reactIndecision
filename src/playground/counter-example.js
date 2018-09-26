let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button">+1</button>
      <button onClick={minusOne} className="button">-1</button>
      <button onClick={reset} className="button">Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

const appRoot = document.getElementById('app');
renderCounterApp();