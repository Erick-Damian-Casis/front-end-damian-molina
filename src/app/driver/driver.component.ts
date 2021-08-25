import { Component, OnInit } from '@angular/core';
import { DriverModel } from '../models/index';
import { DriverHttpService } from '../services/driver-http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AppService } from "../../service/app.service";
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  selectedDriver : DriverModel={};
  drivers: DriverModel[]=[];
  formDriver: FormGroup;

  constructor(private driverHttpService : DriverHttpService, 
              private formBuilder: FormBuilder,
              public messageService: MessageService,) 
              {
      this.formDriver = this.newFormGroupDriver();
   }

  ngOnInit(): void {
    this.getDrivers();
    this.getDriver();
    
  }

  newFormGroupDriver(): FormGroup {
    return this.formBuilder.group(
      {
        user_id:[null],
        photo:[null,[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        license:[null,[Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      }
    );
  }

  

  getDrivers():void {
    this.driverHttpService.getAll().subscribe(
      response=>{
        this.drivers =response.data;
      }, error=>{
        this.messageService.error(error);
      }
    );
  }

  getDriver():void {
    this.driverHttpService.getOne(6).subscribe(
      response=>{
        console.log(response);
        this.selectedDriver =response.data;
      }, error=>{
        this.messageService.error(error);
      }
    );
  }

  storeDriver(driver: DriverModel):void {
    this.driverHttpService.create(driver).subscribe(
      response=>{
        this.saveDriver(driver)
        this.messageService.success(response);
      }, error=>{
        this.messageService.error(error);
      }
    );
  }

  updateDriver(driver: DriverModel):void {
    this.driverHttpService.update(driver.id, driver).subscribe(
      response=>{
        this.saveDriver(driver);
        this.messageService.success(response);
      }, error=>{
        this.messageService.error(error);
      }
    );
  }

  deleteDriver(driver: DriverModel):void {
    this.driverHttpService.delete(driver.id).subscribe(
      response=>{
        this.messageService.success(response);
        this.removeDriver(driver);
      }, error=>{
        this.messageService.error(error);
      }
    );
  }

  saveDriver(driver: DriverModel){
      const index = this.drivers.findIndex(element=> element.id === driver.id)
      console.log(index);
      if(index===-1){
        this.drivers.push(driver);
      }else {
        this.drivers[index] = driver;
      }
  }

  removeDriver(driver: DriverModel):void{
    this.drivers= this.drivers.filter(element => element.id !== driver.id);
  }
  
  selectDriver(driver: DriverModel){
      this.formDriver.patchValue(driver);
  }

  onSubmit(driver: DriverModel){
    if(this.formDriver.valid){
      if(driver.id){
      this.updateDriver(driver)
    }else {
      this.storeDriver(driver)
    }
  }else{
      this.formDriver.markAllAsTouched();
    }
  }

  get idField(){
    return this.formDriver.controls['id'];
  }

  get photoField(){
    return this.formDriver.controls['photo'];
  }

  get licenseField(){
    return this.formDriver.controls['license'];
  }
}
