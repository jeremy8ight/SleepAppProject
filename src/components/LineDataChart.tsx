import {LinedataChartProps} from "../interfaces";
import * as React from "react";
import {LineChart} from "react-native-chart-kit";

export const LineDataChart = (props: LinedataChartProps) => {
    return(
        <LineChart
        data={{
            labels: props.xLabel,
            datasets: [
                {
                    data: props.yData
                }
            ]
        }}
        width={2000} // from react-native
        height={420}
        yAxisLabel=""
        yAxisSuffix=" C"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
            backgroundColor: props.chartColor,
            backgroundGradientFrom: props.chartColor,
            backgroundGradientTo: props.chartColor,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}
        bezier
        style={{
            marginVertical: 8,
            borderRadius: 16
        }}
    />)
}
