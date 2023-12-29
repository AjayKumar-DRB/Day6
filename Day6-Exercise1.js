class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
    getPG(movies) {
        const pgMoviesArray = [];
    
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].rating === "PG") {
            pgMoviesArray.push(movies[i]);
          }
        }
    
        return pgMoviesArray;
      }
}
  
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
const one = new Movie();

const moviesArray = [
new Movie("Movie 1", "Studio 1", "PG"),
new Movie("Movie 2", "Studio 2", "R"),
new Movie("Movie 3", "Studio 3", "PG13"),
new Movie("Movie 4", "Studio 4", "PG"),
];

// we cannot access the class directly to invoke the function,
//thus we create an empty instance of the class and access the function through it 
const pgMoviesArray = one.getPG(moviesArray);
//console.log(pgMoviesArray)

console.log(`Title: ${casinoRoyale.title}`);
console.log(`Studio: ${casinoRoyale.studio}`);
console.log(`Rating: ${casinoRoyale.rating}`);
console.log("\nMovies with rating 'PG':");
//console.log(pgMoviesArray);
for(let i = 0; i < pgMoviesArray.length; i++){
    console.log(`Title:${pgMoviesArray[i].title}, Studio:${pgMoviesArray[i].studio}, Rating:${pgMoviesArray[i].rating}`)
}