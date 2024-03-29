import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  commentForm: FormGroup;

  get comments(): AbstractControl[]{
    return (this.commentForm.get('comments') as FormArray).controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comments: new FormArray([])
    });
  }

  addComment(comment: string): void {
    if (comment.length !== 0) {
      this.comments.push(new FormControl(comment));
    }
  }
}
