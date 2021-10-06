import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  editorOptions = { 
    theme: 'vs-dark', 
    language: 'markdown' 
  }
  markdown = `
  # Level 1 
  
  - number 1; 
    - number 2; 
    
  ## Level 2 
  
  > Quotes 
  
  After quote. [Link](http://www.google.com)`;

  onReady() {
    console.log("Done!");
  }

}
