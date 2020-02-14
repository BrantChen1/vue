<template>
<div>
  <div>
    <Form :model="tableData" :label-width="80">
      <Col span="5">
        <FormItem label="客户名称" prop="name">
          <Input v-model="tableData.name" placeholder="请输入客户名称" :clearable="true" :maxlength="20" @on-enter="query"/>
        </FormItem>
      </Col>
        <Button class="query" type="primary" icon="ios-search" @click="query"></Button>
    </Form>
  </div>
<div style="width:1000px;margin: 0 auto;padding-top:30px">
  <Form :model="tableData">
        <Row :gutter="20">
          <Col span="10">
            <FormItem>
              <Button @click="add" type="primary">新增</Button>
            </FormItem>
          </Col>
        </Row>
  </Form>
    <Table :columns="columns" :data="data" border></Table>
    <add @getAddData="getAddData" @changeModal="changeModal" :title="popData.title" :modal="popData.modal" :popData="popData.editData"></add>
    <update @updateData="updateData" @changeModal="changeModal" :title="popData.title" :modal="popData.modal" :popData="popData.editData"></update>
</div>
</div>
</template>
<script>
import add from './add';
import update from './update';
export default {
  components: {
    add,
    update
  },
  data () {
    return {
      tableData: {
        name: '',
        age: '',
        address: ''
      },
      columns: [
        {
          title: '客户名称',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '住址',
          key: 'address'
        },
        {
          title: '操作',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                style: {
                  marginRight: '5px',
                  'margin-left': '5px',
                  'background': '#f56c6c',
                  color: '#fff',
                  'padding': '2px 8px'
                },
                on: {
                  click: () => {
                    this.$Modal.confirm({
                      title: '确认删除',
                      content: '<p>是否确认删除？</p>',
                      onOk: () => {
                        this.remove(params.index);
                      },
                      onCancel: () => {
                        this.$Message.info('取消删除');
                      }
                    });
                  }
                }
              }, '删除'),
              h('Button', {
                style: {
                  marginRight: '5px',
                  'margin-left': '5px',
                  'background': '#f56c6c',
                  color: '#fff',
                  'padding': '2px 8px'
                },
                on: {
                  click: () => {
                    this.popData.modal = true;
                    this.popData.editData = params.row;
                    // this.updateData(params);
                  }
                }
              }, '修改'),
              h('Button', {
                style: {
                  marginRight: '5px',
                  'padding': '2px 8px'
                },
                on: {
                  click: () => {
                    console.log(params.index);
                    this.show(params.index);
                  }
                }
              }, '详情')
            ]);
          }

        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      popData: {
        modal: false,
        title: '',
        editData: {}
      },
      dataArr: []
    };
  },
  methods: {
    add () {
      this.popData.modal = true;
      this.popData.title = '新增';
    },
    remove (index) {
      this.data.splice(index, 1);
    },
    changeModal (param) {
      this.popData.modal = param;
    },
    getAddData (param) {
      console.log(param);
      this.data.push(param);
    },
    updateData (editData) {
      this.popData.modal = true;
    },
    show (index) {
      this.$Modal.info({
        title: '客户详情',
        content: `客户名称：${this.data[index].name}<br>年龄：${this.data[index].age}<br>住址：${this.data[index].address}`
      });
    },
    query () {
      let [custName] = [this.tableData.name];
      let returnData = this.dataArr;
      if (custName) {
        console.log(custName);
        returnData = returnData.filter(function (item) {
          console.log(222);
          return item.custName.includes(custName);
        });
      }
      this.data = returnData;
    }
  }
};
</script>
