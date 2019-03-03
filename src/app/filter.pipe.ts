import { Pipe, PipeTransform, Input } from '@angular/core';
import { DvdItem } from './dvd-item';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  @Input() options;

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((it: DvdItem) => {
      return it.title.toLowerCase().includes(searchText) || it.director.toLowerCase().includes(searchText);
    });
  }
};