console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'This is a subtitle.',
  options: [],
}

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options.' : 'No options found.'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => <li key={index}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();