import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';
import { Company } from '../../company';
import { Summary } from '@angular/compiler';
import { SummaryUpload } from '../../summaryUpload';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  form: FormGroup;
  error: string = '';
  summary: SummaryUpload;
  uploded: boolean;
  loader: boolean;
  valid:boolean;
  message:string;
  constructor(private formBuilder: FormBuilder, private stockService: StockService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      upload: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.name.split('.').pop() != 'xlsx') {
        this.valid = true;
        this.message = "Choose Excel file";
      }
      else {
        this.valid = false;
      }
  
      this.form.get('upload').setValue(file);
      this.error = '';
      this.uploded = false;
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('upload').value);
    this.loader = true;
    this.stockService.importDatas(formData).subscribe(
      (data) => {
        this.loader = false;
        this.loader = true;
        this.stockService.getSummary().subscribe((data) => {
          this.uploded = true;
          this.summary = data;
          this.loader = false;
        }, (error) => { });
      },
      (responseError) => {
        this.error = responseError.error.message;
        this.loader = false;
      }
    );
  }
}
