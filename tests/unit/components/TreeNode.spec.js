import { shallowMount, mount } from '@vue/test-utils'
import TreeNode from '../../../src/components/TreeNode'
import TreeLeaf from '../../../src/components/TreeLeaf'
import TreeDefaultNode from '../../../src/components/TreeDefaultNode'
import TreeCustomNode from './examples/custom_components/TreeNodeRed'


describe('TreeNode', () => {
  it('renders its data', () => {
    const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
    const defaultOrder = ['name']

    const wrapper = mount(TreeNode, {
      propsData: {
        rowData,
        defaultOrder
      }
    })

    const renderedText = wrapper.text().replace(/(\r\n|\n|\r|>)/gm, "").split(" ").filter(Boolean)

    expect(renderedText).toEqual(['Simba'])
  })

  it('is closed by default', () => {
    const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
    const defaultOrder = ['name']

    const wrapper = shallowMount(TreeNode, {
      propsData: {
        rowData,
        defaultOrder
      }
    })

    expect(wrapper.vm.isOpen).toBeFalsy()
  })

  it('opens when open button clicked', () => {
    const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
    const defaultOrder = ['name']

    const wrapper = mount(TreeNode, {
      propsData: {
        rowData,
        defaultOrder
      }
    })

    wrapper.find('.open-button').trigger('click')

    expect(wrapper.vm.isOpen).toBeTruthy()
  })

  describe('is open', () => {
    it('renders all children', () => {
      const rowData = { name: 'Simba', children: [{name: 'Kiara'}, {name: 'Aimer', children: [{name: 'Joy'}]}] }
      const defaultOrder = ['name']

      const wrapper = mount(TreeNode, {
        propsData: {
          rowData,
          defaultOrder,
        }
      })

      wrapper.setData({isOpen: true})

      const renderedText = wrapper.text().replace(/(\r\n|\n|\r|>|v)/gm, "").split(" ").filter(Boolean)

      expect(renderedText).toEqual(['Simba', 'Kiara', 'Aimer'])

    })

    describe('child is leaf', () => {
      it('renders TreeLeaf', () => {
        const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
        const defaultOrder = ['name']

        const wrapper = shallowMount(TreeNode, {
          propsData: {
            rowData,
            defaultOrder,
          }
        })

        wrapper.setData({isOpen: true})

        expect(wrapper.contains(TreeLeaf)).toBeTruthy()
      })
    })

    describe('child has its children', () => {
      it('renders TreeNode', () => {
        const rowData = { name: 'Simba', children: [{name: 'Aimer', children: [{name: 'Joy'}]}] }
        const defaultOrder = ['name']

        const wrapper = shallowMount(TreeNode, {
          propsData: {
            rowData,
            defaultOrder,
          }
        })

        wrapper.setData({isOpen: true})

        expect(wrapper.contains(TreeNode)).toBeTruthy()
      })
    })

    it('sets children depth', () => {
      const rowData = { name: 'Simba', children: [{name: 'Chiara'}] }
      const defaultOrder = ['name']

      const wrapper = mount(TreeNode, {
        propsData: {
          rowData,
          defaultOrder,
          depth: 5,
        }
      })

      wrapper.setData({isOpen: true})

      const child = wrapper.find(TreeLeaf)
      expect(child.vm.depth).toBe(6)
    })
  })

  describe('No slot provided', () => {
    it('renders default component', () => {
      const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
      const defaultOrder = ['name']

      const wrapper = shallowMount(TreeNode, {
        propsData: {
          rowData,
          defaultOrder
        }
      })

      expect(wrapper.contains(TreeDefaultNode)).toBeTruthy()
    })
  })

  describe('Node template provided', ()=> {
    it('renders slot', () => {
      const rowData = { name: 'Simba', children: [{name: 'Kiara'}] }
      const defaultOrder = ['name']

      const wrapper = shallowMount(TreeNode, {
        propsData: {
          rowData,
          defaultOrder
        },
        scopedSlots: {
          nodeTemplate: function(props){
            return this.$createElement(TreeCustomNode, props)
          }
        }
      })

      expect(wrapper.contains(TreeCustomNode)).toBeTruthy()
      expect(wrapper.contains(TreeDefaultNode)).toBeFalsy()
    })

    it('passes slot to node children', () => {
      const rowData = { name: 'Simba', children: [{name: 'Kiara', children: [{name: 'Koda'}]}] }
      const defaultOrder = ['name']

      const wrapper = mount(TreeNode, {
        propsData: {
          rowData,
          defaultOrder
        },
        scopedSlots: {
          nodeTemplate: function(props){
            return this.$createElement(TreeCustomNode, props)
          }
        }
      })

      wrapper.setData({isOpen: true})

      const childNodeWrapper = wrapper.findAll(TreeNode).wrappers[1]
      expect(childNodeWrapper.vm.$scopedSlots).toHaveProperty('nodeTemplate')
    })
  })
})