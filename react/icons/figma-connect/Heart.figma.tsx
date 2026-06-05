import figma from '@figma/code-connect';
import { Heart } from '../src/Heart';

// URL managed in figma-urls.ts
figma.connect(Heart, 'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=8695-142261&m=dev', {
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
        <Heart
            percent={percent}
            outlined={outlined}
        />
    ),
});
