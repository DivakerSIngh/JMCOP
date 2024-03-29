import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  images:any=[];
 
  public slider = new Slider();
  public sliderData=[];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1400
};
  constructor(public _apiService:ApiService) { 
  
    
  }
  GalleryImages(){

    this._apiService.httpGet(constants.getallBanner).subscribe((response) => {
      if (response.code ==200) {
        debugger
        this.images=response.result.filter(x=>x.Type==5);
        this.sliderData= this.images;
      }
    })
  }
  ngOnInit() {
    this.GalleryImages();
  }

}
