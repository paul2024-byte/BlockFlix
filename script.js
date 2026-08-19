/* =========================================
   BLOCKFLIX JAVASCRIPT
   COMPLETE REPLACEMENT VERSION
========================================= */


/* =========================================
   MOVIE DATABASE
========================================= */

const movies = [

    {
        id: "night-adventure",
        title: "Night Adventure",
        genre: "Adventure",
        year: "2026",
        rating: "8.5",

        poster:
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",

        description:
            "A mysterious night adventure full of exploration and unexpected discoveries.",

        video:
            "https://media.w3.org/2010/05/sintel/trailer.mp4"
    },


    {
        id: "galaxy-run",
        title: "Galaxy Run",
        genre: "Sci-Fi",
        year: "2026",
        rating: "8.2",

        poster:
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85",

        description:
            "A futuristic adventure through distant galaxies and unknown worlds.",

        video:
            "https://media.w3.org/2010/05/bunny/trailer.mp4"
    },


    {
        id: "lost-island",
        title: "Lost Island",
        genre: "Adventure",
        year: "2026",
        rating: "8.0",

        poster:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",

        description:
            "A group of explorers discover a mysterious island hiding an incredible secret.",

        video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },


    {
        id: "final-fighter",
        title: "Final Fighter",
        genre: "Action",
        year: "2026",
        rating: "8.4",

        poster:
            "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=85",

        description:
            "One fighter enters the biggest battle of his life.",

        video:
            "https://media.w3.org/2010/05/bunny/movie.mp4"
    },


    {
        id: "the-journey",
        title: "The Journey",
        genre: "Drama",
        year: "2026",
        rating: "8.1",

        poster:
            "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=900&q=85",

        description:
            "A powerful journey about family, courage and discovering yourself.",

        video:
            "https://media.w3.org/2010/05/sintel/trailer.mp4"
    },


    {
        id: "dark-city",
        title: "Dark City",
        genre: "Action",
        year: "2026",
        rating: "7.9",

        poster:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",

        description:
            "A dangerous city becomes the battleground for an unexpected hero.",

        video:
            "https://media.w3.org/2010/05/bunny/trailer.mp4"
    },


    {
        id: "ocean-mystery",
        title: "Ocean Mystery",
        genre: "Mystery",
        year: "2026",
        rating: "8.3",

        poster:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",

        description:
            "A mysterious discovery beneath the ocean leads to an unforgettable adventure.",

        video:
            "https://vjs.zencdn.net/v/oceans.mp4"
    }

];


/* =========================================
   FEATURED MOVIE
========================================= */

const featuredMovie =
    movies.find(function(movie) {

        return movie.id === "galaxy-run";

    });


/* =========================================
   POPULAR MOVIES
========================================= */

const popularMovies = [

    movies[1],
    movies[0],
    movies[3],
    movies[5]

];


/* =========================================
   NEW RELEASES
========================================= */

const newReleases = [

    movies[6],
    movies[0],
    movies[1],
    movies[2]

];


/* =========================================
   WATCHLIST
========================================= */

function getWatchlist() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "blockflixWatchlist"
            )
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveWatchlist(list) {

    localStorage.setItem(
        "blockflixWatchlist",
        JSON.stringify(list)
    );

}


function isInWatchlist(movieId) {

    const list = getWatchlist();

    return list.some(function(movie) {

        return movie.id === movieId;

    });

}


/* =========================================
   TOGGLE WATCHLIST
========================================= */

function toggleWatchlist(movieId) {

    const movie =
        movies.find(function(item) {

            return item.id === movieId;

        });


    if (!movie) {
        return;
    }


    let list =
        getWatchlist();


    const exists =
        list.some(function(item) {

            return item.id === movieId;

        });


    if (exists) {

        list =
            list.filter(function(item) {

                return item.id !== movieId;

            });

    } else {

        list.push(movie);

    }


    saveWatchlist(list);

    updateWatchlistButton(movieId);

    updateAllWatchlistButtons();

    loadWatchlistPage();

}


/* =========================================
   REMOVE FROM WATCHLIST
========================================= */

function removeFromWatchlist(movieId) {

    let list =
        getWatchlist();


    list =
        list.filter(function(movie) {

            return movie.id !== movieId;

        });


    saveWatchlist(list);

    loadWatchlistPage();

    updateAllWatchlistButtons();

}


/* =========================================
   MOVIE PAGE WATCHLIST BUTTON
========================================= */

function updateWatchlistButton(movieId) {

    const button =
        document.getElementById(
            "watchlistButton"
        );


    if (!button) {
        return;
    }


    if (isInWatchlist(movieId)) {

        button.textContent =
            "✅ Added to Watchlist";

    } else {

        button.textContent =
            "❤️ Add to Watchlist";

    }

}


/* =========================================
   CARD WATCHLIST BUTTONS
========================================= */

function updateAllWatchlistButtons() {

    const buttons =
        document.querySelectorAll(
            ".card-watchlist-button"
        );


    buttons.forEach(function(button) {

        const movieId =
            button.dataset.movieId;


        if (isInWatchlist(movieId)) {

            button.textContent =
                "✅ In Watchlist";

            button.classList.add(
                "in-watchlist"
            );

        } else {

            button.textContent =
                "❤️ Add to Watchlist";

            button.classList.remove(
                "in-watchlist"
            );

        }

    });

}


/* =========================================
   CONTINUE WATCHING
========================================= */

function getContinueWatching() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "blockflixContinueWatching"
            )
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveContinueWatching(list) {

    localStorage.setItem(
        "blockflixContinueWatching",
        JSON.stringify(list)
    );

}


function addToContinueWatching(movieId) {

    const movie =
        movies.find(function(item) {

            return item.id === movieId;

        });


    if (!movie) {
        return;
    }


    let list =
        getContinueWatching();


    list =
        list.filter(function(item) {

            return item.id !== movieId;

        });


    list.unshift(movie);


    list =
        list.slice(0, 4);


    saveContinueWatching(list);

}


/* =========================================
   CREATE MOVIE CARD
========================================= */

function createMovieCard(
    movie,
    showRemoveButton = false
) {

    const wrapper =
        document.createElement("div");


    wrapper.className =
        "watchlist-card-wrapper";


    const card =
        document.createElement("a");


    card.href =
        "movie.html?id=" +
        encodeURIComponent(movie.id);


    card.className =
        "movie-link";


    card.innerHTML = `

        <div class="movie-card">

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                loading="lazy"
            >

            <div class="movie-card-content">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.genre} • ${movie.year}
                </p>

                <p class="movie-rating">
                    ⭐ ${movie.rating}/10
                </p>

                <span class="watch-now">
                    ▶ Watch Now
                </span>

            </div>

        </div>

    `;


    wrapper.appendChild(card);


    /* WATCHLIST BUTTON */

    const watchlistButton =
        document.createElement("button");


    watchlistButton.type =
        "button";


    watchlistButton.className =
        "card-watchlist-button";


    watchlistButton.dataset.movieId =
        movie.id;


    if (isInWatchlist(movie.id)) {

        watchlistButton.textContent =
            "✅ In Watchlist";

        watchlistButton.classList.add(
            "in-watchlist"
        );

    } else {

        watchlistButton.textContent =
            "❤️ Add to Watchlist";

    }


    watchlistButton.onclick =
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            toggleWatchlist(movie.id);

        };


    wrapper.appendChild(
        watchlistButton
    );


    /* REMOVE BUTTON */

    if (showRemoveButton) {

        const removeButton =
            document.createElement("button");


        removeButton.type =
            "button";


        removeButton.className =
            "remove-watchlist-button";


        removeButton.textContent =
            "🗑️ Remove";


        removeButton.onclick =
            function(event) {

                event.preventDefault();

                event.stopPropagation();

                removeFromWatchlist(
                    movie.id
                );

            };


        wrapper.appendChild(
            removeButton
        );

    }


    return wrapper;

}


/* =========================================
   DISPLAY ALL MOVIES
========================================= */

function displayMovies(list) {

    const grid =
        document.getElementById(
            "movieGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML =
        "";


    if (!list || list.length === 0) {

        grid.innerHTML = `

            <p style="
                grid-column: 1 / -1;
                text-align: center;
                color: #aaa;
                font-size: 18px;
                padding: 30px;
            ">

                🎬 No movies found.

                <br>

                Try another search.

            </p>

        `;

        return;

    }


    list.forEach(function(movie) {

        grid.appendChild(
            createMovieCard(movie)
        );

    });


    updateAllWatchlistButtons();

}


/* =========================================
   DISPLAY POPULAR
========================================= */

function displayPopularMovies() {

    const grid =
        document.getElementById(
            "popularMovieGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML =
        "";


    popularMovies.forEach(function(movie) {

        grid.appendChild(
            createMovieCard(movie)
        );

    });


    updateAllWatchlistButtons();

}


/* =========================================
   DISPLAY NEW RELEASES
========================================= */

function displayNewReleases() {

    const grid =
        document.getElementById(
            "newReleaseGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML =
        "";


    newReleases.forEach(function(movie) {

        grid.appendChild(
            createMovieCard(movie)
        );

    });


    updateAllWatchlistButtons();

}


/* =========================================
   DISPLAY CONTINUE WATCHING
========================================= */

function displayContinueWatching() {

    const section =
        document.getElementById(
            "continueWatchingSection"
        );


    const grid =
        document.getElementById(
            "continueWatchingGrid"
        );


    if (!section || !grid) {
        return;
    }


    const list =
        getContinueWatching();


    if (list.length === 0) {

        section.style.display =
            "none";

        return;

    }


    section.style.display =
        "block";


    grid.innerHTML =
        "";


    list.forEach(function(movie) {

        grid.appendChild(
            createMovieCard(movie)
        );

    });


    updateAllWatchlistButtons();

}


/* =========================================
   CATEGORY STATUS
========================================= */

function updateCategoryStatus(category) {

    const status =
        document.getElementById(
            "categoryStatus"
        );


    if (!status) {
        return;
    }


    if (category === "All") {

        status.textContent =
            "Showing: All Movies";

    } else {

        status.textContent =
            "Showing: " +
            category +
            " Movies";

    }

}


/* =========================================
   ACTIVE CATEGORY
========================================= */

function updateActiveCategory(category) {

    const buttons =
        document.querySelectorAll(
            ".category-button"
        );


    buttons.forEach(function(button) {

        button.classList.remove(
            "active"
        );


        if (
            button.textContent
                .trim()
                .toLowerCase()
            ===
            category.toLowerCase()
        ) {

            button.classList.add(
                "active"
            );

        }

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterMovies(category) {

    updateCategoryStatus(
        category
    );

    updateActiveCategory(
        category
    );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (searchInput) {

        searchInput.value =
            "";

    }


    if (category === "All") {

        displayMovies(
            movies
        );

        return;

    }


    const filtered =
        movies.filter(function(movie) {

            return movie.genre === category;

        });


    displayMovies(
        filtered
    );

}


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        function() {

            const search =
                input.value
                    .toLowerCase()
                    .trim();


            if (search === "") {

                displayMovies(
                    movies
                );

                updateCategoryStatus(
                    "All"
                );

                updateActiveCategory(
                    "All"
                );

                return;

            }


            const results =
                movies.filter(function(movie) {

                    return (

                        movie.title
                            .toLowerCase()
                            .includes(search)

                        ||

                        movie.genre
                            .toLowerCase()
                            .includes(search)

                        ||

                        movie.year
                            .toLowerCase()
                            .includes(search)

                        ||

                        movie.rating
                            .toLowerCase()
                            .includes(search)

                    );

                });


            displayMovies(
                results
            );


            updateActiveCategory(
                ""
            );


            const status =
                document.getElementById(
                    "categoryStatus"
                );


            if (status) {

                status.textContent =
                    "Search results for: " +
                    input.value;

            }

        }
    );

}


/* =========================================
   FEATURED MOVIE
========================================= */

function setupFeaturedMovie() {

    const section =
        document.querySelector(
            ".featured-movie"
        );


    if (!section || !featuredMovie) {
        return;
    }


    /*
     * Use the selected movie poster
     * as the Featured Movie background.
     */

    section.style.backgroundImage = `

        linear-gradient(
            90deg,
            rgba(0,0,0,0.96) 0%,
            rgba(0,0,0,0.78) 38%,
            rgba(0,0,0,0.35) 72%,
            rgba(0,0,0,0.72) 100%
        ),

        linear-gradient(
            180deg,
            rgba(0,0,0,0.1),
            rgba(0,0,0,0.7)
        ),

        url("${featuredMovie.poster}")

    `;


    section.style.backgroundSize =
        "cover";


    section.style.backgroundPosition =
        "center";


    section.style.backgroundRepeat =
        "no-repeat";


    /*
     * Update title.
     */

    const title =
        section.querySelector(
            "h2"
        );


    if (title) {

        title.textContent =
            featuredMovie.title;

    }


    /*
     * Update description.
     */

    const description =
        section.querySelector(
            "p"
        );


    if (description) {

        description.textContent =
            featuredMovie.description;

    }


    /*
     * Update Watch Now link.
     */

    const button =
        section.querySelector(
            ".featured-button"
        );


    if (button) {

        button.href =
            "movie.html?id=" +
            encodeURIComponent(
                featuredMovie.id
            );

    }

}


/* =========================================
   MOVIE PAGE
========================================= */

function loadMoviePage() {

    const title =
        document.getElementById(
            "movieTitle"
        );


    if (!title) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const movieId =
        params.get("id");


    if (!movieId) {

        title.textContent =
            "Movie not found";

        return;

    }


    const movie =
        movies.find(function(item) {

            return item.id === movieId;

        });


    if (!movie) {

        title.textContent =
            "Movie not found";

        return;

    }


    addToContinueWatching(
        movie.id
    );


    const poster =
        document.getElementById(
            "moviePoster"
        );


    const info =
        document.getElementById(
            "movieInfo"
        );


    const description =
        document.getElementById(
            "movieDescription"
        );


    const video =
        document.getElementById(
            "movieVideo"
        );


    const button =
        document.getElementById(
            "watchlistButton"
        );


    const downloadButton =
        document.getElementById(
            "downloadButton"
        );


    title.textContent =
        movie.title;


    if (poster) {

        poster.src =
            movie.poster;

        poster.alt =
            movie.title;

    }


    if (info) {

        info.textContent =
            "⭐ " +
            movie.rating +
            " • " +
            movie.genre +
            " • " +
            movie.year;

    }


    if (description) {

        description.textContent =
            movie.description;

    }


    if (video) {

        video.pause();

        video.removeAttribute(
            "src"
        );

        video.src =
            movie.video;

        video.load();


        video.onplay =
            function() {

                addToContinueWatching(
                    movie.id
                );

            };


        video.onerror =
            function() {

                console.log(
                    "BlockFlix video failed:",
                    movie.video
                );

            };

    }


    if (downloadButton) {

        downloadButton.href =
            movie.video;

        downloadButton.setAttribute(
            "download",
            movie.title + ".mp4"
        );

    }


    if (button) {

        updateWatchlistButton(
            movie.id
        );


        button.onclick =
            function() {

                toggleWatchlist(
                    movie.id
                );

            };

    }

}


/* =========================================
   WATCHLIST PAGE
========================================= */

function loadWatchlistPage() {

    let container =
        document.getElementById(
            "watchlistCont"
        );


    if (!container) {

        container =
            document.getElementById(
                "watchlist-container"
            );

    }


    if (!container) {
        return;
    }


    const list =
        getWatchlist();


    container.innerHTML =
        "";


    if (list.length === 0) {

        container.innerHTML = `

            <p style="
                grid-column: 1 / -1;
                text-align: center;
                color: #aaa;
                font-size: 18px;
                padding: 40px 20px;
            ">

                ❤️ Your Watchlist is empty.

                <br><br>

                Add a movie and it will appear here.

            </p>

        `;

        return;

    }


    list.forEach(function(movie) {

        container.appendChild(
            createMovieCard(
                movie,
                true
            )
        );

    });


    updateAllWatchlistButtons();

}


/* =========================================
   PAGE STARTUP
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Featured movie
         */

        setupFeaturedMovie();


        /*
         * Homepage
         */

        displayPopularMovies();

        displayNewReleases();

        displayContinueWatching();

        displayMovies(
            movies
        );

        setupSearch();


        /*
         * Movie page
         */

        loadMoviePage();


        /*
         * Watchlist page
         */

        loadWatchlistPage();

    }
);
