import figma from '@figma/code-connect';
import { Ups } from '../src/Ups';

// URL managed in figma-urls.ts
figma.connect(Ups, 'https://www.figma.com/design/ZwJ3feoFnLiV3JNYqI7A3c/-Limited-Support--Brightlayer-UI-Component-Sticker-Sheet?node-id=8695-142407&m=dev', {
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
        <Ups
            percent={percent}
            outlined={outlined}
        />
    ),
});
