import { extend } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, Month, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { recurrenceData, applyCategoryColor } from './datasource';

Schedule.Inject(Day, Week, Month);

/**
 * Schedule Recurrence events sample
 */

this.default = () => {
    let data: Object[] = <Object[]>extend([], recurrenceData, null, true);
    let scheduleObj: Schedule = new Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 20),
        views: ['Day', 'Week', 'Month'],
        eventSettings: { dataSource: data },
        eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
    });
    scheduleObj.appendTo('#Schedule');
};