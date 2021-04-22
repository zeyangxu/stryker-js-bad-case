import component from './example.vue'
import { mount } from '@vue/test-utils'

describe('test', () => {
  test('dummy test', () => {
    const wrapper = mount(component)
    expect(wrapper.exists()).toBe(true)
  })
})