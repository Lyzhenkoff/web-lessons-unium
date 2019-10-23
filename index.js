let addIn = document.getElementById('add');
let deleteIn = document.getElementById('delete');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let obj = {};
obj.name = 'Vasya';
obj.age = '14';
console.log(obj);

btn2.onclick = function () {
  let removing = deleteIn.value;
  if (removing in obj) {
    delete obj[removing];
    console.log('Адское удаление произошло!');
  } else {
    console.log('упс..но такого персик не нашел');
  }
}

btn1.onclick = function () {
  let adding = addIn.value;
  if (addIn in obj) {
    console.log('Полина не понимает зачем ты пишешь это еще раз');
  } else {
    obj[adding] = 'Здесь мог был быть ваш мем,но пока тут круглые лица'
    console.log('Сработал командный дух и персик добавил');
  }
}
