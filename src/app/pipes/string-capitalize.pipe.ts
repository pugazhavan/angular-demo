import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCapitalize'
})
export class StringCapitalizePipe implements PipeTransform {

  transform(value: string): string {

		if (value)
			value.trim();

    if (value)
      return value.charAt(0).toUpperCase() + value.slice(1);

		return value;
	}

}
