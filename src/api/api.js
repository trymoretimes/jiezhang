import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiUrl = 'http://git.com/api'
// const apiUrl = 'https://xiaoyounger.com/api'

// 获取首页数据
const getIndexList = (params) => wxRequest(params, `${apiUrl}/index`);

// 获取账单
const getBills = (params) => wxRequest(params, `${apiUrl}/bills`);

// 获取新建账单的账户
const getBillAssets = (params) => wxRequest(params, `${apiUrl}/bills/assets`);

// 获取新建账单的分类
const getBillCategories = (params) => wxRequest(params, `${apiUrl}/bills/categories`);

// 图表栏的数据获取
const Chart = (params) => wxRequest(params, `${apiUrl}/chart`);

// 资产管理
const Assets = (params) => wxRequest(params, `${apiUrl}/assets`);
const AssetIcon = () => wxRequest({}, `${apiUrl}/icons/assets`);

// 个人设置
const Settings = (params) => wxRequest(params, `${apiUrl}/settings`);

const Wallet = (params, c_id = 0) => {
  let url = `${apiUrl}/wallet`
  if (c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}

const WalletParent = (params) => wxRequest(params, `${apiUrl}/wallet/parent`);

const WalletList = (params) => wxRequest(params, `${apiUrl}/wallet/list`);

const Category = (params, c_id = 0) => {
  let url = `${apiUrl}/category`
  if (c_id != null && c_id != 0) url = `${url}/${c_id}`
  return wxRequest(params, url)
}

const CategoryParent = (params) => wxRequest(params, `${apiUrl}/category/parent`);

const CategoryIcon = () => wxRequest({}, `${apiUrl}/icons/categories`);

module.exports = {
  getIndexList,
  getBills,
  getBillAssets,
  getBillCategories,
  Chart,
  Assets,
  AssetIcon,
  Settings,
  Category,
  CategoryParent,
  Wallet,
  WalletList,
  WalletParent,
  CategoryIcon
}
