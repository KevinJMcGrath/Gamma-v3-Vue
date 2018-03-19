<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="4" direction="vertical">
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
                            <Col :xs=24 :sm=18 :md=10 :lg=8>
                                <p class="p2">Your Billing Info...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=24 :sm=20 :md=18 :lg=16>
                                <p class="p4">
                                    It's time for the hard part. We're going to ask you some questions about the payment method you want to use to subscribe to the Symphony service. Symphony uses <a href="#">Stripe</a> as our payment processor in order to provide an easy, secure experience. 
                                </p>
                            </Col>
                        </Row>

                        <Form :model="billingForm" :label-width="150">
                        <Row type="flex" justify="center" class="standardRow">
                            <Col :xs=20 :sm=20 :md=12 :lg=10>                                
                                <FormItem label="Payment Type" >
                                    <Select v-model="billingForm.type" placeholder="Select" @on-change="fieldChange('type')">
                                        <Option value="card">Credit Card</Option>
                                        <Option value="ach">Company ACH Transfer</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"  class="standardRow">
                            <Col :xs=20 :sm=20 :md=18 :lg=14>
                                <Card>
                                    <p slot="title">Payment Details</p>
                                    <p>
                                        <Row>
                                            <Col span=24>
                                                <FormItem :label-width=10>
                                                    <Input v-model="billingForm.address1" @on-change="fieldChange('address1')" placeholder="Street Address"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span=10>
                                                <FormItem :label-width=10>
                                                    <Input v-model="billingForm.city" @on-change="fieldChange('city')" placeholder="City"></Input>
                                                </FormItem>
                                            </Col>
                                            <Col span=6 >
                                                <FormItem :label-width=10>
                                                    <Input v-model="billingForm.state" @on-change="fieldChange('state')" placeholder="State"></Input>
                                                </FormItem>
                                            </Col>
                                            <Col span=8>
                                                <FormItem :label-width=10>
                                                    <Input v-model="billingForm.zip" @on-change="fieldChange('zip')" placeholder="ZIP"></Input>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        
                                        <Row type="flex" justify="center">
                                            <Col span=18>
                                                <div id="card-element" class="field"></div>
                                            </Col>
                                        </Row>
                                    </p>
                                </Card>
                            </Col>
                        </Row>
                        </Form>

                        <Row type="flex" justify="center" class="buttonRow">
                            <Col :xs=5 :sm=4 :md=3 :lg=2 class-name="backButtonCol">
                                <Button type="primary" size="large" @click="handleGotoLegal">Back</Button>
                            </Col>
                            <Col :xs=6 :sm=5 :md=4 :lg=3 class-name="nextButtonCol">
                                <Button type="primary" size="large" @click="handleGotoSummary">Continue</Button>
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

    var stripe = Stripe('pk_test_gUJYd9BdGY6XdYL9RltHkmRe');
    var stripeElement;

	export default {
        data() {
            return {
                billingForm: {
                    type: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: ''
                }
            }
        },
        mounted: function() {

            if (globalState.billing)
            {
                this.billingForm.type = globalState.billing.type;
                this.billingForm.address1 = globalState.billing.address1;
                this.billingForm.address2 = globalState.billing.address2;
                this.billingForm.city = globalState.billing.city;
                this.billingForm.state = globalState.billing.state;
                this.billingForm.zip = globalState.billing.zip;
                this.billingForm.country = globalState.billing.country;
            }

            stripeElement = MountStripeElements();
        },
        methods: {
            fieldChange(fieldName) { 
                switch(fieldName)
                {
                    case 'type':
                        globalState.billing.type = this.billingForm.type;
                        break;
                    case 'address1':
                        globalState.billing.address1 = this.billingForm.address1;
                        break;
                    case 'address2':
                        globalState.billing.address2 = this.billingForm.address2;
                        break;
                    case 'city':
                        globalState.billing.city = this.billingForm.city;
                        break;
                    case 'state':
                        globalState.billing.state = this.billingForm.state;
                        break;
                    case 'zip':
                        globalState.billing.zip = this.billingForm.zip;
                        break;
                    case 'country':
                        globalState.billing.country = this.billingForm.country;
                        break;
                    default: 
                        break;
                }
            },
            handleGotoSummary () {
                stripe.createToken(stripeElement).then(function(result) {
                    if (result.token)
                    {
                        console.log(result.token);
                        globalState.billing.stripe_token = result.token;
                    }
                    else if (result.error) {
                        console.error(result.error);
                    } else {
                        console.error('Failed to obtain token from Stripe.');
                    }

                    this.$router.push({name: "summary"});  

                //Needed to bind "this" in order to get this promise declaration to 
                //have the correct scope. Inside the promise, this becomes undefined. We
                //need it to keep attached to the Vue instance
                //https://stackoverflow.com/questions/39196501/vuejs-async-component-data-and-promises
                }.bind(this)).catch(function (err) {
                    console.error(err);
                });                              
            },
            handleGotoLegal() {
                this.$router.push({name: "legal"})
            }
        }
    }

    function MountStripeElements()
    {
        
        var elements = stripe.elements();
        
        var card = elements.create('card', {
          hidePostalCode: true,
          style: {
            base: {
              iconColor: '#F99A52',
              color: '#32315E',
              fontWeight: 400,
              fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
              fontSize: '15px',

              '::placeholder': {
                color: 'steelblue',
              }
            },
          }
        });
        card.mount('#card-element');

        return card;
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