import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class postFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string;
  post: string;
  @Input() posts: Post[];


  @Output() submitted = new EventEmitter<object>();
  submitPost = (f: NgForm) => this.submitted.emit({title: f.value.title, thought: f.value.thought});

}