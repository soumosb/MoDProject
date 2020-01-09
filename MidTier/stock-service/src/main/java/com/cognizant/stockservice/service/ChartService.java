package com.cognizant.stockservice.service;

import java.sql.Time;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockservice.bean.StockPrice;
import com.cognizant.stockservice.repository.StockPriceRepository;

@Service
public class ChartService {

	@Autowired
	private StockPriceRepository stockPriceRepository;

	@Transactional
	public List<StockPrice> getCompanyList(long companyCode, Time startTime, Time endTime) {
		return stockPriceRepository.findByCompanyCodeAndTimeBetween(companyCode, startTime, endTime);
	}

}
