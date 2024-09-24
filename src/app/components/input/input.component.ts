import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true }) formControl: FormControl;
  @Input({ required: true }) name: string = '?';
  @Input() title?: string = '';
  @Input() hidden?: boolean = false;
}
