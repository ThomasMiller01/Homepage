import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CanvasJS from '../../../../../assets/js/canvasjs.min.js';

@Component({
  templateUrl: './privateHomeComponent.html'
})
export class privateHomeComponent { 
  constructor(private router:Router) { }

  logout(){
    this.router.navigate(['/home']);
    localStorage.removeItem("jwt");
  }  

  ngOnInit() {
    this.renderColumnChart();
    this.renderPieChart();
    this.renderHighPerformanceChart();
  }

  renderColumnChart(){
    let chart = new CanvasJS.Chart("ColumnChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });		
    chart.render();
  }

  renderPieChart(){
    let chart = new CanvasJS.Chart("PieChart", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping"},
          { y: 250, name: "Others" }
        ]
      }]
    });      
    chart.render();
  }

  renderHighPerformanceChart(){
    let dataPoints = [];
    let y = 0;		
    for ( var i = 0; i < 10000; i++ ) {		  
      y += Math.round(5 + Math.random() * (-5 - 5));	
      dataPoints.push({ y: y});
    }
    let chart = new CanvasJS.Chart("HighPerformanceChart", {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Performance Demo - 10000 DataPoints"
        },
        subtitles:[{
          text: "Try Zooming and Panning"
        }],
        data: [
        {
          type: "line",                
          dataPoints: dataPoints
        }]
    });		
    chart.render();
  }
}