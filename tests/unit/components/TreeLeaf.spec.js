import { shallowMount } from '@vue/test-utils'
import TreeLeaf from '../../../src/components/TreeLeaf'
import TreeDefaultLeaf from '../../../src/components/TreeDefaultLeaf'

describe('Tree Leaf', () => {
  describe('Has slot provided', () => {
    const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
    const defaultOrder = ['name']

    const wrapper = shallowMount(TreeLeaf, {
      propsData: {
        rowData,
        defaultOrder,
        depth: 0
      },
      scopedSlots: {
        leafTemplate: function(props){
          return 'Leaf'
        }
      }
    })

    it('renders provided slot', () => {
      expect(wrapper.text()).toBe('Leaf')
    })

  })

  describe('No slot provided', () =>{
    const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
    const defaultOrder = ['name']

    const wrapper = shallowMount(TreeLeaf, {
      propsData: {
        rowData,
        defaultOrder,
        depth: 0
      }
    })

    it('renders default component', () => {
      expect(wrapper.contains(TreeDefaultLeaf)).toBeTruthy()
    })
  })
})