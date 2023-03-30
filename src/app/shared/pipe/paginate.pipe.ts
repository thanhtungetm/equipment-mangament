import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "paginate",
    // pure: false
})
export class PaginatePipe implements PipeTransform {
    transform(list: any[], ...args: any[]): any {
        console.log("Paginate")
        return list.slice(args[0] * args[1], args[0] * args[1] + args[1]);;
    }
}
