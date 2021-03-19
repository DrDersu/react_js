package com.example.reactProject.repositories;

import com.example.reactProject.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface RepositoryCards extends JpaRepository<Card,Long> {

    void deleteById(Long id);
    Card getById(Long id);
    List<Card> getCardByNameContaining(String name);
}
