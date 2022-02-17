import { Pipe, PipeTransform } from "@angular/core";

type Comparer<T> = (x : T, y : T ) => number

@Pipe({
    name : 'sort'
})
export class SortPipe<T> implements PipeTransform{

    private getComparer(attrName : keyof(T)) : Comparer<T> {
        return (x : T, y : T ) : number => {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0;
        }
    }

    transform(list: T[], attrName : keyof(T)) {
       /*  switch (attrName){
            case 'id':
               return list.sort(this.getComparer('id'))
            case 'name':
               return list.sort(this.getComparer('name'))
            case 'isClosed':
               return list.sort(this.getComparer('isClosed'))
            case 'createdAt':
               return list.sort(this.getComparer('createdAt'))
            default:
                return list;
        } */
        return list.sort(this.getComparer(attrName));
        
    }

}