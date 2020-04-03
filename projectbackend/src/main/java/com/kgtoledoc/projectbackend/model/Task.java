package com.kgtoledoc.projectbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tasks")
public class Task {
	
	/*
	 * @Id
	 * 
	 * @Column(name="id")
	 * 
	 * @GeneratedValue() private Long id;
	 * 
	 * @Column(name="name") private String name;
	 * 
	 * 
	 * public Long getId() { return id; } public void setId(Long id) { this.id = id;
	 * } public String getName() { return name; } public void setName(String name) {
	 * this.name = name; }
	 */
	
	@Id
	@GeneratedValue()
	@Column(name="id")
	private Long id;
	
	@Column(name="task")
	private String task;
	
	@Column(name="holderName")
	private String holderName;

	public Long getId() {
		return id;
	}	

	public Task(String task, String holderName) {
		super();
		this.task = task;
		this.holderName = holderName;
	}

	public String getTask() {
		return task;
	}

	public Task() {
		super();
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}
	
	

}
