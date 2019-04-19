const Mock = require("mockjs")

Mock.mock("http://dev.bz.com/api/1", "get", { "foo|2-7": 100 })

export default Mock
