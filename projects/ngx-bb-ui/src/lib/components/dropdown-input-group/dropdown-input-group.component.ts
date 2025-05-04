import { Component, computed, forwardRef, input, model } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

interface DropdownInputGroupOption<TValue = string> {
  label: string;
  value: TValue;
}

interface DropdownInputGroupValue<TOptionValue = string> {
  selectedOption: TOptionValue;
  input: string;
}

@Component({
  selector: 'bb-dropdown-input-group',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown-input-group.component.html',
  styleUrl: './dropdown-input-group.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownInputGroupComponent),
    multi: true
  }]
})
export class DropdownInputGroupComponent implements ControlValueAccessor {
  options = input<DropdownInputGroupOption[]>([]);
  id = input('dig');
  name = input('dig');
  disabled = model(false);
  dropdownPlaceholder = input<string | null>('Select');
  inputPlaceholder = input<string | null>('Enter text');
  wrapperClass = input<string | null>(null);
  dropdownClass = input<string | null>(null);
  inputClass = input<string | null>(null);
  emptyMessage = input('No options');

  idDropdown = computed(() => `${this.id()}-dd`);
  idInput = computed(() => `${this.id()}-input`);
  optionsControl = new FormControl();
  inputControl = new FormControl();

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(newValue: DropdownInputGroupValue): void {
    this.optionsControl.setValue(newValue?.selectedOption ?? '');
    this.inputControl.setValue(newValue?.input);
  }

  updateValue(): void {
    const value = this.optionsControl.value && this.inputControl.value
      ? {
          selectedOption: this.optionsControl.value,
          input: this.inputControl.value
        }
      : null;
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const toggleFn = isDisabled ? 'disable' : 'enable';
    this.optionsControl[toggleFn]();
    this.inputControl[toggleFn]();
  }
}
