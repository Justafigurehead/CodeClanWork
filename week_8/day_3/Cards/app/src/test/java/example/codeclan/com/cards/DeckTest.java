package example.codeclan.com.cards;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by user on 01/03/2017.
 */

public class DeckTest {

    Deck deck;
    Player player;
    Dealer dealer;

    @Before
    public void before(){
        deck = new Deck();
        player = new Player("Michaela");
        dealer = new Dealer(deck);
    }

    @Test
    public void getLengthOfDeck(){
        assertEquals(52, deck.getLength());
    }

    @Test
    public void getCardValue(){
        player.receiveACard(dealer);
        assertEquals(10, player.getHandValue());
    }


}
