<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="2" direction="vertical">
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
                            <Col  :xs=24 :sm=18 :md=10 :lg=8>
                                <p class="p2">Your Symphony Service...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <p class="p4">
                                    Here, we ask you to provide some infomration on how you want your new Symphony service to be configured. <b>Note:</b> The "Global Name" is used to configure how your company is shown to other Symphony member companies in our Global Directory.
                                </p>
                            </Col>
                        </Row>

                        <Form :model="serviceForm" :label-width="150">
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=20 :sm=20 :md=16 :lg=14>                                
                                <FormItem label="Requested Domain">
                                    <Input v-model="serviceForm.subdomain" @on-change="fieldChange('subdomain')">
                                        <span slot="prepend">https://</span>
                                        <span slot="append">.symphony.com</span>
                                    </Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" >
                            <Col :xs=20 :sm=20 :md=12 :lg=10> 
                                <FormItem label="Initial Users">
                                    <InputNumber :min="10" :step="1" v-model="serviceForm.seats" @on-change="fieldChange('seats')"></InputNumber>
                                    <a href="#">Pricing</a>
                                </FormItem>
                                <FormItem label="Global Name">
                                    <Input v-model="serviceForm.directoryname" @on-change="fieldChange('directoryname')"></Input>
                                </FormItem>
                                <FormItem label="Support Tier">
                                    <Select v-model="serviceForm.support_tier" placeholder="Select" @on-change="fieldChange('support_tier')">
                                        <Option value="bronze">Self-Service (Free)</Option>
                                        <Option value="silver">Silver ($500/year)</Option>
                                        <Option value="gold">Gold ($1000/year)</Option>
                                        <Option value="platinum">Platinum ($2000/year)</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="Promo Code">
                                    <Input v-model="serviceForm.promocode" @on-change="fieldChange('promocode')"></Input>
                                </FormItem>                                
                            </Col>
                        </Row>
                        </Form>

                        <Row type="flex" justify="center" class="buttonRow">
                            <Col :xs=5 :sm=4 :md=3 :lg=2 class-name="backButtonCol">
                                <Button type="primary" size="large" @click="handleGotoCompany">Back</Button>
                            </Col>
                            <Col :xs=6 :sm=5 :md=4 :lg=3 class-name="nextButtonCol">
                                <Button type="primary" size="large" @click="handleGotoLegal">Continue</Button>
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
                serviceForm: {
                    subdomain: '',
                    seats: 10,
                    directoryname: '',
                    support_tier: '',
                    promocode: ''
                }
            }
        },
        mounted: function() {

            if (globalState.service)
            {
                this.serviceForm.subdomain = globalState.service.subdomain;
                this.serviceForm.seats = globalState.service.seats;
                this.serviceForm.directoryname = globalState.service.directoryname;
                this.serviceForm.support_tier = globalState.service.support_tier;
                this.serviceForm.promocode = globalState.service.promocode;
            }
        },
        methods: {
            fieldChange(fieldName) { 
                switch(fieldName)
                {
                    case 'subdomain':
                        globalState.service.subdomain = this.serviceForm.subdomain;
                        break;
                    case 'seats':
                        globalState.service.seats = this.serviceForm.seats;
                        break;
                    case 'directoryname':
                        globalState.service.directoryname = this.serviceForm.directoryname;
                        break;
                    case 'support_tier':
                        globalState.service.support_tier = this.serviceForm.support_tier;
                        break;
                    case 'promocode':
                        globalState.service.promocode = this.serviceForm.promocode;
                        break;
                    default: 
                        break;
                }
            },
            handleGotoLegal () {
                this.$router.push({name: "legal"});
                
            },
            handleGotoCompany() {
                this.$router.push({name: "company"})
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