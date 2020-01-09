package com.cognizant.stockservice.repository;

import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.stockservice.bean.StockPrice;

public interface StockPriceRepository extends JpaRepository<StockPrice, Integer> {
	List<StockPrice> findByCompanyCodeAndTimeBetween(long companyCode, Time startTime, Time endTime);
}
