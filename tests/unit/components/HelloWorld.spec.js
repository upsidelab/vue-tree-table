import { mount } from '@vue/test-utils'
import HelloWorld from '../../../src/components/HelloWorld'

describe('HelloWorld', () => {
  it('is Vue component', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
