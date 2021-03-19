package com.example.reactProject.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="card_tasks")
public
class CardTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="addedDate")
    private Date addedDate;

    @Column(name="cardText")
    private String cardText;

    @Column(name="done")
    private Boolean done;







}
