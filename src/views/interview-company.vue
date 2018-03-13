<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="1" direction="vertical">
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
                            <Col span=6>
                                <p style="font-size: 2.2em;text-align:center;">Your Organization...</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=16>
                                <p style="margin-top:10px;font-size:1.2em;text-align:center;">
                                    Next, give us some details about your organization. We'll use this information to help tailor your team's overall experience. This will include positioning the servers in a geographically favorable datacenter and suggesting some additional tools and services you can include to help streamline your internal workflow.
                                </p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=10>
                                <Form :model="companyForm" :label-width="100">
                                    <FormItem label="Company Name">
                                        <Input v-model="companyForm.companyname" @on-change="fieldChange('company')"></Input>
                                    </FormItem>
                                    <FormItem label="Industry">
                                        <Select v-model="companyForm.industry" placeholder="Select" @on-change="fieldChange('industry')">
                                            <Option value="Agriculture-Mining">Agriculture &amp; Mining</Option>
                                            <Option value="Communications-Media-IT">Communications, Media, IT</Option>
                                            <Option value="Consulting-Services">Consulting Services</Option>
                                            <Option value="Consumer-Services">Consumer Services</Option>
                                            <Option value="eCommerce">eCommerce</Option>
                                            <Option value="Education">Education</Option>
                                            <Option value="Energy-Oil-Gas">Energy, Oil and Gas</Option>
                                            <Option value="Financial-Services">Financial Services</Option>
                                            <Option value="Food-Beverage">Food &amp; Beverage</Option>
                                            <Option value="Government">Government</Option>
                                            <Option value="Healthcare-Pharmaceuticals-Biotec">Healthcare, Pharmaceuticals, and Biotec</Option>
                                            <Option value="Insurance">Insurance</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                            <Option value="Media-Entertainment">Media &amp; Entertainment</Option>
                                            <Option value="Nonprofit">Nonprofit</Option>
                                            <Option value="Professional-Services">Professional Services</Option>
                                            <Option value="Public-Sector">Public Sector</Option>
                                            <Option value="RealEstate-Construction">Real Estate &amp; Construction</Option>
                                            <Option value="Restaurant-Hospitality">Restaurant &amp; Hospitality</Option>
                                            <Option value="Retail">Retail</Option>
                                            <Option value="Technology">Technology</Option>
                                            <Option value="Transportation-Storage">Transportation &amp; Storage</Option>
                                            <Option value="Wholesale-Distribution">Wholesale &amp; Distribution</Option>
                                            <Option value="Other">Other</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="Region">
                                        <Select v-model="companyForm.region" placeholder="Select" @on-change="fieldChange('region')">
                                            <Option value="AMER">Americas</Option>
                                            <Option value="EMEA">EMEA</Option>
                                            <Option value="APAC">APAC</Option>
                                        </Select>
                                    </FormItem>
                                </Form>
                            </Col>
                        </Row>
                        <Row :gutter="16" type="flex" justify="center" style="margin-top:30px;">
                            <Col span=2>
                                <Button type="primary" size="large" @click="handleGotoContact">Back</Button>
                            </Col>
                            <Col span=2>
                                <Button type="primary" size="large" @click="handleGotoService">Continue</Button>
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
                companyForm: {
                    companyname: '',
                    industry: '',
                    region: ''
                }
            }
        },
        mounted: function() {

            if (globalState.company)
            {
                this.companyForm.companyname = globalState.company.name;
                this.companyForm.industry = globalState.company.industry;
                this.companyForm.region = globalState.company.region;
            }
        },
        methods: {
            fieldChange(fieldName) { 
                switch(fieldName)
                {
                    case 'company':
                        globalState.company.name = this.companyForm.compnayname;
                        break;
                    case 'industry':
                        globalState.company.industry = this.companyForm.industry;
                        break;
                    case 'region':
                        globalState.company.region = this.companyForm.region;
                        break;
                    default: 
                        break;
                }
            },
            handleGotoService () {
                //console.log("moving to start the flow.");
                this.$router.push({name: "service"});
                
            },
            handleGotoContact() {
                this.$router.push({name: "contact"})
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