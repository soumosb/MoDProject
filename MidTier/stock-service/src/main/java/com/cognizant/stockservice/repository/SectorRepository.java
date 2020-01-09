package com.cognizant.stockservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.stockservice.bean.Sector;


@Repository
public interface SectorRepository extends JpaRepository<Sector, Long> {

}
