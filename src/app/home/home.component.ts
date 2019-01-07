import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { generate } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }
  openForm: boolean = false;
  contactForm;

  ngOnInit() {
  }

  toggleForm(){
    this.openForm = !this.openForm;
    if(this.openForm){
      this.generateForm();
      console.log(this.openForm);
    }
  }

  generateForm(){
    this.contactForm = new FormGroup ({
      email: new FormControl('',  Validators.compose([Validators.required, Validators.email])),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      comments: new FormControl('')
    });
    console.log('generated form');
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}
