import Mock from 'mockjs';
import {getFeatureList, getTriparFeature, getSelfData, getTriparData} from './feature/data';
import {getRuleOper} from './rule/data';
import {getModelList} from './model/data';
import { login, logout, getUserInfo } from './login';
import { getTableData, getDragList, uploadImage, getOrgData } from './data';
import { getMessageInit, getContentByMsgId, hasRead, removeReaded, restoreTrash, messageCount } from './user';

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
});

// 登录相关和获取用户信息
// Mock.mock(/\/login/, login);
Mock.mock(/\/get_info/, getUserInfo);
Mock.mock(/\/logout/, logout);
Mock.mock(/\/get_table_data/, getTableData);
Mock.mock(/\/get_drag_list/, getDragList);
Mock.mock(/\/save_error_logger/, 'success');
Mock.mock(/\/image\/upload/, uploadImage);
Mock.mock(/\/message\/init/, getMessageInit);
Mock.mock(/\/message\/content/, getContentByMsgId);
Mock.mock(/\/message\/has_read/, hasRead);
Mock.mock(/\/message\/remove_readed/, removeReaded);
Mock.mock(/\/message\/restore/, restoreTrash);
Mock.mock(/\/message\/count/, messageCount);
Mock.mock(/\/get_org_data/, getOrgData);
/*
特征管理
* */
Mock.mock(/\/get_feature_list/, getFeatureList);
Mock.mock(/\/get_tripar_feature/, getTriparFeature);
Mock.mock(/\/get_self_data/, getSelfData);
Mock.mock(/\/get_tripar_data/, getTriparData);

/*
 规则管理
 **/
Mock.mock(/\/get_rule_oper/, getRuleOper);

/*
模型管理
**/
Mock.mock(/\/get_model_list/, getModelList);
export default Mock;
