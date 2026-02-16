import React from 'react';
import { Battery, Ups, Pie, Heart, Signal } from '@brightlayer-ui/react-progress-icons';

type LabelPosition = undefined | 'top' | 'right' | 'bottom' | 'left';
const positions: LabelPosition[] = [undefined, 'left', 'top', 'right', 'bottom'];
export const App = (): any => (
    <>
        {positions.map((alignment, posIndex) => (
            <div key={`position-${posIndex}`}>
                <div style={{ fontSize: 36 }}>{(alignment || 'Center').toUpperCase()}</div>
                {[24, 34, 48, 72].map((size, fontSizeIndex) => (
                    <div key={`${String(alignment)}-${fontSizeIndex}`}>
                        <div style={{ fontSize: 24 }}>{`${size}px`}</div>
                        <Signal
                            percent={50}
                            size={size}
                            color="#3431d2"
                            showPercentLabel={true}
                            labelPosition={alignment}
                        />
                        <Signal
                            percent={50}
                            size={size}
                            color="#ff6600"
                            showPercentLabel={true}
                            labelPosition={alignment}
                            outlined={true}
                        />
                        <Battery
                            percent={10}
                            size={size}
                            color="#983fef"
                            showPercentLabel={true}
                            labelPosition={alignment}
                        />
                        <Pie
                            percent={10}
                            size={size}
                            color="#da7777"
                            showPercentLabel={true}
                            labelPosition={alignment}
                        />
                        <Ups
                            percent={10}
                            size={size}
                            color="#0088f2"
                            showPercentLabel={true}
                            labelPosition={alignment}
                        />
                        <Heart
                            percent={54}
                            size={size}
                            color="#f0cb2f"
                            showPercentLabel={true}
                            labelPosition={alignment}
                        />
                        <br />
                    </div>
                ))}
                <br />
                <br />
            </div>
        ))}
    </>
);
