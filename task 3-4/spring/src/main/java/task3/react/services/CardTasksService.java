package task3.react.services;

import task3.react.entities.CardTasks;

import java.util.List;

public interface CardTasksService {

    List<CardTasks> getAllCardTasks();
    CardTasks addTask(CardTasks task);

}
