import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { KeyValuePipe } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-recipe-editor',
  standalone: true,
  imports: [InputComponent, ButtonComponent, KeyValuePipe, IconComponent],
  templateUrl: './recipe-editor.component.html',
  styleUrl: './recipe-editor.component.scss'
})
export class RecipeEditorComponent {
  additions = {};
  title = new FormControl('');
  desc = new FormControl('');
  calories = new FormControl('');
  time = new FormControl('');
  img = new FormControl('');

  addAddition() {
    this.additions[(Math.random()*10).toString()] = '';
  }

  deleteAddition(key: string) {
    delete this.additions[key];
  }

  changeAddition(key: string, event: any) {
    this.additions[key] = event.target.value;
  }
}
