import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title:'why is the sky blue?', content:'It is blue because its color is blue.'},
    {title:'what does an orange taste like?', content: 'Orange taste like a perfect orangy orange.'},
    {title:'what is the color of SnowWhite the cat?', content: 'SnowWhite cat is white as snow.'}
  ];
 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
