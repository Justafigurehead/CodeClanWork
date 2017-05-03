package example.codeclan.com.cards;

/**
 * Created by user on 01/03/2017.
 */

public class Dealer {

    Deck deck;
    Card topCard;

    public Dealer(Deck deck){
        this.deck = deck;

    }

    public Card deal(){
       topCard = deck.removeACard();
        return topCard;
    }
}
