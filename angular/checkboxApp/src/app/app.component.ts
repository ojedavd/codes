import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  countries: Array<any> = [
    { name: 'India', value: '1' },
    { name: 'France', value: '2' },
    { name: 'USA', value: '3' },
    { name: 'Germany', value: '4' },
    { name: 'Japan', value: '5' }
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
     selectedCountries:  new FormArray([])
    });
  }

  onCheckboxChange(event: any) {
    const selectedCountries = (this.form.controls['selectedCountries'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
      .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }
}
