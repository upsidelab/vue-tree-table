import SearchNode from '../../../src/components/SearchNode'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

describe('Search Node', async () => {
  const rowData = {uuid: 'awesomeNode', name: 'Awesome Node', children: [{uuid: 'awesomeLeaf', name: 'Awesome Leaf'}]}

  describe('on search display event', async () => {

    describe('when matching uuid', async () => {
      describe('when last in the path', () => {
        const onOpen = jest.fn()
        const eventHub = new Vue()
        mount(SearchNode, { propsData: { rowData: rowData, defaultOrder: ['name'], depth: 0, eventHub: eventHub, onOpen: onOpen } })

        eventHub.$emit('search-display-event', ['awesomeNode'])

        it('does not call open', () => {
          expect(onOpen).not.toHaveBeenCalled()
        })
      })

      describe('when not last in the path', async () => {
        const onOpen = jest.fn()
        const eventHub = new Vue()
        const emitSpy =  jest.spyOn(eventHub, '$emit')
        const wrapper = mount(SearchNode, { propsData: { rowData: rowData, defaultOrder: ['name'], depth: 0, eventHub: eventHub, onOpen: onOpen } })

        eventHub.$emit('search-display-event', ['awesomeNode', 'awesomeLeaf'])

        it('calls open', () => {
          expect(onOpen).toHaveBeenCalled()
        })

        it('emits hide event for its children', async () => {
          await wrapper.vm.$nextTick()
          expect(emitSpy).toHaveBeenCalledWith('search-hide-event', 'awesomeLeaf')
        })

        it('retriggers search display event for its children', async () => {
          await wrapper.vm.$nextTick()
          expect(emitSpy).toHaveBeenCalledWith('search-display-event', ['awesomeLeaf'])
        })
      })

    })
  })

  describe('on search reset event', () => {
    const onClose = jest.fn()
    const eventHub = new Vue()
    mount(SearchNode, { propsData: { rowData: rowData, defaultOrder: ['name'], depth: 0, eventHub: eventHub, onClose: onClose } })

    eventHub.$emit('search-reset')

    it('calls onClose', () => {
      expect(onClose).toHaveBeenCalled()
    })
  })

})