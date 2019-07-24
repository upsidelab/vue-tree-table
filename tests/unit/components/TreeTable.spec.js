import { mount } from '@vue/test-utils'
import TreeTable from '../../../src/components/TreeTable'
import TreeTableWithRowTemplate from './examples/TreeTableWithRowTemplate'
import TreeTableDefaultRow from './examples/TreeTableDefaultRow'

describe('TreeTable', () => {

  describe('default settings', () => {

    it('renders data in order specified in columns', () => {
      const wrapper = mount(TreeTableDefaultRow, {
        propsData: {
          tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}],
          columns: [{label: 'Surname', id: 'surname'}, {label: 'Name', id: 'name'}]
        }
      })
      const names = wrapper.text().replace(/(\r\n|\n|\r)/gm, "").split(" ").filter(Boolean)
      expect(names).toEqual(['Surname', 'Name', 'Kozak', 'Ziuta', 'Matolek', 'Koziolek'])
    })

  })

  describe('when row template provided', () => {

    it('first puts surname and then name', () => {
      const wrapper = mount(TreeTableWithRowTemplate, {
        propsData: {
          tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}],
          columns: [{label: 'Name', id: 'name'}, {label: 'Surname', id: 'surname'}]
        }
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('when row template not provided', () => {

    it('uses default row component', () => {
      const wrapper = mount(TreeTableDefaultRow, {
        propsData: {
          tableData: [{name: 'Ziuta', surname: 'Kozak' }, {name: 'Koziolek', surname: 'Matolek'}],
          columns: [{label: 'Name', id: 'name'}, {label: 'Surname', id: 'surname'}]
        }
      })

      expect(wrapper.element).toMatchSnapshot()
    })
  })
})