import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistcs',
  templateUrl: './statistcs.component.html',
  styleUrls: ['./statistcs.component.css'],
})
export class StatistcsComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
