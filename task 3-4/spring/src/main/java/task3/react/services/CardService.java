package task3.react.services;

import task3.react.entities.Cards;

import java.util.List;

public interface CardService {

    List<Cards> getAllCards();
    Cards addCard(Cards card);
    Cards getCard(Long id);
    Cards saveCard(Cards card);
    void deleteCard(Cards card);

}
