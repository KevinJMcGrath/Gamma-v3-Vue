<template>
	<div class="sym-layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout class="layoutClassStationary">
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="3" direction="vertical">
                        <Step title="You" content="Information about the first user."></Step>
                        <Step title="Your Company" content="Some details about your organization."></Step>
                        <Step title="Symphony Service" content="How should the service be configured?"></Step>
                        <Step title="Legalese" content="Our terms and conditions."></Step>
                        <Step title="Billing" content="Credit card and billing information."></Step>
                        <Step title="Purchase Summary" content="Subscription summary and confirmation."></Step>
                        <Step title="Finished!" content=""></Step>
                    </Steps>
                </Sider>
                <Content class="contentClass">
                    <Layout class="invisibleLayout">
                        <Row type="flex" justify="center" class="logoRow">
                            <Col span=2 >
                                <img src="../images/Legal-Icon.png" height=75/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=24 :md=24 :lg=24>
                                <p class="p2">Our Terms of Service...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <p  class="p4">
                                    Listed below is a collection of our agreements and policies. Each item will provide you with an option to download the document to read at your leisure. At minimum, you must agree to our terms and conditions listed in the End User License Agreement (EULA) in order to proceed with your order. 
                                    <br/>
                                    <br/>
                                    If you need additional documentation, please contact us directly.
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" class="standardRow">
                            <Col span=6></Col>
                            <Col span=10>
                                <Collapse>
                                    <Panel name="pnl_gdpr">
                                        <b>General Data Protection Regulation (EU)</b>
                                        <p slot="content">
                                            This document describes how Symphony Communications, LLC conforms to the requirements of the EU GDPR.
                                            <br/><br/>
                                            <Button type="primary">
                                                <Icon type="eye"></Icon>
                                                Read
                                            </Button>
                                            <Button type="primary">
                                                <Icon type="android-download"></Icon>
                                                Download
                                            </Button>
                                        </p>
                                    </Panel>
                                    <Panel name="pnl_privacy">
                                        <b>Privacy Policy - Symphony Communications</b>
                                        <p slot="content">
                                            Our standard privacy policy regarding any personal information you submit on any of our public facing pages. 
                                            <br/><br/>
                                            <Button type="primary">
                                                <Icon type="eye"></Icon>
                                                Read
                                            </Button>
                                            <Button type="primary">
                                                <Icon type="android-download"></Icon>
                                                Download
                                            </Button>
                                        </p>
                                    </Panel>
                                    <Panel name="pnl_msa">
                                        <b>End User License Agreement</b>
                                        <p slot="content">
                                            Terms and conditions for using the Symphony platform for communication. You are required to agree to these conditions before continuing. 
                                            <br/><br/>
                                            <Button type="primary">
                                                <Icon type="eye"></Icon>
                                                Read
                                            </Button>
                                            <Button type="primary">
                                                <Icon type="android-download"></Icon>
                                                Download
                                            </Button>
                                        </p>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=20 :sm=20 :md=20 :lg=14>
                                <Form ref="legalForm" :model="legalForm" :rules="validation_rules">
                                    <FormItem prop="terms_conditions" :required=true>
                                        <Checkbox v-model="legalForm.terms_conditions" @on-change="fieldChange('terms_conditions')" >
                                            <span>I have read and agree to the EULA</span>
                                        </Checkbox>
                                    </FormItem>
                                </Form>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="buttonRow">
                            <Col :xs=5 :sm=4 :md=3 :lg=2 class-name="backButtonCol">
                                <Button type="primary" size="large" @click="handleGotoService">Back</Button>
                            </Col>
                            <Col :xs=6 :sm=5 :md=4 :lg=3 class-name="nextButtonCol">
                                <Button type="primary" size="large" @click="handleGotoBilling">Continue</Button>
                            </Col>
                        </Row>
                    </Layout>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
    </div>	
</template>
<script>
    import globalState from '../libs/interviewState.js';

	export default {
        data() {
            const validateTandC = (rule, value, callback) => {
                console.log(value)

                if (value === true)
                {
                    callback();
                }
                else
                {
                    callback(new Error('You must agree to the terms specified in the EULA to proceed.'));
                }                
            };

            return {
                legalForm: {
                    terms_conditions: false
                },
                validation_rules: {
                    terms_conditions: [
                        //{ required: true, type: "boolean",  message: 'Please check that you agree to the terms specified in the EULA', trigger: 'change'}
                        { validator: validateTandC, trigger: 'change' }
                    ]
                }
            }
        },
        mounted: function() {

            if (globalState.legal)
            {
                this.legalForm.terms_conditions = globalState.legal.terms_conditions;
            }
        },
        methods: {
            fieldChange(fieldName) { 
                switch(fieldName)
                {
                    case 'terms':
                        globalState.legal.terms_conditions = this.legalForm.terms_conditions;
                        break;
                    default: 
                        break;
                }
            },
            handleGotoBilling () {
                this.$refs['legalForm'].validate((valid) => {
                    if (valid)
                    {
                        this.$router.push({name: "billing"});
                    }
                    else
                    {
                        this.$Message.error();
                    }
                })
                
                
            },
            handleGotoService() {
                this.$router.push({name: "service"})
            }
        }
    }
</script>
<style scoped>

</style>