<template>
    <div class="layout">
        <Layout>
            <Header class="headerClass"></Header>
            <Layout>
                <Content class="contentClass">
                    <Row type="flex" justify="center" style="height:75px;">
                        <Col span=2 >
                            <img src="../images/SymphonyLogo.png" height=75/>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style="margin-top:20px;">
                        <Col span=6>
                            <p style="font-size: 40px;text-align:center;">Getting Started</p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style="margin-top:20px;">
                        <Col span=8>
                            <p style="font-size:2.2em;text-align:center;">
                                Thanks for choosing Symphony!
                            </p>
                            <p style="margin-top:10px;font-size:1.6em;text-align:center;">
                                We need to ask you a few questions to kick off the process and get you on your way to a better experience. If you're ready to begin, click the "Continue" button below. 
                            </p>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style="margin-top:30px;">
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

    .contentClass {
        background: #F5F7F9;
        min-height: 500px;
    }

    .sidebarClass {
        background: #F5F7F9;
    }

    .symLogo {
        background-color: red;

        border:1px solid blue;

    }

</style>