import React from 'react';
import { COLORS } from '@department-of-veterans-affairs/caseflow-frontend-toolkit/util/StyleConstants';
import { ArrowRightIcon } from '../../app/components/icons/ArrowRightIcon';

export default {
  title: 'Commons/Components/Icons/ArrowRightIcon',
  component: ArrowRightIcon,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    color: { control: { type: 'color' } },
    size: { control: { type: 'number' } },
    className: { control: { type: 'text' } }
  },
  args: {
    color: COLORS.GREY_DARK,
    size: 17,
    className: ''
  }
};

const Template = (args) => <ArrowRightIcon {...args} />;

export const Default = Template.bind({});