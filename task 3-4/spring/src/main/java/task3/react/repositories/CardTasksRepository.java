package task3.react.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import task3.react.entities.CardTasks;


@Repository
@Transactional
public interface CardTasksRepository extends JpaRepository<CardTasks, Long> {



}
