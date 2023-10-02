import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{

  constructor(private dataServ: DataService, private route: ActivatedRoute){}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');       //per leggere url nella barra indirizzi
    if (id) {
      this.dataServ.getRecipe(id).subscribe(recipe => console.log(recipe));
    }
  }

}
