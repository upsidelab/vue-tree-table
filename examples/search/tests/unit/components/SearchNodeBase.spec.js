import SearchNodeBase from '../../../src/components/SearchNodeBase'
import { mount } from '@vue/test-utils'
import Vue from 'vue'


describe('SearchNodeBase', () => {
  const rowData = {uuid: 'awesomeNode', name: 'Awesome Node', children: [{uuid: 'awesomeLeaf', name: 'Awesome Leaf'}]}

  describe('on search display event', () => {
    describe('is matching uuid', () => {

      it('shows its content', () => {
        const eventHub = new Vue()
        const wrapper = mount(SearchNodeBase, { propsData: { eventHub: eventHub, defaultOrder: ['name'], rowData: rowData } })
        wrapper.setData({isShown: false})

        eventHub.$emit('search-display-event', ['awesomeNode', 'awesomeLeaf'])

        expect(wrapper.vm.isShown).toBeTruthy()
      })

      describe('is last in the path', () => {
        it('does not open', () => {
          const eventHub = new Vue()
          const wrapper = mount(SearchNodeBase, { propsData: { eventHub: eventHub, defaultOrder: ['name'], rowData: rowData } })
          wrapper.setData({isShown: false})

          eventHub.$emit('search-display-event', ['awesomeNode'])

          expect(wrapper.vm.isOpen).toBeFalsy()
        })
      })

      describe('is not last in the path', () => {
        it('opens', () => {
          const eventHub = new Vue()
          const wrapper = mount(SearchNodeBase, { propsData: { eventHub: eventHub, defaultOrder: ['name'], rowData: rowData } })
          wrapper.setData({isShown: false})

          eventHub.$emit('search-display-event', ['awesomeNode', 'awesomeLeaf'])

          expect(wrapper.vm.isOpen).toBeTruthy()
        })
      })
    })
  })

  describe('on search reset event', () => {
    it('closes & shows its content', () => {
      const eventHub = new Vue()
      const wrapper = mount(SearchNodeBase, { propsData: { eventHub: eventHub, defaultOrder: ['name'], rowData: rowData } })

      eventHub.$emit('search-reset')

      expect(wrapper.vm.isShown).toBeTruthy()
      expect(wrapper.vm.isOpen).toBeFalsy()
    })
  })

  describe('on search hide all', () => {
    it('hides its content', () => {
      const eventHub = new Vue()
      const wrapper = mount(SearchNodeBase, { propsData: { eventHub: eventHub, defaultOrder: ['name'], rowData: rowData } })
      wrapper.setData({isShown: true})

      eventHub.$emit('search-hide-all')

      expect(wrapper.vm.isShown).toBeFalsy()
    })
  })

})