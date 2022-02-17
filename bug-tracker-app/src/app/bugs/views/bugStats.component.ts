import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Bug } from '../models/bug';

@Component({
    selector : 'app-bug-stats',
    template : `
        <div>{{getCurrentTime()}}</div>
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `,
    styleUrls : ['./bugStats.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent implements OnInit{
    ngOnInit(): void {
        
    }

    @Input('data')
    bugs : Bug[] = [];

    getCurrentTime() : string {
        return Date()
    }
}