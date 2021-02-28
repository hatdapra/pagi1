import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Field } from '../../services/config.service';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.scss']
})
export class InsertDataComponent implements OnInit {
  @Input() selectFields!: Field[];
  @Input() inputName!: string;
  
  textFormControls: FormControl[] = [];

  // textFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  
  constructor(private bs: BaseService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.selectFields.length; i++) {
      if(this.selectFields[i].inputType == 'text'){
      }
      this.textFormControls.push(new FormControl('', [Validators.required]));
    }
  }

  onClickBtn($event: Event): void{
    let inputElements = document.getElementsByName(this.inputName);
    let data: any = {};
    let idField: string = this.getIDField();
    
    for (let i = 0; i < inputElements.length; i++) {
      let key: any = (inputElements[i] as HTMLInputElement).getAttribute('tag');
      let value: string = (inputElements[i] as HTMLInputElement).value;
            
      data[key] = value;
    }

    if(idField != ""){
      data[idField] = "-1";
    }

    if(!this.isError()){
      /* window.dispatchEvent(
        new CustomEvent('insertData/' + this.inputName, {
          detail: data
        })
      ); */

      this.bs.insData(this.inputName, data);
    }
  }

  getIDField():string{
    for (let i = 0; i < this.selectFields.length; i++) {
      if(this.selectFields[i].inputType == 'id'){
        return this.selectFields[i].fieldName;
      }      
    }
    return "";
  }

  isError(): boolean{
    
    for (let i = 0; i < this.selectFields.length; i++) {
      if(this.selectFields[i].inputType == 'text'){
        if(this.textFormControls[i].status === 'INVALID'){
          return true;
        }
      }
    }
    return false;
  }

}
