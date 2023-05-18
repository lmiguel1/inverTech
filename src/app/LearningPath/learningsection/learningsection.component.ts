import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { appCheckInstance$ } from '@angular/fire/app-check';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { NgxPayPalModule } from 'ngx-paypal';

@Component({
  selector: 'app-learningsection',
  templateUrl: './learningsection.component.html',
  styleUrls: ['./learningsection.component.css']
})
export class LearningsectionComponent implements OnInit 
{
  public payPalConfig ? : IPayPalConfig;

    ngOnInit(): void {
        this.initConfig();
        this.createChart();
    }

    private initConfig(): void {
      this.payPalConfig = {
      currency: 'USD',
      clientId: '',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '100.00',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '100.00'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '100.00',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
    };

        
    
  public chart: any;

  mostrar: boolean = false;

  constructor( ) { 
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