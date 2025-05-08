import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-customer-form',
  standalone: true,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  customer = {
    name: '',
    age: '',
    nic: '',
    address: ''
  };

  formSubmitted = false;
  successMessage = '';

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (form.invalid) return;

    console.log('Form submitted:', this.customer);

     alert('Customer added successfully');

    form.resetForm();
    this.formSubmitted = false;
  }
}
