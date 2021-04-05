function add(a, b) {
  return a + b;
}

function getFullName(user) {
  const {
    name: {first, middle, last},
  } = user;
  return [first, middle, last].filter(Boolean).join('');
}

add(1, 'two');

getFullName({name: {first: 'Joe', m1ddle: 'Bud', last: 'Matthews'}});
