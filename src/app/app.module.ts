import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { postComponent } from './post/post.component';
import { postFormComponent } from './post-form/post-form.component';
import { socialPostsComponent } from './social-posts/social-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    postComponent,
    postFormComponent,
    socialPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
