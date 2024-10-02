import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { KeyValuePipe } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient,
  ) {}

  imageChange(event: any) {
    const file = event.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = () => {
      this.img.setValue(fr.result.toString());
    }
  }

  addAddition() {
    this.additions[(Math.random()*10).toString()] = '';
  }

  deleteAddition(key: string) {
    delete this.additions[key];
  }

  changeAddition(key: string, event: any) {
    this.additions[key] = event.target.value;
  }

  submit() {
    this.httpClient.post(`recipes`, {
      title: this.title.value,
      description: this.desc.value,
      calories: this.calories.value,
      time: this.time.value,
      image: this.img.value,
      categories: [],
      additions: [],
    }).subscribe(x => {
      console.log(x)
    })
  }
}
