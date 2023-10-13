import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.component.html',
  styleUrls: ['./start-match.component.css']
})
export class StartMatchComponent implements OnInit{

  team1Control = new FormControl();
  team2Control = new FormControl();

  options: string[] = ['Team A', 'Team B', 'Team C'];
  filteredOptions1: Observable<string[]> = of([]);
  filteredOptions2: Observable<string[]> = of([]);


  ngOnInit(): void {
    this.filteredOptions1 = this.team1Control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.team2Control.value))
    );

    this.filteredOptions2 = this.team2Control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.team1Control.value))
    );
  }

  private _filter(value: string, excludeValue?: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue) && option !== excludeValue
    );
  }
}
