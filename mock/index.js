const Mock = require('mockjs')
const url = 'http://dev.bz.com/api'

Mock.Random.extend({
  state: () => {
    return {
      time: Mock.mock('@datetime("yyyy-MM-dd HH:mm")'),
      data: {
        memory: {
          total: '4096.00M',
          free: Mock.mock('@float(100, 4096, 1, 2)') + 'M'
        },
        cpu: Mock.mock('@integer(1, 100)') / 100
      }
    }
  }
})

Mock.mock(`${url}/status`, 'post', {
  state_list: [
    Mock.mock('@state'),
    Mock.mock('@state'),
    Mock.mock('@state'),
    Mock.mock('@state'),
    Mock.mock('@state')
  ]
})

export default Mock
