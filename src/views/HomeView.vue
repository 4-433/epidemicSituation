<template>
  <div>
    <h1>人员信息采集系统</h1>
    <el-form
      ref="form"
      :model="form"
      style="text-align: left"
      label-position="left"
      label-width="80px"
    >
      <el-form-item label="姓名:">
        <div class="nameForm">
          <el-input
            v-model="form.name"
            v-if="!checked"
            placeholder="请输入姓名"
          ></el-input>
          <div class="ethnicMinorities" v-if="checked">
            <el-input v-model="firstName" placeholder="请输入姓"></el-input>
            <div style="margin: 0 5px; font-size: 20px">•</div>
            <el-input v-model="lastName" placeholder="请输入名"></el-input>
          </div>
          <el-checkbox
            v-model="checked"
            @change="isPeople"
            style="margin-left: 10px"
            >是否是少数名族</el-checkbox
          >
        </div>
      </el-form-item>
      <el-form-item label="性别:">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="nan"></el-option>
          <el-option label="女" value="nv"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号:">
        <el-input
          placeholder="请输入身份证号"
          v-model="form.card"
          @blur="idNumberCheck"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄:">
        <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="手机号码:">
        <el-input placeholder="请输入手机号码" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="工作单位:">
        <el-input
          placeholder="请输入工作单位"
          v-model="form.workplace"
        ></el-input>
      </el-form-item>
      <el-form-item label="职务/职级:">
        <el-input
          placeholder="请输入职务/职级"
          v-model="form.office"
        ></el-input>
      </el-form-item>
      <el-form-item label="家庭住址:">
        <el-input
          placeholder="请输入家庭住址"
          v-model="form.address"
        ></el-input>
      </el-form-item>
      <el-form-item label="辖区/专项组:">
        <el-select v-model="form.area" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在社区(分组):">
        <el-select v-model="form.community" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="form.communitytwo" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="现所在小区(方舱、隔离点):">
        <div class="addressForm">
          <el-select v-model="form.xiaocxommunity" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="form.xiaocxommunitytwo" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="form.xiaocxommunitythree" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="现居住地:">
        <el-input
          placeholder="请输入现居住地"
          v-model="form.xzaddress"
        ></el-input>
      </el-form-item>
      <el-form-item label="现人员类别:">
        <div class="addressForm">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="form.typetwo" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="form.typethree" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="同住人员:">
        <el-input placeholder="请输入同住人员" v-model="form.person"></el-input>
      </el-form-item>
      <el-form-item label="人员属性:">
        <el-select v-model="form.sx" placeholder="请选择人员属性">
          <el-option label="A" value="nan"></el-option>
          <el-option label="B" value="nv"></el-option>
          <el-option label="T" value="nv"></el-option>
          <el-option label="其他" value="nv"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="特殊资源:">
        <el-date-picker
          v-model="form.datetimeend"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="备注:">
        <el-input type="textarea" v-model="form.remake"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitR } from "@/api/sbumit";
export default {
  data() {
    return {
      checked: false,
      firstName: "",
      lastName: "",
      form: {
        name: "",
        sex: "",
        card: "",
        age: "",
        phone: "",
        workplace: "",
        office: "",
        address: "",
        area: "",
        community: "",
        communitytwo: "",
        xiaocxommunity: "",
        xiaocxommunitytwo: "",
        xiaocxommunitythree: "",
        xzaddress: "",
        type: "",
        typetwo: "",
        typethree: "",
        person: "",
        sx: "",
        datetimeend: "",
        remake: "",
      },
      options: [
        {
          value: "XX辖区/XX组1",
          label: "XX辖区/XX组1",
        },
        {
          value: "XX辖区/XX组2",
          label: "XX辖区/XX组2",
        },
        {
          value: "XX辖区/XX组3",
          label: "XX辖区/XX组3",
        },
        {
          value: "XX辖区/XX组4",
          label: "XX辖区/XX组4",
        },
        {
          value: "XX辖区/XX组5",
          label: "XX辖区/XX组5",
        },
      ],
    };
  },
  methods: {
    isPeople() {
      if (this.checked) {
        this.form.name = "";
      } else {
        this.form.name = "";
        this.lastName = "";
        this.firstName = "";
      }
    },
    onSubmit() {
      if (this.checked) {
        this.form.name = this.firstName + "•" + this.lastName;
      }
      submitR(this.form).then((res) => {
        if (res.success) {
          this.$message.success("提交成功！");
          this.form = "";
        } else {
          this.$message.error(res.message);
        }
      });
    },
    idNumberCheck() {
      var p =
        /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (p.test(this.form.card)) {
        var year = this.form.card.substring(6, 10);
        var current_time = new Date().getFullYear();
        this.form.age = current_time - year;
      } else {
        this.$message.error("身份证格式错误");
      }
    },
  },
};
</script>

<style lang="scss">
.nameForm {
  text-align: left;
  .ethnicMinorities {
    display: flex;
    flex-wrap: nowrap;
  }
}
.addressForm {
  display: flex;
  flex-wrap: nowrap;
}
.el-input__inner {
  width: 100%;
}
</style>