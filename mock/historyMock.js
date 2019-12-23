const mockData = [
]
function generateMockData() {
  function RandomItem(item) {
    return item[Math.floor(Math.random() * item.length)]
  }
  const name = ['大师傅', '设立的', '地方', '史蒂芬', '热辐射']
  const env = ['test', 'pre', 'prod']
  const branchAddonbefore = ['release', 'pre', 'feature']
  const branchAddonafter = ['eewr', 'verft', 'dsfa', 'sdfsdf', 'qwe']
  const projectNameList = ['qiyue', 'feichi', 'moka', 'bengniao', 'saikunpeng', 'xiaozhu', 'zhishen', 'ziyouxing', 'aixingzou', 'liangqi', 'haima', 'leqi', 'dianlv', 'qingsongqi', 'zoubei', 'sale', 'xiaoma', 'xiaoqi', 'xiaojiu', 'dianma', 'chengguo']
  for (let n = 0; n < 100; n++) {
    mockData.push(
      {
        time: Number(new Date()) - (Math.floor(Math.random() * 10000 * 3600 * 24)),
        env: RandomItem(env),
        publishUser: RandomItem(name),
        projectName: RandomItem(projectNameList),
        branch: { name: RandomItem(branchAddonbefore) + '/' + RandomItem(branchAddonafter), commitId: Math.floor(Math.random() * 1000000000), commitAnthor: RandomItem(name) }
      }
    )
  }
}
generateMockData()

module.exports = mockData
