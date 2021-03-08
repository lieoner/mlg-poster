import React from 'react';
import { Layer, Stage } from 'react-konva';
import { AppImage } from './canvasElements/AppImage';
import { AppText } from './canvasElements/AppText';

export const CanvasSurface = ({ imgSrc, team1, team2, team3, time }) => {
    return (
        <Stage width={1896} height={2436}>
            <Layer>
                <AppImage src={imgSrc} width={1896} height={2436} />

                <AppText fontSize={105.46} value={team1.name} x={337} y={664} />
                <AppText fontSize={52.73} value={team1.players[0].name} x={332} y={833} />
                <AppText fontSize={52.73} value={team1.players[1].name} x={332} y={898} />
                <AppText fontSize={52.73} value={team1.players[2].name} x={332} y={960} />
                <AppText fontSize={52.73} value={team1.players[3].name} x={332} y={1022} />
                <AppText fontSize={72} value={team1.score} x={1100} y={672} />

                <AppText fontSize={105.46} value={team2.name} x={337} y={1197} />
                <AppText fontSize={52.73} value={team2.players[0].name} x={332} y={1365} />
                <AppText fontSize={52.73} value={team2.players[1].name} x={332} y={1430} />
                <AppText fontSize={52.73} value={team2.players[2].name} x={332} y={1492} />
                <AppText fontSize={52.73} value={team2.players[3].name} x={332} y={1554} />
                <AppText fontSize={72} value={team2.score} x={1100} y={1212} />

                <AppText fontSize={105.46} value={team3.name} x={337} y={1731} />
                <AppText fontSize={52.73} value={team3.players[0].name} x={332} y={1901} />
                <AppText fontSize={52.73} value={team3.players[1].name} x={332} y={1966} />
                <AppText fontSize={52.73} value={team3.players[2].name} x={332} y={2028} />
                <AppText fontSize={52.73} value={team3.players[3].name} x={332} y={2090} />
                <AppText fontSize={72} value={team3.score} x={1100} y={1740} />

                <AppText fontSize={96.67} value={time} x={581} y={2231} />
            </Layer>
        </Stage>
    );
};
