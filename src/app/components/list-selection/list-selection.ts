import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-list-selection',
  imports: [RouterLink, CommonModule],
  templateUrl: './list-selection.html',
  styleUrl: './list-selection.css',
})
export class ListSelection {
  protected dataService = inject(DataService);
}
