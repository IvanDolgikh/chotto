import type { Meta, StoryObj } from '@storybook/vue3';
 
// import Channels from './Channels.vue';
import Channels from './ChannelSelector.vue';

const meta: Meta<typeof Channels> = {
  component: Channels,
};
 
export default meta;
type Story = StoryObj<typeof Channels>;
 

const testChannelsList = [
  {
    channelId: 'Ch-001',
    title: 'Test channel',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png'
    // type: 'standard',
  },
  {
    channelId: 'Ch-002',
    title: 'Test channel 2',    
    icon: 'whatsapp',
    type: 'default',
  },
  {
    channelId: 'channel1',    
    title: 'waba',
    icon: 'waba',
  },
];

const testChannelsList2 = [
  {
    channelId: 'Ch-001',
    title: 'Test channel',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/240px-Telegram_logo.svg.png'
    // type: 'standard',
  },
  {
    channelId: 'Ch-002',
    title: 'Test channel 2',    
    icon: 'whatsapp',

  },
  {
    channelId: 'channel1',    
    title: 'waba',
    icon: 'waba',
  },
];

const template = '<div style="min-height: 100px; min-width: 600px; margin-top: 150px; padding: 0px 0px"><story/></div>';

export const HaveSelectedChannel: Story = {
  args: {
    channels: testChannelsList,
  },
  decorators: [() => ({ template })]
};

export const HaveNotSelectedChannel: Story = {
  args: {
    channels: testChannelsList2,
  },
  decorators: [() => ({ template })]
};

export const ChannelsEmptyArray: Story = {
  args: {
    channels: [],
  },
  decorators: [() => ({ template })]
};

export const InactiveChannels: Story = {
  args: {
    channels: [],
    state: 'disabled',
  },
  decorators: [() => ({ template })]
};