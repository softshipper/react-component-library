import { Story, Meta } from '@storybook/react';
import IdeaCard from '.';


export default {
    title: 'OpenIdea/NewIdeaCard',
    component: IdeaCard,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;



  const Template: Story<{}> = (args) => <IdeaCard {...args} />;


  export const Default = Template.bind({});