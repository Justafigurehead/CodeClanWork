package example.codeclan.com.eightball;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.ArrayList;



public class AnswerTest {

    private ArrayList<String> testAnswers;
    private Answer eightball;
    private Answer spyEightBall;


    @Before
    public void before(){
        testAnswers = new ArrayList<String>();
        testAnswers.add("No way");
        testAnswers.add("Yes");
        testAnswers.add("Feck Sake, go away");
        eightball = new Answer (testAnswers);
        spyEightBall = Mockito.spy(eightball);
    }

    @Test
    public void testArrayListSize(){
        assertEquals(3, eightball.getSize());
    }

    @Test
    public void testgetAnswers(){
        assertEquals("No way", eightball.getAnswerAtIndex(0));
    }

    @Test
    public void testRandomAnswer(){
        assertTrue(testAnswers.contains(eightball.getAnswer()));
    }

//    @Test
//    public void testTakeTurnPassStub(){
//        Mockito.when(spyAnswers.getAnswer()).thenReturn(0);
//        assertEquals("Yes", .nextTurn());
//    }


    @Test
    public void testAddAnswerToList(){
        int originalLength = eightball.getSize();
        eightball.addAnswer("Try again later.");
        assertEquals(originalLength + 1, eightball.getSize());
    }

    @Test
    public void testDefault(){
        Answer nineball = new Answer();
        assertNotNull(nineball.getAnswers());
    }
}
