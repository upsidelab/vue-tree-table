import search from '../../../src/utils/search'

describe('search', () => {

  describe('no records matching search query', () => {
    const data = [{uuid: 'rapuzel', name: 'Rapunzel'}]
    const paths = search(data, 'Cinderella')

    it('returns empty array', () => {
      expect(paths).toEqual([])
    })
  })

  describe('leaf matching query', () => {
    const data = [{ uuid: 'tangled', name: 'Tangled', children: [ { uuid: 'rapuzel', name: 'Rapuzel'} ]}]
    const searchQuery = 'Rap'
    const paths = search(data, searchQuery)

    it('returns array with path leading to the leaf inclusive', () => {
      expect(paths.length).toBe(1)
      expect(paths[0]).toEqual(['tangled', 'rapuzel'])
    })
  })

  describe('node matching query', () => {
    const data = [{ uuid: 'tangled', name: 'Tangled', children: [ { uuid: 'rapuzel', name: 'Rapuzel'} ]}]
    const searchQuery = 'ngl'
    const paths = search(data, searchQuery)

    it('returns array with path leading to the node inclusive', () => {
      expect(paths.length).toBe(1)
      expect(paths[0]).toEqual(['tangled'])
    })
  })

  describe('multiple paths matching query', () => {
    const data = [
      {
        uuid: 'disney',
        name: 'Disney',
        children: [{ uuid: 'tangled', name: 'Tangled', children: [ { uuid: 'rapuzel', name: 'Rapuzel'} ]}]
      },
      {
        uuid: 'worner_bros',
        name: 'Worner Bros',
        children: [{ uuid: 'shreck_movie', name: 'Shreck', children: [ {uuid: 'shreck', name: 'Shreck'} ] }]
      }]
    const searchQuery = 'e'
    const paths = search(data, searchQuery)

    it('returns all matching paths', () => {
      const expectedPaths = [['disney'], ['disney', 'tangled'], ['disney', 'tangled', 'rapuzel'], ['worner_bros'],
        ['worner_bros', 'shreck_movie'], ['worner_bros', 'shreck_movie', 'shreck']]
      expect(paths).toEqual(expectedPaths)
    })

  })

})