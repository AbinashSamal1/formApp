import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Input() fileContent: string = ''
  @Output() fileUploaded: EventEmitter<{ file: File, content: string }> = new EventEmitter();


  selectedFile: File | null = null;


  constructor(private http: HttpClient) { }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const fileContent = e.target.result;
        this.fileUploaded.emit({ file: this.selectedFile!, content: fileContent });
      };

      reader.readAsText(this.selectedFile);
    }
  }
}
