# demos-for-angular
Demos and tutorials for getting started with Appwrite + Angular
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# To start the angular app in your favourite IDE.

### Install Bootstrap
 npm install bootstrap

### Include the CSS path of Bootstrap in styles array in the angular.json.
 "styles": ["src/styles.css","node_modules/bootstrap/dist/css/bootstrap.min.css"]

### To open app in browser.
 ng serve --open

### Install jsPDF Package
 npm install jspdf

 import * as jsPDF from 'jspdf'

### Add Data
USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];
  
  
  ### open data
   public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }
  
  ### Download PDF in Angular
  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
  
 ### Bootstrap Table View
  <div class="col-md-8" id="htmlData" #htmlData>
      <table class="table table-bordered">
        <tr class="table-primary">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr *ngFor="let user of USERS">
          <th>{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
        </tr>
      </table>
    </div>
###### add open button
    <div class="col-md-4 text-right">
   <button class="btn btn-success btn-block" (click)="openPDF()">Open PDF</button>
   <button class="btn btn-danger btn-block" (click)="downloadPDF()">Download PDF</button>
</div>

#### The Final Code
#### Next, open app.component.ts file and add the following code.

import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('htmlData') htmlData:ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  constructor() { }

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
}

<div class="container">
  <div class="row">

    <div class="col-md-8" id="htmlData" #htmlData>
      <table class="table table-bordered">
        <tr class="table-primary">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr *ngFor="let user of USERS">
          <th>{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
        </tr>
      </table>
    </div>

    <div class="col-md-4 text-right">
      <button class="btn btn-success btn-block" (click)="openPDF()">Open PDF</button>
      <button class="btn btn-danger btn-block" (click)="downloadPDF()">Download PDF</button>
    </div>

  </div>
</div>
