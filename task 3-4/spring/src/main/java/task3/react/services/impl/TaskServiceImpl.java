package task3.react.services.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import task3.react.entities.CardTasks;
import task3.react.entities.Cards;
import task3.react.repositories.CardRepository;
import task3.react.repositories.CardTasksRepository;
import task3.react.services.CardTasksService;

import java.util.List;

@Service
public  class TaskServiceImpl implements CardTasksService {

    @Autowired
    private CardTasksRepository cardtaskRepository;

    @Override
    public List<CardTasks> getAllCardTasks() {
        return cardtaskRepository.findAll();
    }

    @Override
    public CardTasks addTask(CardTasks task) {
        return cardtaskRepository.save(task);
    }
}
