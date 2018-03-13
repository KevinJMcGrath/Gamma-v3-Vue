<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="5" direction="vertical">
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
                                <p style="font-size: 2.2em;text-align:center;">Review Your Subscription...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=16>
                                <p style="margin-top:10px;font-size:1.2em;text-align:center;">
                                    In the home stretch now! Review the details of your subscription below. If you're satisfied, click the "Purchase Now" button. 
                                    <br/>
                                    <br/>
                                    <b>Note:</b> Because our service is built to order, it may take up to an hour for you to receive your service credentials. We will not process your payment until we have spawned your instance and delivered your login details. 
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=16>
                                <Collapse v-model="accordionPanel">
                                    <Panel name="servicePanel">
                                        Service Details
                                        <p slot="content">
                                            <Row :gutter=8>
                                                <Col span=6 style="text-align:right;font-weight:bold">Global Directory Name:</Col>
                                                <Col span=4 style="text-align:left;">{{serviceSummary.directoryname}}</Col>
                                                <Col span=6 style="text-align:right;font-weight:bold">Symphony URL:</Col>
                                                <Col span=6 style="text-align:left;">https://{{serviceSummary.subdomain}}.symphony.com</Col>

                                            </Row>
                                            <Row :gutter=8>
                                                <Col span=6 style="text-align:right;font-weight:bold">Users:</Col>
                                                <Col span=4 style="text-align:left;">{{serviceSummary.seats}}</Col>
                                                <Col span=6 style="text-align:right;font-weight:bold">Region:</Col>
                                                <Col span=6 style="text-align:left;">{{serviceSummary.region}}</Col>
                                            </Row>
                                            <Row :gutter=8>
                                                <Col span=6 style="text-align:right;font-weight:bold">Support Tier:</Col>
                                                <Col span=4 style="text-align:left;">{{serviceSummary.support_tier}}</Col>
                                                <Col span=6 style="text-align:right;font-weight:bold">Promo Code:</Col>
                                                <Col span=6 style="text-align:left;">{{serviceSummary.promocode}}</Col>
                                            </Row>
                                        </p>
                                    </Panel>
                                    <Panel name="pricePanel">
                                        Price Summary
                                        <p slot="content">
                                            <Row type="flex" justify="center" :gutter=16>
                                                <Col span=8 style="text-align:right;font-weight:bold">Setup Fee:</Col>
                                                <Col span=8 style="text-align:left;">${{serviceSummary.onetime_fees}}.00</Col>
                                            </Row>
                                            <Row type="flex" justify="center" :gutter=16>
                                                <Col span=8 style="text-align:right;font-weight:bold">Annual Subscription Fee:</Col>
                                                <Col span=8 style="text-align:left;">${{annual_subscription}}.00</Col>
                                            </Row>
                                            <Row type="flex" justify="center" :gutter=16>
                                                <Col span=8 style="text-align:right;font-weight:bold">Annual Service Fee:</Col>
                                                <Col span=8 style="text-align:left;">${{service_subscription}}.00</Col>
                                            </Row>
                                            <br/><br/>
                                            <Row :gutter=8>
                                                <Col span=6 style="text-align:right;font-weight:bold">Total (One Time):</Col>
                                                <Col span=4 style="text-align:left;">${{total_onetime_fees}}</Col>
                                                <Col span=6 style="text-align:right;font-weight:bold">Total (Annual):</Col>
                                                <Col span=6 style="text-align:left;">${{total_annual_subscription}}</Col>
                                            </Row>
                                        </p>
                                    </Panel>
                                </Collapse>
                               
                            </Col>
                        </Row>
                        <Row :gutter="16" type="flex" justify="center" style="margin-top:30px;">
                            <Col span=2>
                                <Button type="primary" size="large" @click="handleGotoBilling">Back</Button>
                            </Col>
                            <Col span=2>
                                <Button type="primary" size="large" @click="handleGotoThankyou">Purchase Now</Button>
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
                accordionPanel: ['servicePanel','pricePanel'],
                serviceSummary: {
                    directoryname: '',
                    subdomain: '',
                    seats: 0,
                    region: '',
                    support_tier: '',
                    promocode: '',
                    onetime_fees: 0

                }
            }
        },
        mounted: function() {
            if (globalState.service)
            {
                this.serviceSummary.directoryname = globalState.service.directoryname;
                this.serviceSummary.subdomain = globalState.service.subdomain;
                this.serviceSummary.seats = globalState.service.seats;
                this.serviceSummary.support_tier = globalState.service.support_tier;
                this.serviceSummary.promocode = globalState.service.promocode;
            }

            if (globalState.company)
            {
                this.serviceSummary.region = globalState.company.region;
            }

            if (globalState.pricing)
            {
                this.serviceSummary.onetime_fees = globalState.pricing.onetime_fees;
            }
        },
        computed: {
            annual_subscription: function() {
                return this.serviceSummary.seats * globalState.pricing.pupm * 12;
            },
            service_subscription: function() {

                //The computed properites will execute once as the page is being rigged
                //(but before the 'mounted' directive) and then again after 'mounted'.
                //If an undefined property will throw an exception, we need to test for it.
                if (this.serviceSummary.support_tier != '')
                {
                    var sTier = this.serviceSummary.support_tier.toLowerCase();
                    return globalState.pricing.support_tiers.find(t => t.key === sTier).price;
                }
            },
            total_onetime_fees: function() {
                return this.serviceSummary.onetime_fees;
            },
            total_annual_subscription: function() {
                return this.annual_subscription + this.service_subscription;
            }
        },
        methods: {
            handleGotoThankyou () {
                this.$router.push({name: "thankyou"});                
            },
            handleGotoBilling() {
                this.$router.push({name: "billing"})
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