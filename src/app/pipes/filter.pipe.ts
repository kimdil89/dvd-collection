import { Pipe, PipeTransform, Input } from '@angular/core';
import { DvdItem } from '../interfaces/dvd-item';

@Pipe({
  name: 'filter'
  // Andrzej- jako ciekawostkę możesz poczytać o parametrze pure przy definicji Pipe w Angularze. 
  // Temat już bardziej zaawansowany, ale jesteś ambitna więc polecam :-)
})

export class FilterPipe implements PipeTransform {
  @Input() options;

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase().trim();

    return items.filter((it: DvdItem) => {
      return it.title.toLowerCase().includes(searchText) || it.director.toLowerCase().includes(searchText);
    });
  }
};