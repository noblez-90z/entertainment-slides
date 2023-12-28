const games = document.querySelector('.games')
const movies = document.querySelector('.movies')
const books = document.querySelector('.books')
const slidelist = document.querySelectorAll('.slide li')
console.log(slidelist)
// this for each is working fine but cannot get each li to display it oen category
// slidelist.forEach((li) => {
//     li.addEventListener('click',function(){
//     li.classList.toggle('active');
    
//     })
// })
// Array.isArray(Array.from(slidelist));
slidelist[0].addEventListener('click',function(){
    slidelist[0].classList.add('active')
    slidelist[1].classList.remove('active')
    slidelist[2].classList.remove('active')

    games.classList.remove('inactive');
    movies.classList.remove('active');
    books.classList.remove('active');
})
slidelist[1].addEventListener('click',function(){
    slidelist[0].classList.remove('active')
    slidelist[2].classList.remove('active')
    slidelist[1].classList.add('active')

    movies.classList.add('active');
    games.classList.add('inactive');
    books.classList.remove('active');
})
slidelist[2].addEventListener('click',function(){
    slidelist[0].classList.remove('active')
    slidelist[1].classList.remove('active')
    slidelist[2].classList.add('active')

    books.classList.add('active');
    games.classList.add('inactive');
    movies.classList.remove('active');
})