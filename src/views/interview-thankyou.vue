<template>
	<div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Sider hide-trigger class="sidebarClass">
                    <Steps :current="6" direction="vertical">
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
                                <p style="font-size: 2.2em;text-align:center;">Thank You!</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style="margin-top:20px;">
                            <Col span=16>
                                <p style="margin-top:10px;font-size:1.2em;text-align:center;">
                                    We're going to start spinning up your service shortly. We expect it to be ready in about 1 hour. 
                                </p>
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
	export default {
        data() {
            return { }
        },
        methods: {
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