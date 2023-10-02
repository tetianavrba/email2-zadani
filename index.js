const goodbye = (name) => {
  return 'S pozdravem  ' + name;
};

const formalGoodbye = (name) => {
  return 'S uctivou poklonou ' + name;
};

const rudeGoodbye = (name) => {
  return 'Se měj ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};

fillSubject('Nepřišly gumičky');
fillBody(
  'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
  'referent Kubrt',
  rudeGoodbye,
);
