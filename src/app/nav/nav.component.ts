import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  @Input() lightMode: boolean = false;

  tabs: any[] = ['about', 'experience', 'volunteer', 'projects', 'contact']

  changeTheme() {
    this.lightMode = !this.lightMode;
    this.toggle.emit(this.lightMode);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
