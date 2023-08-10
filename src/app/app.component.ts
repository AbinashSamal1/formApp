import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  selectedFileContent: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  fileContent: string = '';

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.fileContent = e.target.result;
      };

      reader.readAsText(file);
    }
  }
  
  onFileUploaded(event: { file: File, content: string }): void {
    this.selectedFileContent = event.content;
  }
}