<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem><br />
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem><br />
		<FormItem prop="passwdCheck" placeholder="Password">
            <Input type="password" v-model="formInline.passwdCheck" placeholder="Password">
				<Icon type="ios-lock-outline" slot="prepend"></Icon>
			</Input>
        </FormItem><br />
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
			<Button style="margin-left: 8px">重置</Button>
        </FormItem>
		<p>
			<router-link to="./login">去登陆</router-link>
		</p>
    </Form>
</template>
<script>
    export default {
        data () {
			const validatePass = (rule, value, callback) => {
				console.log(rule+'--'+value);
                if (value === '') {
                    callback(new Error('请输入正确密码'));
                } else {
                    if (this.formInline.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
			const validatePassCheck = (rule, value, callback) => {
				console.log(rule+'=='+value+"=="+this.formInline.password);
                if (value === '') {
                    callback(new Error('请输入正确密码'));
                } else if (value !== this.formInline.password) {
                    callback(new Error('请输入正确密码'));
                } else {
                    callback();
                }
            }; 
            return {
                formInline: {
                    user: '',
                    password: '',
					passwdCheck: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
						{ validator: validatePass, trigger: 'blur' }
                    ],
					passwdCheck: [
                        { required: true, message: '请填写新密码', trigger: 'blur' },
						{ validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
			
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
