import { mount } from '@vue/test-utils'
import TreeTable from '../../../src/components/TreeTable'
import TreeTableWithRowTemplate from './examples/TreeTableWithRowTemplate'
import TreeTableDefaultRow from './examples/TreeTableDefaultRow'

describe('TreeTable', () => {
  describe('when row template provided', () => {
    const wrapper = mount(TreeTableWithRowTemplate, {
      propsData: {
        tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}]
      }
    })

    it('first puts surname and then name', () => {
      const names = wrapper.text().replace(/(\r\n|\n|\r)/gm, "").split(" ").filter(Boolean)
      expect(names).toEqual(['Kozak', 'Ziuta', 'Matolek', 'Koziolek'])
    })
  })

  describe('when row template not provided', () => {
    const wrapper = mount(TreeTableDefaultRow, {
      propsData: {
        tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}]
      }
    })

    it('uses default row component', () => {
      const names = wrapper.text().replace(/(\r\n|\n|\r)/gm, "").split(" ").filter(Boolean)
      expect(names).toEqual(['Ziuta', 'Kozak', 'Koziolek', 'Matolek'])
    })
  })
})