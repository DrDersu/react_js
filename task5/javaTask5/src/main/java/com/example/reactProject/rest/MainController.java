package com.example.reactProject.rest;

import com.example.reactProject.Services.InterFaceAll;
import com.example.reactProject.Services.UserService;
import com.example.reactProject.dto.UserDTO;
import com.example.reactProject.entity.Card;
import com.example.reactProject.entity.CardTask;
import com.example.reactProject.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class MainController {

    @Autowired
    private InterFaceAll all;

    @Autowired
    private UserService userService;


    @GetMapping(value="/getCard")
    public ResponseEntity<?> getAllCards() {
        List<Card> cards = all.getAll();
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

    @PostMapping(value="/addCard")
    public ResponseEntity<?> addCard(@RequestBody Card card) {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        card.setAddedDate(date);
        all.addCard(card);
        return ResponseEntity.ok(card);

    }

    @GetMapping(value="/getOneCard/{id}")
    public ResponseEntity getCard(@PathVariable(name="id") Long id) {
        Card card = all.getOneCard(id);
        return ResponseEntity.ok(card);

    }

    @PutMapping(value="/editCard")
    public ResponseEntity<?> editCard(@RequestBody Card card) {
        all.editCard(card);
        return ResponseEntity.ok(card);

    }


    @DeleteMapping(value="/delCard")
    public ResponseEntity<?> delCard(@RequestBody Long id) {
        all.deleteCard(id);
        return ResponseEntity.ok(id);

    }

    @PutMapping(value="/addTask")
    public ResponseEntity<?> addTask(@RequestBody Card card) {
        Card card1 = new Card();
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        CardTask cardTask = new CardTask();
        cardTask.setId(null);
        cardTask.setName("task");
        cardTask.setCardText(card.getName());
        System.out.println(card.getName());
        cardTask.setAddedDate(date);
        cardTask.setDone(false);
        all.addCardTask(cardTask);
        if(all.getOneCard(card.getId())!=null) {
            card1=all.getOneCard(card.getId());
        }
        if(card1.getTasks()==null) {
            ArrayList<CardTask> tasks = new ArrayList<>();
            tasks.add(cardTask);
            card1.setTasks(tasks);

        }
        else {
            card1.getTasks().add(cardTask);

        }

        all.editCard(card1);
        return ResponseEntity.ok(card1);

    }

    @GetMapping(value="/getByName/{name}")
    public ResponseEntity<?> getByName(@PathVariable(name = "name") String name) {
        List<Card> cards = all.getCardByName(name);
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }



    @GetMapping(value = "/profile")
    public ResponseEntity<?> profilePage(){
        Users user = getUser();
        return new ResponseEntity<>(new UserDTO(user.getId(), user.getEmail(), user.getRoles()), HttpStatus.OK);
    }

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            Users user = (Users) authentication.getPrincipal();
            return user;
        }
        return null;
    }



}
