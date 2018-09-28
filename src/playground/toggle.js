console.log('App.js is running!');

const app = {
  title: 'Visibility Toggle',
  toggle: false,
}

const onToggle = () => {
  app.toggle = !app.toggle;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggle}>
        {app.toggle ? 'Hide Details' : 'Show Details'}
      </button>
      {app.toggle ? <p>Hey. These are some details you can now see!</p> : null}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();