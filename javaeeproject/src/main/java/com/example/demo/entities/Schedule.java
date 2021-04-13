package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "schedules")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long user_id;
    @Column(name = "content")
    private String content;
    @Column(name = "created_date")
    private Date created_date;
    @Column(name = "updated_date")
    private Date updated_date;


}
