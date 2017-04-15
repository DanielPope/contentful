import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchImage' })

export class ImageMatchPipe implements PipeTransform {

  transform(assets: any, imageId: any): any {
  	
  	if(imageId === undefined) return false;

  	return assets.filter(function(asset) {  		
  		return asset.sys.id === imageId;
  	})
  }
}