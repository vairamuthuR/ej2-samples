import { LinearGauge, ContainerType, Orientation, ILoadEventArgs, LinearGaugeTheme } from '@syncfusion/ej2-lineargauge';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

/**
 * Container Sample
 */
this.default = (): void => {
    let gauge: LinearGauge = new LinearGauge({
        load: (args: ILoadEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.gauge.theme = <LinearGaugeTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        title: 'Temperature Measure',
        container: {
            width: 13,
            roundedCornerRadius: 5,
            type: 'Thermometer'
        },
        axes: [{
            minimum: 0,
            maximum: 180,
            line: {
                width: 0
            },
            majorTicks: {
                interval: 20,
                color: '#9e9e9e'
            },
            minorTicks: {
                color: '#9e9e9e'
            },
            pointers: [
                {
                    value: 90,
                    height: 13,
                    width: 13,
                    roundedCornerRadius: 5,
                    type: 'Bar',
                    color: '#f02828'
                }
            ]
        },
        {
            minimum: 0,
            maximum: 180,
            line: {
                width: 0
            },
            majorTicks: {
                interval: 20
            },
            opposedPosition: true,
            pointers: [
                {
                    width: 0
                }
            ]
        }]
    });
    gauge.appendTo('#boxContainer');

    let containerMode: DropDownList = new DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: () => {
            gauge.container.type = <ContainerType>containerMode.value;
            gauge.refresh();
        }
    });
    containerMode.appendTo('#containerMode');

    let orientationMode: DropDownList = new DropDownList({
        index: 0,
        placeholder: 'Select Range Bar Color',
        width: 120,
        change: () => {
            gauge.orientation = <Orientation>orientationMode.value;
            gauge.refresh();
        }
    });
    orientationMode.appendTo('#orientationMode');
};





