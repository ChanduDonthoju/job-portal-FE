package com.demo.JobPortal.service;

import java.util.List;
import java.util.Optional;

import com.demo.JobPortal.entity.User;

public interface UserService {
	
	
	public List<User> getAllUsers();
	public User addUser(User user);
	public User updateUser(User user);
	public Optional<User> deleteUser(long id);
	
}
