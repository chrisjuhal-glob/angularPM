import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html'
})
export class PatientFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      condition: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}