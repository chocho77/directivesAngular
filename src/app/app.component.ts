import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesAngular';
  postArray:Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray:Array<any> = [];

  stepForm! : string;

  constructor(){
    for(let i = 0; i < this.postArray.length; i++){
      console.log(this.postArray[i]);
      
    }
  }

  addNew() {
    this.objArray.push({id:6, postTitle: 'Post 6'});
  }

  onDelete(post:any) {
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);

  }

  onClick(status:any) {
    this.stepForm = status;

  }

}
