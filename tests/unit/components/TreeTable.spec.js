import { mount } from '@vue/test-utils'
import TreeTable from '../../../src/components/TreeTable'
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
})