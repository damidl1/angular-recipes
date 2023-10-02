import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule,
            MatCardModule,
            MatButtonModule,
            CardComponent
          ],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{

  constructor(private dataServ: DataService, private route: ActivatedRoute, private router: Router){}

  recipe? : Recipe;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');       //per leggere url nella barra indirizzi
    if (id) {
      this.dataServ.getRecipe(id).subscribe(recipe => this.recipe = recipe);
    }
  }

  delete(recipeId: string){

    this.dataServ.deleteRecipe(recipeId).subscribe(result => {
      this.router.navigateByUrl('/list')
    });
  }

}
