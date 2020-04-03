package com.kgtoledoc.projectbackend.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kgtoledoc.projectbackend.model.Task;
import com.kgtoledoc.projectbackend.repository.TaskRepository;

@RestController
public class ApiController {
	
	@Autowired
	TaskRepository taskRepo;
	
	@RequestMapping(method=RequestMethod.POST,value="/insertTask",produces="application/json")
	public Object addTask(Principal principal, @RequestParam("task") String task) {
		taskRepo.save(new Task(task, principal.getName()));
		
		return "{\"Message\":\"Sucess\"}";
		
	}	
	
	@RequestMapping(value="/getTasks",produces="application/json")
	public List<Task> getTasks(Principal principal) {
		return taskRepo.getTaskByHolderName(principal.getName());
	}
	
//	@RequestMapping("/api/getDate")
//	public Object getDate() {
//		
//		User user = new User();
//		user.setId(1L);
//		user.setName("Kevin");
//		return user;
//	}
//	
//	@RequestMapping(value="/api/insertUser",produces="application/json")
//	public Object insertUser() {
//		
//		User user = new User();
//		user.setId(1L);
//		user.setName("Kevin");
//		
//		repo.save(user);
//		
//		return user;
//	}
//	
//	@RequestMapping(value="/api/getUsername",produces="application/json")
//	public Object getUsername(Principal principal) {
//		
//		User user = new User();
//		user.setId(1L);
//		user.setName(principal.getName());
//		
//		repo.save(user);
//		
//		return user;
//	}

}
