<template>
    <div class="sym-layout">
        <Layout>
            <Header class="header-bg-fix"></Header>
            <Layout>
                <Content class="contentClass">
                    <Row type="flex" justify="center" class="logoRow">
                        <Col span=2 >
                            <img src="../images/SymphonyLogo.png" height=75/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=24 :sm=18 :md=10 :lg=8>
                            <p class="p1">Email Verification</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=18 :sm=16 :md=14 :lg=10>
                            <p class="p3">
                                First, let's verify your email address. You will receive a verification email shortly that will include a link to continue your signup interview. 
                            </p>
                        </Col>
                    </Row>
                    <Form ref="emailForm" :model="emailForm" :rules="validation_rules">
                        <Row :gutter=16 type="flex" justify="center" class="standardRow">
                            <Col span=8>
                                <FormItem prop="email">
                                    <Input v-model="emailForm.email" placeholder="Email Address"></Input>
                                </FormItem>                                 
                            </Col>
                        </Row>
                    </Form>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col span=2>
                            <Button type="primary" size="large" @click="handleValidateEmail('emailForm')">Continue</Button>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=18 :sm=16 :md=14 :lg=10>
                            <p class="p4">
                                <b>Please Note</b>: Symphony is not accepting signups from "free mail" addresses at this time. This includes GMail, Yahoo, Outlook, etc.
                            </p>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
        
    </div>
</template>
<script>
    //import freemail from '../libs/freemail.js';

    export default {
        data() {
            const validateFreemail = (rule, value, callback) => {
                if (value !== '')
                {
                    //var index_at = value.indexOf('@');
                    //var domain = value.substring(index_at + 1, value.indexOf('.', index_at));

                    //var isFree = freemail.isFree(value) || freemail.isDisposable(value);
                    //if (isFree)

                    var re = '[a-zA-Z_\\.-]+@((hotmail)|(yahoo)|(gmail))\\.[a-z]{2,4}';
                    if (value.match(re))
                    {
                        callback(new Error('We are not accepting freemail addresses at this time.'));    
                    }
                    else
                    {
                        callback();
                    }          

                }
                else
                {
                    // the required field validator will hopefully catch this.
                    callback();
                }
            };

            return {
                emailForm: {
                    email: ''
                },
                validation_rules: {
                    email: [
                        { required: true, message: 'Please provide your email address.', trigger: 'blur'},
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur'},
                        { validator: validateFreemail, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleValidateEmail(name) {
                this.$refs[name].validate((valid) => {
                    if (valid)
                    {

                    }
                    else
                    {
                        this.$Message.error()
                    }


                    //this.$router.push({name: "contact"});

                })

                
                
            }
        }
    }
</script>
<style scoped>
    .sym-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        margin:50px;
    }

    .contentClass {


    }

    .header-bg-fix {
        background: #F5F7F9;
    }

    .p1 {
        font-size: 2.8em;
        text-align: center;
    }

    .p2 {
        font-size: 2.2em;
        text-align: center;
    }

    .p3 {
        margin-top:10px;
        font-size:1.6em;
        text-align:center;
    }
</style>