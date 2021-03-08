import React, { Component } from 'react';
import { Text } from 'react-konva';

export class AppText extends Component {
    render() {
        return (
            <Text
                text={this.props.value}
                x={this.props.x}
                y={this.props.y}
                fontSize={this.props.fontSize}
                fontFamily={'Bebas Neue'}
                fill={'#ffffff'}
            />
        );
    }
}
