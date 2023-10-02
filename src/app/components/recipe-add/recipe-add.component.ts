import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {


  constructor(private dataServ: DataService){}

  submitRecipe(){
    console.log('mi hai premuto')
    const newRecipe: Recipe = {
      name: 'cacio e pepe',
      createdAt: Date.now(),
      ingredients: [
        'pecorino romano',
        'pepe',
        'spaghetti',
        'olio EVO'
      ],
      description: 'grattuggiare il pecorino...',
      category: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Spaghetti_cacio_e_pepe_%28creamy_as_it_should_be%29.jpg/1920px-Spaghetti_cacio_e_pepe_%28creamy_as_it_should_be%29.jpg'
    }
    this.dataServ.postRecipe(newRecipe).subscribe(addedRecipe => console.log(addedRecipe));
  }

}
