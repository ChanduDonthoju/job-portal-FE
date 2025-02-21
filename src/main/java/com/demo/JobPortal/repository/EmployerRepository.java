package com.demo.JobPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.JobPortal.entity.Employer;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long>{

}
