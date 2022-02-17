import { Pipe, PipeTransform } from "@angular/core";

type Comparer<T> = (x : T, y : T ) => number

@Pipe({
    name : 'sort',
    pure : true //=> default
})
export class SortPipe<T> implements PipeTransform{

    private getComparer(attrName : keyof(T)) : Comparer<T> {
        return (x : T, y : T ) : number => {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0;
        }
    }

    private getDescComparer<T>(comparer : Comparer<T>) : Comparer<T>{
        return (x : T, y : T ) : number => {
            return comparer(x,y) * -1;
        }
    }

    transform(list: T[], attrName : keyof(T), isDesc : boolean = false) {
        console.log('sort.transform triggered', list, attrName, isDesc)
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
        let comparer = this.getComparer(attrName)
        if (isDesc){
            comparer = this.getDescComparer(comparer);
        }
        return list.sort(comparer);
        
    }

}