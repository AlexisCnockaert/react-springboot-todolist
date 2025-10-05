package com.example.todo.controller;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody String title) {
        Todo todo = new Todo(title.replace("\"", ""));
        return todoRepository.save(todo);
    }

    @PutMapping("/{id}/done")
    public Todo markDone(@PathVariable String id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setDone(!todo.isDone());
        return todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable String id) {
        todoRepository.deleteById(id);
    }
}