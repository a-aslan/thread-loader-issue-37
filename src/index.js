function component() {
  let element = document.createElement('div');

  const helloWorld = ['Hello', 'World'].map(item => item.toUpperCase()).join(' ');
  element.innerHTML = helloWorld;

  return element;
}

document.body.appendChild(component());
