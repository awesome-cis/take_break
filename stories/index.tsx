import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories
  .add('with text', () => <button>Hello Button</button>)
  .add('with emoji', () => (
    <button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));

stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
});
