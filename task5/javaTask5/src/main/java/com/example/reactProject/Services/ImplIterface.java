package com.example.reactProject.Services;

import com.example.reactProject.entity.Card;
import com.example.reactProject.entity.CardTask;
import com.example.reactProject.repositories.RepositoryCards;
import com.example.reactProject.repositories.RepositoryTasks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ImplIterface implements InterFaceAll{
    @Autowired
    private RepositoryCards repositoryCards;

    @Autowired
    private RepositoryTasks repositoryTasks;



    @Override
    public List<Card> getAll() {
        return repositoryCards.findAll();
    }

    @Override
    public Card getOneCard(Long id) {
        return repositoryCards.getById(id);
    }

    @Override
    public void deleteCard(Long id) {

         repositoryCards.deleteById(id);
    }

    @Override
    public Card addCard(Card card) {
        return repositoryCards.save(card);
    }

    @Override
    public Card editCard(Card card) {
        return repositoryCards.save(card);
    }

    @Override
    public List<CardTask> getAllTask() {
        return repositoryTasks.findAll();
    }

    @Override
    public CardTask getOneTask(Long id) {
        return repositoryTasks.getById(id);
    }

    @Override
    public List<Card> getCardByName(String name) {
        return repositoryCards.getCardByNameContaining(name);
    }

    @Override
    public void deleteCardTask(Long id) {
        repositoryTasks.deleteById(id);
    }

    @Override
    public CardTask addCardTask(CardTask card) {
        return repositoryTasks.save(card);
    }

    @Override
    public CardTask editCardTask(CardTask card) {
        return repositoryTasks.save(card);
    }
}
