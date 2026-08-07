import figma from '@figma/code-connect';
import { BatteryLarge } from '../src/BatteryLarge';

// URL managed in figma-urls.ts
figma.connect(BatteryLarge, 'https://www.figma.com/design/SgTGLxtTGdN0PMSPBBnTJ1/Q3-2026?node-id=2979-519&m=dev', {
    props: {
        percent: figma.enum('Percentage', {
            '0%': 0,
            '10%': 10,
            '20%': 20,
            '30%': 30,
            '40%': 40,
            '50%': 50,
            '60%': 60,
            '70%': 70,
            '80%': 80,
            '90%': 90,
            '100%': 100,
        }),
    },
    example: ({ percent }) => <BatteryLarge percent={percent} />,
});