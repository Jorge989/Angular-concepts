import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {
    console.log('aqui', this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.close.emit();
  }
}
