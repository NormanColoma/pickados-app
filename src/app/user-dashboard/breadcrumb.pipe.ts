import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'breadcrumburl'
})

export class BreadCrumbPipe implements PipeTransform {
    transform(value: string) {
        let breadcrumUrl = value.substring(11, value.length);
        if (breadcrumUrl === "") {
            breadcrumUrl = "Timeline";
        }

        return breadcrumUrl;
    }
}