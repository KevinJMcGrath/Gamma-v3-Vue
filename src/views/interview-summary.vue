<template>
	<div class="sym-layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout class="layoutClass">
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="5" direction="vertical">
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
                                <img src="../images/Purchase-Icon.png" height=75/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=18 :md=10 :lg=8>
                                <p class="p2">Review Your Subscription...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <p  class="p4">
                                    Review the details of your subscription below. If you are satisfied, click "Purchase Now".
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col span=16>
                                <Card>
                                    <p slot="title">Subscription Summary</p>
                                    <p>
                                        <Row>
                                            <Col span=6 style="text-align:right;font-weight:bold;">Company Vanity Name:</Col>
                                            <Col span=4 style="text-align:left;">{{serviceSummary.directoryname}}</Col>

                                            <Col span=6 offset="2" style="text-align:right;font-weight:bold;">Setup Fee:</Col>
                                            <Col span=6 style="text-align:left;">${{serviceSummary.onetime_fees}}.00</Col>

                                        </Row>
                                        <Row>
                                            <Col span=6 style="text-align:right;font-weight:bold;">User Licenses:</Col>
                                            <Col span=4 style="text-align:left;">{{serviceSummary.seats}}</Col>
                                            
                                            <Col span=6 offset="2" style="text-align:right;font-weight:bold">Annual Subscription:</Col>
                                            <Col span=6 style="text-align:left;">${{annual_subscription}}.00</Col>

                                        </Row>
                                        <Row type="flex" justify="start" class="standardRow">
                                            <Col span=2></Col>
                                            <Col span=18>
                                                <p style="font-size:0.8em;">Your subscription will be for <b>12 months</b> from the date of delivery. The setup fee will be charged only once. Your card will automatically be charged for your subscription yearly on your anniversary date. </p>
                                            </Col>
                                        </Row>


                                        
                                    </p>
                                </Card>
                                <!--<Collapse v-model="accordionPanel">
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
                                </Collapse>-->
                               
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <Alert show-icon>
                                    Your credit card will <b>not</b> be charged until your instance is complete and you are provided with login credentials.
                                </Alert>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="alertRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <Alert show-icon>
                                    Your instance is created at time of purchase. It may take up to <b style="color: Firebrick;">2 hours</b> to receive your login details.
                                </Alert>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="buttonRow">
                            <Col :xs=5 :sm=4 :md=3 :lg=2 class-name="backButtonCol">
                                <Button type="primary" size="large" @click="handleGotoBilling">Back</Button>
                            </Col>
                            <Col :xs=6 :sm=5 :md=4 :lg=3 class-name="nextButtonCol">
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
    import sfdc_request from '../libs/sfdc.js';

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

                // 3/22/2018 This is working, I have it commented out for demo purposes
                /*sfdc_request().then(function(response) {
                    console.log('Logging response:');
                    console.log(response);
                }.bind(this)).catch(function (err) {
                    console.log('Logging error:');
                    console.error(err);
                }); */


                //var test = sfdc_request();

                //console.log(test);


                this.$router.push({name: "thankyou"});                
            },
            handleGotoBilling() {
                this.$router.push({name: "billing"})
            }
        }
    }
</script>
<style scoped>


</style>