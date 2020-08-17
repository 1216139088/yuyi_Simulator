
const MQTT_IP="ws://39.108.84.205:9083/mqtt"

const options = {
    keepalive: 60,
    protocolId: "MQTT",
    protocolVersion: 4,
    //为false，则后会保存为其发送的qos为1，2的消息，重连后会收到
    clean: false,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    clientId: "emqx_test" + Math.random(),
    username: "emqx_test1111",
    password: "emqx_test1111",
    //客户端断开连接时候服务端将发送消息通知
    will:{
        topic:'offline',
        payload:'aaaaaaaaa'
    }
};

// const TOPICS = ['/c/000000'];
const TOPICS = ['/a/000000','/c/000000'];