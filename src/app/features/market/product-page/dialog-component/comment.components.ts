import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-comment-dialog',
  standalone: true,
  imports: [QuillModule, NgIf, FormsModule],
  template: `
    <div>
      <quill-editor 
        [(ngModel)]="comment"
        [modules]="quillModules"
        placeholder="Write your comment here..."
      ></quill-editor>

      <div class="dialog-actions">
        <button 
          mat-button 
        >
          Cancel
        </button>
        <button 
          mat-raised-button 
          color="primary"
          (click)="submitComment()"
        >
          Submit Comment
        </button>
      </div>
</div>
  `,
  styles: [`
    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCommentDialogComponent {
  @Input() productId!: string;
  @Output() commentSubmitted = new EventEmitter<string>();

  comment: string = '';
  dialogRef: MatDialogRef<ProductCommentDialogComponent> | null = null;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]
  };


  submitComment() {
    if (this.comment?.trim()) {
      this.commentSubmitted.emit(this.comment);
      this.dialogRef?.close();
      this.comment = '';
    }
  }
}