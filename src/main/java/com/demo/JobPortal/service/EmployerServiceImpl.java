package com.demo.JobPortal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.JobPortal.entity.Employer;
import com.demo.JobPortal.repository.EmployerRepository;

@Service
public class EmployerServiceImpl implements EmployerService {
	
	@Autowired
	private EmployerRepository employerRepository;

	@Override
	public Employer addEmployer(Employer employer) {
		return employerRepository.save(employer);
	}

	@Override
	public List<Employer> getAllEmployers() {
		return employerRepository.findAll();
	}

	@Override
	public Optional<Employer> getEmployerById(long id) {
		Optional<Employer> employer = employerRepository.findById(id);
		if(employer!=null)
		{
			return employer;
		}
		else 
		{
			throw new Error("employer not found with given id");
		}
	}

	@Override
	public Employer updateEmployer(Employer employer) {
		return employerRepository.save(employer);
	}

	@Override
	public Optional<Employer> deleteEmployer(long id) {
		Optional<Employer> employer = employerRepository.findById(id);
		if(employer!=null)
		{
			employerRepository.deleteById(id);
			return employer;
		}
		else 
		{
			throw new Error("employer not found with given id");
		}
	}

}
