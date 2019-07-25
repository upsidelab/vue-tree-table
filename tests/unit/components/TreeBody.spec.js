import TreeBody from '../../../src/components/TreeBody'
import { shallowMount } from '@vue/test-utils'
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

})