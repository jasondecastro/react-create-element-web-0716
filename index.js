const title = React.createElement('h1', {}, 'My First React Code')
const container = React.createElement('div', {}, title);

ReactDOM.render(
    container,
    document.getElementById('main')
)