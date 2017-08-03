import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inline-input',
  templateUrl: './inline-input.component.html',
  styleUrls: ['./inline-input.component.scss']
})
export class InlineInputComponent implements OnInit {
  @Input() data: string;
  @Input() isEditing: boolean;
  @Input() selected: boolean;
  @Output() select = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit();
  }

  onRemove() {
    this.remove.emit();
  }

  onUpdate(data) {
    this.update.emit(data);
  }

}
