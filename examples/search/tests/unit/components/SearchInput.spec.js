import SearchInput from '../../../src/components/SearchInput'
import { shallowMount } from '@vue/test-utils'

describe('SearchInput', () => {
  describe('search query is empty', () => {
    const data = []
    const eventHub = { $emit: jest.fn() }
    const wrapper = shallowMount(SearchInput, { propsData: { eventHub: eventHub, tableData: data }})
    const input = wrapper.find('input')
    input.setValue('')

    wrapper.vm.search()

    it('emits reset', () => {
      expect(eventHub.$emit).toHaveBeenCalledTimes(1)
      expect(eventHub.$emit).toHaveBeenCalledWith('search-reset')
    })
  })

  describe('search query is not empty', () => {
    const data = [{uuid: 'test', name: 'test'}]
    const eventHub = { $emit: jest.fn() }
    const wrapper = shallowMount(SearchInput, { propsData: { eventHub: eventHub, tableData: data }})
    const input = wrapper.find('input')
    input.setValue('test')

    wrapper.vm.search()

    it('emits reset', () => {
      expect(eventHub.$emit).toHaveBeenCalledWith('search-reset')
    })

    it('emits hide-all', () => {
      expect(eventHub.$emit).toHaveBeenCalledWith('search-hide-all')
    })

    it('emits search-display for all found paths', () => {
      expect(eventHub.$emit).toHaveBeenCalledWith('search-display-event', ['test'])
    })

  })
})