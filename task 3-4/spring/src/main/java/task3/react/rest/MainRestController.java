package task3.react.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import task3.react.entities.CardTasks;
import task3.react.entities.Cards;
import task3.react.services.CardService;
import task3.react.services.CardTasksService;

import java.sql.Timestamp;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class MainRestController {

    @Autowired
    private CardTasksService cardTasksService;
    @Autowired
    private CardService cardService;


    @GetMapping(value = "/alltasks")
    public ResponseEntity<?> getAllCardTasks(){
        List<CardTasks> tasks = cardTasksService.getAllCardTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @GetMapping(value = "/allcards")
    public ResponseEntity<?> getAllCards(){
        List<Cards> card = cardService.getAllCards();
        return new ResponseEntity<>(card, HttpStatus.OK);
    }

    @PostMapping(value = "/addcard")
    public ResponseEntity<?> addCard(@RequestBody Cards card){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        card.setAddedDate(timestamp);
        cardService.addCard(card);
        return ResponseEntity.ok(card);
    }

    @PostMapping(value = "/addtask")
    public ResponseEntity<?> addTask(@RequestBody CardTasks card){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        card.setAdded_date(timestamp);
        cardTasksService.addTask(card);
        System.out.println("ok");
        return ResponseEntity.ok(card);
    }


    @PutMapping(value = "/saveitem")
    public ResponseEntity<?> saveItem(@RequestBody Cards card){
        cardService.saveCard(card);
        return ResponseEntity.ok(card);
    }

    @GetMapping(value = "/getitem/{id}")
    public ResponseEntity<?> getCard(@PathVariable(name = "id") Long id){
        Cards card = cardService.getCard(id);
        if(card!=null){
            return ResponseEntity.ok(card);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/search/{data}")
    public ResponseEntity<?> searchCard(@PathVariable(name = "data") String s){
        List<Cards> card = cardService.getAllCards();
        ArrayList<Cards> card2 = new ArrayList<>();

        int h =card.size();
        for (int i=0;i<h;i++){
            if (isContainExactWord(card.get(i).getName(),s)){
                card2.add(card.get(i));
            }
        }
        if(card.size()!=0){
            return new ResponseEntity<>(card2, HttpStatus.OK);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/deleteitem")
    public ResponseEntity<?> deleteItem(@RequestBody Cards card){
        Cards checkCard = cardService.getCard(card.getId());
        if(checkCard!=null){
            cardService.deleteCard(checkCard);
            return ResponseEntity.ok(checkCard);
        }
        return ResponseEntity.ok(card);
    }



    private boolean isContainExactWord(String fullString, String partWord){
        String pattern = partWord;
        Pattern p=Pattern.compile(pattern);
        Matcher m=p.matcher(fullString);
        return m.find();
    }


}
