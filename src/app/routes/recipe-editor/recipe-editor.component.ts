import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { KeyValuePipe } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../types/Category';

@Component({
  selector: 'app-recipe-editor',
  standalone: true,
  imports: [InputComponent, ButtonComponent, KeyValuePipe, IconComponent],
  templateUrl: './recipe-editor.component.html',
  styleUrl: './recipe-editor.component.scss'
})
export class RecipeEditorComponent implements OnInit {
  additions = {};
  categories: Category[] = [];
  addedCategories: Category[] = [];

  title = new FormControl('');
  desc = new FormControl('');
  calories = new FormControl('');
  time = new FormControl('');
  img = new FormControl('');

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    const categoryInput = document.getElementById('categoryInput');

    this.httpClient.get('categories').subscribe(x => {
      this.categories = (x as Category[]);

      /*
      this.categories.forEach(x => {
        const option = document.createElement('option');
        option.value = x.id;
        option.innerHTML = x.name;

        categoryInput.appendChild(option);
      });
      */
    });
  }

  get filteredCategories() {
    return this.categories.filter(x => 
      !this.addedCategories.includes(x))
  };

  addCategory() {
    const categoryInput = document.getElementById('categoryInput');
    this.addedCategories.push(this.categories.find(x => x.id == (categoryInput as any).value));
  }

  deleteCategory(categoryId) {
    this.addedCategories = this.addedCategories.filter(x => x.id != categoryId);
  }

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
      categories: this.categories.map(x => x.id),
      additions: Object.values(this.additions),
    }).subscribe(x => {
      console.log(x)
    })
  }
}
