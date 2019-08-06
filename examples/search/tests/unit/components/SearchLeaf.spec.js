import SearchLeaf from '../../../src/components/SearchLeaf'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

describe('SearchLeaf', () => {

  describe('on search display event', () => {

    describe('when uuid matching', () => {
      const rowData = { uuid: 'awesomeLeaf', name: 'Awesome Leaf' }
      const eventHub = new Vue()
      const wrapper = mount(SearchLeaf, { propsData: { rowData: rowData, depth: 1, defaultOrder: ['name'], eventHub: eventHub } })
      wrapper.setData({isShown: false})

      eventHub.$emit('search-display-event', ['awesomeLeaf'])

      it('shows its content', () => {
        expect(wrapper.text()).toEqual('Awesome Leaf')
      })
    })

  })

  describe('on search reset', () => {
    const rowData = { uuid: 'awesomeLeaf', name: 'Awesome Leaf' }
    const eventHub = new Vue()

    describe('when 0 level', () => {
      const wrapper = mount(SearchLeaf, { propsData: { rowData: rowData, depth: 0, defaultOrder: ['name'], eventHub: eventHub } })
      wrapper.setData({isShown: false})

      eventHub.$emit('search-reset')

      it('shows its content', () => {
        expect(wrapper.text()).toEqual('Awesome Leaf')
      })
    })

    describe('when > 0 level', () => {
      const wrapper = mount(SearchLeaf, { propsData: { rowData: rowData, depth: 2, defaultOrder: ['name'], eventHub: eventHub } })
      wrapper.setData({isShown: false})

      eventHub.$emit('search-reset')

      it('hides its content', () => {
        expect(wrapper.text()).toEqual('')
      })
    })
  })

  describe('on search hide all', () => {
    const rowData = { uuid: 'awesomeLeaf', name: 'Awesome Leaf' }
    const eventHub = new Vue()
    const wrapper = mount(SearchLeaf, { propsData: { rowData: rowData, depth: 0, defaultOrder: ['name'], eventHub: eventHub } })
    wrapper.setData({isShown: true})

    eventHub.$emit('search-hide-all')

    it('hides its content', () => {
      expect(wrapper.text()).toEqual('')
    })
  })

})