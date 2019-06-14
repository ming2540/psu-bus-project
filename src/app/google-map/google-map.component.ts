import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {} from 'googlemaps';
import { mapStyle } from './google-map.style';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit, OnDestroy {

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  mapStyle;

  allBusLocation:any;

  constructor(private busService: BusService) {
    this.mapStyle = mapStyle;
    this.allBusLocation = this.busService.getBusStopLocation();
    console.log(this.allBusLocation);
  }

  ngOnInit() {
    this.allBusLocation = this.busService.getData()
      .subscribe(res => {
        this.allBusLocation = res;
      });
    
      this.mapInit();
  }

  ngOnDestroy(){
    this.allBusLocation.unsubscribe();
  }

  mapInit(){
    const coordinateCenter = {lat: 7.007048, lng: 100.498605};
    const mapOptions: google.maps.MapOptions = {
        center: coordinateCenter,
        zoom: 16,
        styles: this.mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: ['terrain', 'roadmap', 'satellite'],
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        streetViewControl: false,
        fullscreenControl: false
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  renderBusStop(){
    for(let busStop in this.allBusLocation){
      return ;
    }
  }

}
