import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-httpcomp',
  templateUrl: './httpcomp.component.html',
  styleUrls: ['./httpcomp.component.css']
})
export class HttpcompComponent implements OnInit {

  data:any;

  constructor(service:ProvideDataService) {
    service.getUser().subscribe((info)=>{
      this.data=info;
    });
    // this.data2=service.someData;

    //  console.log(service.someData);
   }

  ngOnInit(): void {
  }
 

}
