import { Component, OnInit } from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class socialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formDisplay: boolean = false;

  posts: Post[] = [
    {title:'Elon Musk said', text: 'Car go vroom haha'},
    {title:'Jeff Kaplan said', text: 'Nerf Mercy LUL'}
  ]
  
  onDelete = (el) => this.posts.splice(this.posts.indexOf(el), 1);
  toggleDisplay = () => {
    (this.formDisplay === true)? this.formDisplay = false : this.formDisplay = true;
    (this.toState === 'state1')? this.changeState('state2') : this.changeState('state1');
  }
  onSubmit = (event: Post) => {
    this.toggleDisplay();
    this.posts.unshift(event);
  }

  toState: string = 'state1';

  changeState(state: string): void {
    this.toState = state;
  }
}