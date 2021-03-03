package task3.react.services.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import task3.react.entities.Cards;
import task3.react.repositories.CardRepository;
import task3.react.services.CardService;

import java.util.List;
import java.util.Optional;

@Service
public  class CardServiceImpl implements CardService {

    @Autowired
    private CardRepository cardRepository;

    @Override
    public List<Cards> getAllCards() {
        return cardRepository.findAll();
    }

    @Override
    public Cards addCard(Cards card) {
        return cardRepository.save(card);
    }

    @Override
    public Cards saveCard(Cards card){
        return  cardRepository.save(card);
    }

    @Override
    public Cards getCard(Long id) {
        Optional<Cards> opt = cardRepository.findById(id);
        return opt.isPresent()?opt.get():null;
    }

    @Override
    public void deleteCard(Cards card) {
        cardRepository.delete(card);
    }
}
