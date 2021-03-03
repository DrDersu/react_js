package task3.react.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import task3.react.entities.Cards;

@Repository
@Transactional
public interface CardRepository extends JpaRepository<Cards, Long> {



}
