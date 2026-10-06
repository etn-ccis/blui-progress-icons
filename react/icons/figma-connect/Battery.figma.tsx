import figma from '@figma/code-connect';
import { Battery } from '../src/Battery';

// URL managed in figma-urls.ts
figma.connect(Battery, 'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/branch/7tGFOggAkZF9d0iOs8q1Eo/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=8628-143109&m=dev', {
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
        outlined: figma.enum('Style', {
            'Outlined': true,
            'Filled': false,
        }),
    },
    example: ({ percent, outlined }) => (
        <Battery
            percent={percent}
            outlined={outlined}
        />
    ),
});
