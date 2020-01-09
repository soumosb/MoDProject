package com.cognizant.stockservice.controller;

import java.sql.Time;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.stockservice.bean.StockPrice;
import com.cognizant.stockservice.service.ChartService;

@RequestMapping("/charts")
@RestController
public class ChartController {

	@Autowired
	private ChartService chartService;

	@GetMapping("/{companyCode}/{startTime}/{endTime}")
	public List<StockPrice> getAllCompany(@PathVariable long companyCode, @PathVariable Time startTime,
			@PathVariable Time endTime) {

		return chartService.getCompanyList(companyCode, startTime, endTime);
	}

}
