package com.kgtoledoc.projectbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kgtoledoc.projectbackend.model.Task;



public interface TaskRepository extends JpaRepository <Task, Long> {

	public List<Task> getTaskByHolderName(String holderName);
}
