import { shallowMount } from '@vue/test-utils'
import AnnoyingButton from '../AnnoyingButton.vue'

describe('AnnoyingButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AnnoyingButton);
  });

  it('renders button correctly', () => {
    expect(wrapper.find('.annoying-button').exists()).toBe(true);
    expect(wrapper.find('.annoying-button').text()).toBe('Click Me!');
  });

  it('shows questions when clicking the button', async () => {
    wrapper.vm.attemptClick = jest.fn(wrapper.vm.attemptClick);
    wrapper.find('.annoying-button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.attemptClick).toHaveBeenCalled();
  });

  it('shows confirmation message after answering all questions', async () => {
    wrapper.setData({ questionIndex: wrapper.vm.questions.length });
    wrapper.vm.handleClick();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.proceeded).toBe(true);
    expect(wrapper.find('.confirmation-message').text()).toBe('Click confirmed! Well done!');
  });

  it('does not move the button when the user has proceeded', async () => {
    wrapper.setData({ proceeded: true });
    const initialStyle = { ...wrapper.vm.buttonStyle };
    wrapper.find('.annoying-button').trigger('mouseover');
    await wrapper.vm.$nextTick();
    const newStyle = { ...wrapper.vm.buttonStyle };
    expect(newStyle.top).toBe(initialStyle.top);
    expect(newStyle.left).toBe(initialStyle.left);
  });

  it('does not move the button when the user has answered all questions', async () => {
    wrapper.setData({ questionIndex: wrapper.vm.questions.length });
    const initialStyle = { ...wrapper.vm.buttonStyle };
    wrapper.find('.annoying-button').trigger('mouseover');
    await wrapper.vm.$nextTick();
    const newStyle = { ...wrapper.vm.buttonStyle };
    expect(newStyle.top).toBe(initialStyle.top);
    expect(newStyle.left).toBe(initialStyle.left);
  });

  it('resets the button correctly', async () => {
    wrapper.setData({ questionIndex: 2, proceeded: true });
    wrapper.vm.resetButton();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.questionIndex).toBe(0);
    expect(wrapper.vm.proceeded).toBe(false);
    expect(wrapper.vm.buttonStyle.top).toBe('50%');
    expect(wrapper.vm.buttonStyle.left).toBe('50%');
  });

  it('shows the confirmation message when proceeded', async () => {
    wrapper.setData({ proceeded: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.confirmation-message').exists()).toBe(true);
    expect(wrapper.find('.confirmation-message').text()).toBe('Click confirmed! Well done!');
  });
});
