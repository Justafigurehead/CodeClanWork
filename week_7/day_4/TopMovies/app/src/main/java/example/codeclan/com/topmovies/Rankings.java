package example.codeclan.com.topmovies;

import java.util.ArrayList;

public class Rankings {

    private ArrayList<Movie> rankedMovies;

    public Rankings(){
        rankedMovies = new ArrayList<Movie>();
    }

    public Rankings(ArrayList<Movie> rankedMovies){
        this.rankedMovies = new ArrayList<Movie>(rankedMovies);
    }

    public int getSize(){
        return this.rankedMovies.size();
    }

    public void addMovie(Movie movie){
        this.rankedMovies.add(movie);
    }

    public Movie getMovieFromIndex(int value){
        return this.rankedMovies.get(value);
    }

    public void addAllMovies( Movie[] movies){
        for (Movie movie : movies){
            int movieRank = movie.getRanking() -1;
            rankedMovies.add(movieRank, movie);
        }
    }
//
//    public Movie getMovieByRank(){
//
//    }
}
