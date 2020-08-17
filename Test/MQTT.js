class MQTT_client {
    client;

    id;
    IP;
    options;


    constructor(id, IP, options) {
        this.id = id;
        this.IP = IP;
        this.options = options;
        this.connect(this.id, this.IP, this.options);
    }

    connect(id, IP, options) {

        this.client = mqtt.connect(IP, options);
        this.client.on("connect", error => {
            console.log("连接成功");
        });
        this.client.on("reconnect", error => {
            console.log("正在重连:");
        });

        this.client.on("error", error => {
            console.log("连接失败:");
        });
        this.client.on("close", error => {
            console.log("连接关闭:");
        });

        this.client.on("message", function (topic, payload, packet) {
            console.log("！！！！！！接收到信息：" + Utils.buf2hex(payload));
            //TODO 解析

        });


        for (let index in TOPICS) {
            let topic = TOPICS[index] + id;
            this.client.subscribe(topic);
            console.log("—————————————" + "以订阅主题——>" + topic + "—————————————");
        }
    }

    sendMessage(command) {
        let topic = this.createTopic();
        this.client.publish(
            topic,
            new Uint8Array(Utils.hexToArrayBuffer(command)),
            function(a, b) {
                console.log(a, b);
            }
        );

        console.log(topic + "发送消息！！！" + command);
    }

    createTopic() {
        return `/a/000000${(this.id)}`;
    }
}
