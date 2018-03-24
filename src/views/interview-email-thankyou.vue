<template>
    <div class="sym-layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout class="layoutClassEmail">
                <Content class="contentClass">
                    <Row type="flex" justify="center" class="logoRow">
                        <Col span=2 >
                            <img src="../images/SymphonyLogo.png" height=75/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=24 :sm=18 :md=10 :lg=8>
                            <p class="p1">Thank you!</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=18 :sm=16 :md=14 :lg=10>
                            <p class="p3">
                                You will be receiving an email from Symphony shortly asking you to verify your email address. Be sure to check your spam folders and filters. 
                                <br/><br/>
                                If necessary, you can re-send the verification email by clicking the button below. 
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col span=4>
                            <Button type="primary" size="large" @click="handleResendEmail()">Re-Send Verification</Button>
                        </Col>
                        <Col span=3>
                            <Button type="primary" size="large" @click="handleChangeEmail()">Change EMail</Button>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=18 :sm=16 :md=14 :lg=10>
                            <Alert show-icon>
                                You may need to add symphony.com to your list of spam filter exceptions.
                            </Alert>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Footer>
                <Row type="flex" justify="end">
                    <Col span=2>
                        <Button type="dashed" @click="handleStartInterview()">Start</Button>
                    </Col>
                </Row>
            </Footer>
        </Layout>
        
    </div>
</template>
<script>
    import globalState from '../libs/interviewState.js';

    export default {
        data() {            

            return {
                emailAddress: ''
            }
        },
        mounted: function() {
            if (globalState.user)
            {
                this.emailAddress = globalState.user.email;
            }
        },
        methods: {
            handleResendEmail() {
               this.$Notice.success({
                title: 'Email verification Re-sent',
                desc: 'Email verification re-sent to: <br/><p style="margin:10px 0;font-weight:bold;">' + this.emailAddress + '</p>Click Change Email to use a different address.',
                duration: 6
               });
            },
            handleChangeEmail() {
                this.$router.push({ name: "email" });
            },
            handleStartInterview() {
                this.$router.push( { name: "contact" });
            }
        }
    }
</script>
<style scoped>
   
</style>