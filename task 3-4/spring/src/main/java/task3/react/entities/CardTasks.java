package task3.react.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

@Entity
@Table(name = "cardstask_t")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardTasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "card")
    private Long card;

    @Column(name = "task_text")
    private String  taskText;

    @Column(name = "added_date")
    private Date added_date;

    @Column(name = "done")
    private boolean done;


}
