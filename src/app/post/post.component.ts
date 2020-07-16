import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../post'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class postComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() posts: Post;
  

  @Output() deleted = new EventEmitter<object>();
  deletePost = (el: Post): void => this.deleted.emit(el);
  
}