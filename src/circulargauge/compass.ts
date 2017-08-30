/**
 * Default sample
 */
import { CircularGauge, IAxisLabelRenderEventArgs } from '@syncfusion/ej2-circulargauge';
this.default = (): void => {
    let value: string[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', ''];
    let circulargauge: CircularGauge = new CircularGauge({
        axisLabelRender: (args: IAxisLabelRenderEventArgs) => {
            args.text = value[args.value];
        },
        axes: [{
            radius: '70%',
            lineStyle: { width: 10, color: '#E0E0E0' },
            labelStyle: {
                font: {
                    size: '12px', color: '#333333', fontFamily: 'Roboto'
                },
                useRangeColor: true,
                autoAngle: true,
                hiddenLabel: 'Last'
            }, majorTicks: {
                height: 15,
                interval: 1,
                color: '#9E9E9E'
            }, minorTicks: {
                height: 10,
                interval: 0.5,
                color: '#9E9E9E'
            },
            startAngle: 0,
            endAngle: 360,
            minimum: 0,
            maximum: 8,
            ranges: [{
                start: 7,
                end: 7,
                color: '#f03e3e'
            }],
            pointers: [{
                value: 7,
                radius: '50%',
                color: '#f03e3e',
                pointerWidth: 20,
                cap: {
                    radius: 0
                },
                animation: { enable: false }
            }, {
                value: 3,
                radius: '50%',
                color: '#9E9E9E',
                pointerWidth: 20,
                cap: {
                    radius: 0
                },
                animation: { enable: false }
            }]
        }]
    });
    circulargauge.appendTo('#direction-container');

    document.getElementById('poiterColor').onchange = () => {
        let rangeColor: string = (<HTMLInputElement>document.getElementById('poiterColor')).value;
        circulargauge.axes[0].pointers[0].color = rangeColor;
        circulargauge.refresh();
    };

    document.getElementById('labelColor').onchange = () => {
        let rangeColor: string = (<HTMLInputElement>document.getElementById('labelColor')).value;
        circulargauge.axes[0].ranges[0].color = rangeColor;
        circulargauge.refresh();
    };
};
