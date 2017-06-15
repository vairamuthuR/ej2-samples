import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';

/**
 * Range calendar sample
 */

this.default = (): void => {
    let calendar: Calendar = new Calendar({
        min: new Date('05/05/2017'),
        max: new Date('05/27/2017'), change: startDate
    });
    calendar.appendTo('#calendar');
    function startDate(args: ChangedEventArgs): void {
        (<HTMLInputElement>document.getElementById('date_label')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }
};

