import * as React from "react";
import {Text} from "react-native";

export const TextScoreColoring = (scoreInt: number) => {
    if (scoreInt <= 60) {
        return <Text testID={"textScore:red"} style={{
            fontSize: 30,
            paddingLeft: 20,
            bottom: 2, color: 'red'
        }}>{scoreInt}</Text>
    } else if (scoreInt > 60 && scoreInt <= 80) {
        return <Text testID={"textScore:yellow"} style={{
            fontSize: 30,
            paddingLeft: 20,
            bottom: 2, color: '#8B8000'
        }}>{scoreInt}</Text>
    } else {
        return <Text testID={"textScore:green"} style={{
            fontSize: 30,
            paddingLeft: 20,
            bottom: 2, color: 'green'
        }}>{scoreInt}</Text>
    }
}
