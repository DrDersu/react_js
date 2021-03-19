package com.example.reactProject.repositories;

import com.example.reactProject.entity.Card;
import com.example.reactProject.entity.CardTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface RepositoryTasks extends JpaRepository<CardTask,Long> {

    void deleteById(Long id);
    CardTask getById(Long id);
}
