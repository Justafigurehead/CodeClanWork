package example.codeclan.com.topmovies;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;


public class MovieTest {

    private Movie indyOne;

    @Before
    public void before(){
        indyOne = new Movie ("Indiana Jones: Raiders of the Lost Ark", "Adventure", 1);
    }

    @Test
    public void getTitle(){
        assertEquals("Indiana Jones: Raiders of the Lost Ark", indyOne.getTitle());
    }

    @Test
    public void testSetTitle(){
        indyOne.setTitle("Indy One");
        assertEquals("Indy One", indyOne.getTitle());
    }

    @Test
    public void getGenre(){
        assertEquals("Adventure", indyOne.getGenre());
    }

    @Test
    public void testCanOverridetoString(){
        assertEquals("Rank 1 movie is Indiana Jones: Raiders of the Lost Ark. It's genre is Adventure.", indyOne.toString());
    }

}
