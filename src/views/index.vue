<template>
    <div class="sym-layout">
        <Layout>
            <Header class="header-bg-fix"></Header>
            <Layout>
                <Content class="contentClass">
                    <Row type="flex" justify="center" class="logoRow">
                        <Col span=2 >
                            <img src="../images/SymphonyLogo.png" height=75/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=24 :sm=18 :md=10 :lg=8>
                            <p class="p1">Getting Started</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="standardRow">
                        <Col :xs=18 :sm=16 :md=14 :lg=8>
                            <p class="p2">
                                Thanks for choosing Symphony!
                            </p>
                            <p class="p3">
                                We need to ask you a few questions to kick off the process and get you on your way to a better experience. If you're ready to begin, click the "Continue" button below. 
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" class="buttonRow">
                        <Col span=2>
                            <Button type="primary" size="large" @click="handleStartFlow">Continue</Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
        
    </div>
</template>
<script>
    export default {
        methods: {
            handleStartFlow () {
                //console.log("moving to start the flow.");
                this.$router.push({name: "contact"});
                
            }
        }
    }
</script>
<style scoped>
    .sym-layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        margin:50px;
    }

    .contentClass {
        background: url("../images/trusted-global-directory-trans.png") no-repeat top left;
        background-size: 40% auto;

    }

    .header-bg-fix {
        background: #F5F7F9;
    }

    .p1 {
        font-size: 2.8em;
        text-align: center;
    }

    .p2 {
        font-size: 2.2em;
        text-align: center;
    }

    .p3 {
        margin-top:10px;
        font-size:1.6em;
        text-align:center;
    }
</style>