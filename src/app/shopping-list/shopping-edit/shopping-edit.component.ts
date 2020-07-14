import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientInput', { static: false })
  ingredientInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    const ingredient = new Ingredient(
      this.ingredientInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.itemAdded.emit(ingredient);
  }
}
