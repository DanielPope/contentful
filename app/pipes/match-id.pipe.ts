import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchImage' })

export class ImageMatchPipe implements PipeTransform {

  transform(assets: any, imageId: any): any {
  	
  	if(imageId === undefined) return assets;

  	return assets.filter(function(asset) {  		
  		return asset.sys.id === imageId;
  	})
  }
}