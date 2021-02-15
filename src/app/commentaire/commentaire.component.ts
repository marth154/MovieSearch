import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  commentForm: FormGroup;

  get comments(){
    return (this.commentForm.get('comments') as FormArray).controls
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comments: new FormArray([])
    })
  }

  addComment(comment: string) {
    this.comments.push(new FormControl(comment, [Validators.required]));
  }
}
