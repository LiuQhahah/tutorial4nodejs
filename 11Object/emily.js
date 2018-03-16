var movies = require('./movies');

//new 一个对象出来，和bucky中不一样的对象，
//与10Moudles中比较，输出结果不同，10中的movies中，定义的是变量，
//对变量赋值，赋的是movies中的值，所以当emliy赋值过后，bucky中再次调用时，变量值则发生变化，
//但是11例中的对象不一样，emliy.js与bucky.js new出了两个Object对象，所以结果不同

//当不需要共享时，可以创建不同的对象，实现独立的对象操作
var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";
console.log("emilyMovies.favMovie: "+emilyMovies.favMovie);
