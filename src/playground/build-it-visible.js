const app = {
  title: 'Visibility Toggle',
  details: {
    text: 'Hey. These are some details you can now see!',
    isShown: false,
  },
  button: {
    textOn: 'Hide details',
    textOff: 'Show details',
  }
}

const onToggleVisibility = () => {
  app.details.isShown = !app.details.isShown;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {

  const template = (
    <div>
    <h1>{app.title}</h1>
    <button onClick={onToggleVisibility}>
      {app.details.isShown ?
        app.button.textOn : 
        app.button.textOff
      }
    </button>
    {app.details.isShown &&
        <p>{app.details.text}</p>
    }
    </div>
  );

  ReactDOM.render(template, appRoot)
}
render();