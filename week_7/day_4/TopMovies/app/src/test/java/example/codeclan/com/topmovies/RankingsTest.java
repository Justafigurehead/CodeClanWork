package example.codeclan.com.topmovies;


import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RankingsTest {

    private Rankings rankings;
    private Movie movie1;
    private Movie movie2;
    private Movie movie3;
    private Movie movie4;
    private Movie movie5;
    private Movie movie6;
    private Movie movie7;
    private Movie movie8;
    private Movie movie9;
    private Movie movie10;

    @Before
    public void before(){
        rankings = new Rankings();
        movie1 = new Movie ("Indiana Jones: Raiders of the Lost Ark", "Adventure", 1);
        movie2 = new Movie("Gladiator", "Drama and Adventure", 2);
        movie3 = new Movie("Donnie Darko", "Madness", 3);
        movie4 = new Movie("Gladiator", "Drama and Adventure", 4);
        movie5 = new Movie("Gladiator", "Drama and Adventure", 5);
        movie6 = new Movie("Gladiator", "Drama and Adventure", 6);
        movie7 = new Movie("Gladiator", "Drama and Adventure", 7);
        movie8 = new Movie("Gladiator", "Drama and Adventure", 8);
        movie9 = new Movie("Gladiator", "Drama and Adventure", 9);
        movie10 = new Movie("Gladiator", "Drama and Adventure", 10);


    }

    @Test
    public void testEmptyRankedMoviesArray(){
        assertEquals(0, rankings.getSize());
    }

    @Test
    public void addMovieToRankings(){
        rankings.addMovie(movie1);
        assertEquals(1, rankings.getSize());
    }

    @Test
    public void insertASeriesOfMovies(){
        Movie[] movies = {movie1, movie2, movie3, movie4, movie5,movie6,movie7,movie8, movie9,movie10 };
        rankings.addAllMovies(movies);
        assertEquals(10, rankings.getSize());
    }

    @Test
    public void getAtIndex(){
        Movie[] movies = {movie1, movie2, movie3, movie4, movie5,movie6,movie7,movie8, movie9,movie10 };
        rankings.addAllMovies(movies);
        Movie movie = rankings.getMovieFromIndex(1);
        assertEquals("Gladiator", movie.getTitle());
    }
}
