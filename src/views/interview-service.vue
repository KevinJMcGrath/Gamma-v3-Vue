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
                        <Row type="flex" justify="center" style="height:75px;">
                            <Col span=2 >
                                <img src="../images/SymphonyLogo.png" height=75/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=8>
                                <p style="font-size: 2.2em;text-align:center;">Your Symphony Service...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=16>
                                <p style="margin-top:10px;font-size:1.2em;text-align:center;">
                                    Here, we ask you to provide some infomration on how you want your new Symphony service to be configured. <b>Note:</b> The "Global Name" is used to configure how your company is shown to other Symphony member companies in our Global Directory.
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=10>
                                <Form :model="serviceForm" :label-width="150">
                                    <FormItem label="Requested Domain">
                                        <Input v-model="serviceForm.subdomain" @on-change="fieldChange('subdomain')">
                                            <span slot="prepend">https://</span>
                                            <span slot="append">.symphony.com</span>
                                        </Input>
                                    </FormItem>
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
                                </Form>
                            </Col>
                        </Row>
                        <Row :gutter="16" type="flex" justify="center" style="margin-top:30px;">
                            <Col span=2>
                                <Button type="primary" size="large" @click="handleGotoCompany">Back</Button>
                            </Col>
                            <Col span=2>
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