// UTILITY FUNCTIONS

const utils = {};

utils.getInitials = (name) => {
  //your code here
  let result = '';
  const nameArray = name.split(' ');
  nameArray.forEach(name => {
    result += name[0];
  })
  return result.toUpperCase();
};

utils.generateGroups = (students, size) => {
  //your code here
  let result = []
  let temp = []
  while(students.length) {
    for(let i = 0; i < size; i++) {
      if(students.length) {
        temp.push(students.shift());
      }
    }
    result.push(temp);
    temp = [];
  }
  return result;
};

utils.throttle = (callback, time) => {
  //your code here
  let throttled = false;
  const throttleFunc = (...params) => {
    if(!throttled) {
      throttled = true;
      callback(...params);
      setTimeout(() => { throttled = false }, time)
    }
  }
  return throttleFunc;
};

module.exports = utils;
