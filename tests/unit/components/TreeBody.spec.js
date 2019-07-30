import TreeBody from '../../../src/components/TreeBody'
import { shallowMount, mount } from '@vue/test-utils'
import TreeLeaf from '../../../src/components/TreeLeaf'
import TreeNode from '../../../src/components/TreeNode'

describe('TreeBody', () => {

  it('renders all rows', () => {
    const data = [{name: 'Little Red Riding Hood'}, {name: 'Cinderella', children: [{ name: 'Gapcio' }]}]
    const columns = ['name']

    const wrapper = shallowMount(TreeBody, {
      propsData: {
        data: data,
        columns: columns
      }
    })

    expect(wrapper.findAll(TreeLeaf).length).toBe(1)
    expect(wrapper.findAll(TreeNode).length).toBe(1)
  })

  describe('when row has no children', () => {
    it('renders leaf component', () => {
      const data = [{name: 'Czerwony Kapturek'}]
      const columns = ['name']

      const wrapper = shallowMount(TreeBody, {
        propsData: {
          data: data,
          columns: columns
        }
      })

      expect(wrapper.contains(TreeLeaf)).toBeTruthy()
      expect(wrapper.contains(TreeNode)).toBeFalsy()
    })
  })

  describe('when row has children', () => {
    it('renders node component', () => {
      const data = [{name: 'Cinderella', children: [{ name: 'Gapcio' }]}]
      const columns = ['name']

      const wrapper = shallowMount(TreeBody, {
        propsData: {
          data: data,
          columns: columns
        }
      })

      expect(wrapper.contains(TreeNode)).toBeTruthy()
      expect(wrapper.contains(TreeLeaf)).toBeFalsy()
    })
  })

  describe('Node template provided', ()=> {
    const data = [{ name: 'Simba', children: [{name: 'Kiara', children: [{name: 'Koda'}]}] }]

    const wrapper = mount(TreeBody, {
      propsData: {
        data,
        columns: [{id: 'name', label: 'Name'}]
      },
      scopedSlots: {
        nodeTemplate: function(props){
          return 'Node'
        }
      }
    })

    it('passes slot to node children', () => {
      const childNodeWrapper = wrapper.findAll(TreeNode).wrappers[0]
      expect(childNodeWrapper.vm.$scopedSlots).toHaveProperty('nodeTemplate')
    })
  })

  describe('Leaf template provided', () => {
    const data = [{ name: 'Simba', children: [{name: 'Kiara', children: [{name: 'Koda'}]}] }, {name: 'Skaza'}]

    const wrapper = mount(TreeBody, {
      propsData: {
        data,
        columns: [{id: 'name', label: 'Name'}]
      },
      scopedSlots: {
        lefTemplate: function(props){
          return 'Leaf'
        }
      }
    })

    it('passes slot to node children', () => {
      const childNodeWrapper = wrapper.findAll(TreeNode).wrappers[0]
      expect(childNodeWrapper.vm.$scopedSlots).toHaveProperty('leafTemplate')
    })

    it('passes slot to leaf children', () => {
      const childLeafWrapper = wrapper.findAll(TreeLeaf).wrappers[0]
      expect(childLeafWrapper.vm.$scopedSlots).toHaveProperty('leafTemplate')
    })

  })
})