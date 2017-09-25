import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr-toggle-view-mode',
  templateUrl: './toggle-view-mode.component.html',
  styleUrls: ['./toggle-view-mode.component.sass']
})
export class ToggleViewModeComponent implements OnInit {
  @Input() isGridView = false;
  @Output() toggleViewMode
    = new EventEmitter< boolean >();

  constructor() { }

  propagateViewModeChange() {
    this.toggleViewMode
      .emit(!this.isGridView);
  }

  ngOnInit() {
  }

}
