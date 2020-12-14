const { Queue } = require('../queue');

let cats = new Queue();

cats.enqueue({
  image:"https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Persian-1.jpg",
  name: 'Prince',
  gender: 'male',
  age: 11,
  breed: 'persian',
  story: 'Sweet Prince, Once in a high castle now without a home'
});

cats.enqueue({
  image: 'https://www.thehappycatsite.com/wp-content/uploads/2017/10/30-Awesome-Tabby-Cat-Facts-HC-long.jpg',
  name: 'Jeremiah',
  gender: 'Male',
  age: 1,
  breed: 'tabby',
  story: "Jeremiah was a bullfrog, but now he's a cat that needs love"
});
cats.enqueue({
  image: 'https://www.scienceabc.com/wp-content/uploads/2019/01/Sphynx-cat1.jpg',
  name: 'Raptor',
  gender: 'Female',
  age: 7,
  breed: 'Hairless',
  story: 'Clever girl'
});


const CatService = {
  cats,

  getCats() {
    return this.cats;
  },
  adoptCat() {
cats.dequeue();
    return cats;
  }, 

};

module.exports = CatService;