package com.example.reactProject.Services;

import com.example.reactProject.entity.Card;
import com.example.reactProject.entity.CardTask;

import java.util.List;

public interface InterFaceAll {


    List<Card> getAll();
    Card getOneCard(Long id);
    void deleteCard(Long id);
    Card addCard(Card card);
    Card editCard(Card card);
    List<CardTask> getAllTask();
    CardTask getOneTask(Long id);
    void deleteCardTask(Long id);
    CardTask addCardTask(CardTask card);
    CardTask editCardTask(CardTask card);
    List<Card> getCardByName(String name);
}
