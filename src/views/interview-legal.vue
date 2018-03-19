<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="3" direction="vertical">
                        <Step title="You" content="Information about the first user."></Step>
                        <Step title="Your Company" content="Some details about your organization."></Step>
                        <Step title="Symphony Service" content="How should the service be configured?"></Step>
                        <Step title="Legalese" content="Our terms and conditions."></Step>
                        <Step title="Billing Details" content="Credit card and billing information"></Step>
                        <Step title="Purchase Summary" content="Subscription summary and confirmation."></Step>
                        <Step title="Finished!" content=""></Step>
                    </Steps>
                </Sider>
                <Content style="min-height: 600px;">
                    <Layout>
                        <Row type="flex" justify="center" class="logoRow">
                            <Col span=2 >
                                <img src="../images/SymphonyLogo.png" height=75/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=24 :md=24 :lg=24>
                                <p class="p2">Our Legal Mumbo Jumbo...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <p  class="p4">
                                    
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col  :xs=20 :sm=20 :md=20 :lg=14>
                                <Form :model="legalForm" >
                                    <FormItem>
                                        <Checkbox v-model="legalForm.terms" @on-change="fieldChange('terms')">
                                            <span>I have read and agree to Symphony's <a href="#">Terms and Conditions</a></span>
                                        </Checkbox>
                                    </FormItem>
                                    <FormItem>
                                        <Checkbox v-model="legalForm.ofac" @on-change="fieldChange('ofac')">
                                            <span>I agree to allow Symphony to request information from the <a href="#">Office of Foreign Asset Control</a></span>
                                        </Checkbox>
                                    </FormItem>
                                    <FormItem>
                                        <Checkbox v-model="legalForm.other" @on-change="fieldChange('other')">
                                            <span>I agree to allow Symphony to do other things that might not be covered above.</span>
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
            return {
                legalForm: {
                    terms: false,
                    ofac: false,
                    other: false
                }
            }
        },
        mounted: function() {

            if (globalState.legal)
            {
                this.legalForm.terms = globalState.legal.terms;
                this.legalForm.ofac = globalState.legal.ofac;
                this.legalForm.other = globalState.legal.other;
            }
        },
        methods: {
            fieldChange(fieldName) { 
                switch(fieldName)
                {
                    case 'fname':
                        globalState.legal.terms = this.legalForm.terms;
                        break;
                    case 'lname':
                        globalState.legal.ofac = this.legalForm.ofac;
                        break;
                    case 'email':
                        globalState.legal.other = this.legalForm.other;
                        break;
                    default: 
                        break;
                }
            },
            handleGotoBilling () {
                //console.log("moving to start the flow.");
                this.$router.push({name: "billing"});
                
            },
            handleGotoService() {
                this.$router.push({name: "service"})
            }
        }
    }
</script>
<style scoped>

	@font-face {
        font-family: "MrRoboto";
        src: url(../assets/fonts/Roboto-Regular.ttf);
    }
    body {

        font-family: "MrRoboto";
    }
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        margin:50px;
    }

    .headerClass {
        background: #F5F7F9;
    }

    .sidebarClass {
        background: white;
        border-radius: 10px;
        margin:0 10px;
        padding-top:15px;
        padding-left:5px;
    }

</style>