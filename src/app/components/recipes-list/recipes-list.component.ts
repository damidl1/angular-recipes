import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    this.dataServ.getAllRecipes().subscribe(recipes => console.log(recipes));
  }
}
