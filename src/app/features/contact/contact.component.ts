import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form: Contact = {
    name: '',
    email: '',
    message: '',
  };

  submit() {
    alert('Message sent successfully!');
  }
}
