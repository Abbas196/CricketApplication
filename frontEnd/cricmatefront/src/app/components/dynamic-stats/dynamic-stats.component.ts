import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-stats',
  templateUrl: './dynamic-stats.component.html',
  styleUrls: ['./dynamic-stats.component.css']
})
export class DynamicStatsComponent {

  @Input() data:any;
  gridData: string[] = [
    'Matches', 'Innings', 'Runs',  
    'Not Outs', 'Best Score', 'Strike Rate',  
    'Average', 'Fours', 'Sixes',  
    'Thirties', 'Fifties', 'Hundreds',  
    'Ducks'  
  ];
  bowlingData: string[]= [
    'Matches', 'Innings', 'Overs',  
    'Maidens', 'Wickets', 'Runs', 
    'Best Bowling', 'Economy Rate', 'Strike Rate',  
    'Average', 'Wides', 'No Balls',  
    'Dot Balls','4 Wickets', '5 Wickets'  
  ];
  fieldingData: string[]= [
    'Matches', 'Catches', 'Stumpings',  
    'Run Outs'
  ];
}
