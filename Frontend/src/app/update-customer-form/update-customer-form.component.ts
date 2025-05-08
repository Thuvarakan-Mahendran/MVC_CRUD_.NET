import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-update-customer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-customer-form.component.html',
  styleUrl: './update-customer-form.component.css'
})
export class UpdateCustomerFormComponent {
  customer = {
      name: '',
      age: '',
      nic: '',
      address: '',
      gender: ''
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
