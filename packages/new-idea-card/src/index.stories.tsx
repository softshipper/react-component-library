import { Story, Meta } from '@storybook/react';
import NewIdeaCard from '.';


export default {
    title: 'OpenIdea/NewIdeaCard',
    component: NewIdeaCard,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;



  const Template: Story<{}> = (args) => <NewIdeaCard {...args} />;


  export const Default = Template.bind({});