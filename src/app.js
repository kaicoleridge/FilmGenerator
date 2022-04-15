    const prompt = require('prompt-sync')();


    var movies = [
        "The Kings Man", 
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkhban", 
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoneix", 
        "Harry Potter and the Half Blood Prince",
        "Harry Potter and the Deathly Hallows Part 1",
        "Harry Potter and the Deathly Hallows Part 2", 
        "Spider-Man 1",
        "Spider-Man 2",
        "Spider-Man 3",
        "The AMAZING Spider-Man 1",
        "The AMAZING Spider-Man 2",
        "The Social Network",
        "Shaun of the Dead", 
        "Spider-Man No Way Home", 
        "The Dark Knight Rises", 
        "Kill Bill", 
        "SAW", 
        "SPLIT", 
        "Toy Story",
        "Toy Story 2",
        "Toy Story 3", 
        "The Incredibles",
        "Nemo",
        "Scott Piligrim Vs the World",
        "The BATMAN",
        "IT CHAPTER 1", 
        "Kingsman Secret Service", 
        "Joker",
        "The Dark Knight Rises",
        "Inception",
        "The Matrix",
        "The Martian",
        "Doctor Sleep",
        "The Conjuring",
        "The Shining",
        "Chucky",
        "Hot Fuzz",
        "Jackass",
        "Freddie Krueger",
        "Dont Breath",
        "Scream",
        "Star Wars"
    ]


    console.log("********************************************************")
    console.log("                                                        ")
    console.log("🎥 Welcome to the Movie Randomiser 🎥")
    console.log("                                                        ")
    console.log("********************************************************")

  

    setTimeout(function(){
    randomFilmGenerate(movies);    
}, 3000);                                

    function randomFilmGenerate(movies){
        var randomElement = Math.floor(Math.random()*movies.length);
            console.log("Randomising movie. Please wait...")
            console.log("                                                        ")
      
                console.log("********************************************************")
                console.log("                🎉GENERATED MOVIE IS: 🎉")
                console.log("                                                        ")
                console.log("🎥 MOVIE: " + (movies[randomElement]));
                console.log("                                                        ")
                console.log("********************************************************")
            return movies[randomElement];
        }

        setInterval(() => {
            askUser();
        }, 1000);
        
        

    async function askUser(){
        const userInput = await prompt("Would you like to generate a movie suggestion? (y/n): ");
            
        if(userInput === "y" || userInput === "Y"){
            randomFilmGenerate(movies);
        }else if(userInput === "n" || userInput === "N"){
            console.log("********************************************************")
            const userInput = await prompt("Would you like to add a movie to the list?. Type ADD to add a movie or Type EXIT to exit: ");
            console.log("********************************************************")
            console.log(" ")
            if(userInput === "add" || userInput === "ADD"){
                const userInput = await prompt("Please enter the name of the movie you would like to add: ");
                console.log(" ")
                movies.push(userInput);
                console.log("Movie added to list ✅");
                console.log(movies.at(movies.length-1)+" has been added to the list.");
                printMovies(movies);
            

            }else if(userInput === "exit" || userInput === "EXIT"){
                    console.log("********************************************************")
                    console.log("👋 Goodbye! 👋")
                    console.log("********************************************************")
                    process.exit();
        }else if(userInput === "print"){
            console.log(movies);
        }else{
            console.log("❌ INAVLID OPTION ❌")
        }
    }
}

function printMovies(movies){
    console.log(movies);
}
