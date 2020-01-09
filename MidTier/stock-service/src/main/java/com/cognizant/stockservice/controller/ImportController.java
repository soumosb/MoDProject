package com.cognizant.stockservice.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cognizant.stockservice.bean.SummaryDTO;
import com.cognizant.stockservice.exception.InvalidDetailsException;
import com.cognizant.stockservice.service.ImportService;

@RestController
@RequestMapping("/import")
public class ImportController {

	@Autowired
	ImportService importService;

	@PostMapping
	public void mapReapExcelDatatoDB(@RequestParam("file") MultipartFile reapExcelDataFile)
			throws IOException, InvalidDetailsException {
		importService.mapReapExcelDatatoDB(reapExcelDataFile);
	}

	@GetMapping
	public SummaryDTO getCompany() {
		return importService.getCompany();
	}
}
