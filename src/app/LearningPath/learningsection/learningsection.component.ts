import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { appCheckInstance$ } from '@angular/fire/app-check';

@Component({
  selector: 'app-learningsection',
  templateUrl: './learningsection.component.html',
  styleUrls: ['./learningsection.component.css']
})
export class LearningsectionComponent implements OnInit 
{
  public chart: any;

  mostrar: boolean = false;

  constructor( ) { 
  }
  ngOnInit() {
    this.createChart();
    
    
  }

  showGrafic() {
    console.log("Hola")
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['9 meses', '12 meses', '18 meses', '24 meses'],
        //pueden existir varios datasets
        datasets: [
          {
            label: "Plazos",
            data: ['110748', '115360', '122313', '128748'],
            backgroundColor: 'blue',
            borderColor: 'red'
          }
        ]
      },
      options: {
        aspectRatio: 1
      }

    });
    
  } 

toggleModal() {
  this.mostrar=!this.mostrar;
  console.log (this.mostrar)
}  

}