import TreeBody from '../../../src/components/TreeBody'
import { shallowMount, mount } from '@vue/test-utils'
import TreeLeaf from '../../../src/components/TreeLeaf'
import TreeNode from '../../../src/components/TreeNode'

describe('TreeBody', () => {

  it('renders all rows', () => {
    const tableData = [{name: 'Little Red Riding Hood', uuid: '123'}, {name: 'Cinderella', uuid: '1234', children: [{ name: 'Gapcio', uuid: '12312' }]}]
    const columns = ['name']

    const wrapper = shallowMount(TreeBody, {
      propsData: {
        tableData: tableData,
        columns: columns
      }
    })

    expect(wrapper.findAll(TreeLeaf).length).toBe(1)
    expect(wrapper.findAll(TreeNode).length).toBe(1)
  })

  describe('when row has no children', () => {
    it('renders leaf component', () => {
      const tableData = [{name: 'Czerwony Kapturek', uuid: '1231'}]
      const columns = ['name']

      const wrapper = shallowMount(TreeBody, {
        propsData: {
          tableData: tableData,
          columns: columns
        }
      })

      expect(wrapper.contains(TreeLeaf)).toBeTruthy()
      expect(wrapper.contains(TreeNode)).toBeFalsy()
    })
  })

  describe('when row has children', () => {
    it('renders node component', () => {
      const tableData = [{name: 'Cinderella', uuid: '1231', children: [{ name: 'Gapcio', uuid: '12312' }]}]
      const columns = ['name']

      const wrapper = shallowMount(TreeBody, {
        propsData: {
          tableData: tableData,
          columns: columns
        }
      })

      expect(wrapper.contains(TreeNode)).toBeTruthy()
      expect(wrapper.contains(TreeLeaf)).toBeFalsy()
    })
  })

  describe('Node template provided', ()=> {
    const tableData = [{ name: 'Simba', uuid: '123', children: [{name: 'Kiara', uuid: '1231', children: [{name: 'Koda', uuid: '123123123'}]}] }]

    const wrapper = mount(TreeBody, {
      propsData: {
        tableData,
        columns: ['name']
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
    const tableData = [{ name: 'Simba',  uuid: '123', children: [{name: 'Kiara',uuid: '1234', children: [{name: 'Koda',uuid: '12345'}]}] }, {name: 'Skaza',uuid: '123456'}]

    const wrapper = mount(TreeBody, {
      propsData: {
        tableData,
        columns: ['name']
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