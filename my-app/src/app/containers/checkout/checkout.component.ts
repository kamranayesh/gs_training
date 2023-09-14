import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('test@mail.com', {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      address: new FormArray([this.newAddress()]),
    },
    { updateOn: 'change' }
  );

  get addressObj() {
    return this.checkoutForm.get('address') as FormArray;
  }
  newAddress() {
    return new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(null, [this.zipcodeValidator()]),
    });
  }

  addAddress() {
    this.addressObj.push(this.newAddress());
  }
  removeAddress(index: number) {
    this.addressObj.removeAt(index);
  }

  zipcodeValidator() {
    return (control: AbstractControl) => {
      if (control.value == 123456) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error:information_related_to_error
        zipcode: {
          validCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }

  saveData() {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      console.log('form submission logic', this.checkoutForm.value);
    }
  }
  loadData() {
    const data = {
      name: 'hello',
      email: 'hello@mail.com',
      address: {
        city: 'city',
        pincode: 123456,
      },
    };
    this.checkoutForm.setValue(data); // all the data
  }
  patchData() {
    const data = { name: 'mike', email: 'mike@mail.com' };
    this.checkoutForm.patchValue(data); // partial data
  }
}
