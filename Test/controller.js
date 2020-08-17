class Controller {
    light1;
    light2;
    light3;
    light4;

    button1;
    button2;
    button3;
    button4;


    client;

    static data;
    d;
    constructor(id) {
        this.d = new Data();
        this.d.address = "00000000" + id;
        Controller.data=this.d.createCommand();
        this.client=new MQTT_client(id, MQTT_IP, options);


    }

    operating(button, state) {
        switch (button) {
            case 1:
                switch (state) {
                    case 0:
                        this.d._switch1=Data.SWITCH_STATE_MANUAL_OPEN;
                        this.d.work_state1 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 1:
                        this.d._switch1=Data.SWITCH_STATE_MANUAL_CLOSE;
                        this.d.work_state1 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                    case 2:
                        this.d._switch1=Data.SWITCH_STATE_BUTTON_OPEN;
                        this.d.work_state1 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 3:
                        this.d._switch1=Data.SWITCH_STATE_BUTTON_CLOSE;
                        this.d.work_state1 = Data.WORK_STATE_CLOSE_CODE;
                        break;

                }
                break;
            case 2:
                switch (state) {
                    case 0:
                        this.d._switch2=Data.SWITCH_STATE_MANUAL_OPEN;
                        this.d.work_state2 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 1:
                        this.d._switch2=Data.SWITCH_STATE_MANUAL_CLOSE;
                        this.d.work_state2 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                    case 2:
                        this.d._switch2=Data.SWITCH_STATE_BUTTON_OPEN;
                        this.d.work_state2 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 3:
                        this.d._switch2=Data.SWITCH_STATE_BUTTON_CLOSE;
                        this.d.work_state32 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                }
                break;
            case 3:
                switch (state) {
                    case 0:
                        this.d._switch3=Data.SWITCH_STATE_MANUAL_OPEN;
                        this.d.work_state3 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 1:
                        this.d._switch3=Data.SWITCH_STATE_MANUAL_CLOSE;
                        this.d.work_state3 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                    case 2:
                        this.d._switch3=Data.SWITCH_STATE_BUTTON_OPEN;
                        this.d.work_state3 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 3:
                        this.d._switch3=Data.SWITCH_STATE_BUTTON_CLOSE;
                        this.d.work_state3 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                }
                break;
            case 4:
                switch (state) {
                    case 0:
                        this.d._switch4=Data.SWITCH_STATE_MANUAL_OPEN;
                        this.d.work_state4 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 1:
                        this.d._switch4=Data.SWITCH_STATE_MANUAL_CLOSE;
                        this.d.work_state4 = Data.WORK_STATE_CLOSE_CODE;

                        break;
                    case 2:
                        this.d._switch4=Data.SWITCH_STATE_BUTTON_OPEN;
                        this.d.work_state4 = Data.WORK_STATE_OPEN_CODE;
                        break;
                    case 3:
                        this.d._switch4=Data.SWITCH_STATE_BUTTON_CLOSE;
                        this.d.work_state4 = Data.WORK_STATE_CLOSE_CODE;
                        break;
                }
                break;

        }
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);

    }


    wiring(wiring, route) {
        switch (wiring) {
            case 1:
                switch (route) {
                    case 0:
                        this.d.wiring1 = Data.WIRING_NO;
                        break;
                    case 1:
                        this.d.wiring1 = Data.WIRING_ONE;
                        break;
                    case 2:
                        this.d.wiring1 = Data.WIRING_TWO;
                        break;
                    case 3:
                        this.d.wiring1 = Data.WIRING_THREE;
                        break;
                    case 4:
                        this.d.wiring1 = Data.WIRING_ALL;
                        break;
                }
                break;
            case 2:
                switch (route) {
                    case 0:
                        this.d.wiring2 = Data.WIRING_NO;
                        break;
                    case 1:
                        this.d.wiring2 = Data.WIRING_ONE;
                        break;
                    case 2:
                        this.d.wiring2 = Data.WIRING_TWO;
                        break;
                    case 3:
                        this.d.wiring2 = Data.WIRING_THREE;
                        break;
                    case 4:
                        this.d.wiring2 = Data.WIRING_ALL;
                        break;
                }
                break;
            case 3:
                switch (route) {
                    case 0:
                        this.d.wiring3 = Data.WIRING_NO;
                        break;
                    case 1:
                        this.d.wiring3 = Data.WIRING_ONE;
                        break;
                    case 2:
                        this.d.wiring3 = Data.WIRING_TWO;
                        break;
                    case 3:
                        this.d.wiring3 = Data.WIRING_THREE;
                        break;
                    case 4:
                        this.d.wiring3 = Data.WIRING_ALL;
                        break;
                }
                break;
            case 4:
                switch (route) {
                    case 0:
                        this.d.wiring4 = Data.WIRING_NO;
                        break;
                    case 1:
                        this.d.wiring4 = Data.WIRING_ONE;
                        break;
                    case 2:
                        this.d.wiring4 = Data.WIRING_TWO;
                        break;
                    case 3:
                        this.d.wiring4 = Data.WIRING_THREE;
                        break;
                    case 4:
                        this.d.wiring4 = Data.WIRING_ALL;
                        break;
                }
                break;
        }
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }

    //故障
    operating_ERROR(route) {
        switch (route) {
            case 1:
                this.d.work_state1 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 2:
                this.d.work_state2 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 3:
                this.d.work_state3 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 4:
                this.d.work_state4 = Data.WORK_STATE_ERROR_CODE;
                break;
        }
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }

    //电流异常
    operating_Close(route) {
        switch (route) {
            case 1:
                this.d.work_state1 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 2:
                this.d.work_state2 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 3:
                this.d.work_state3 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 4:
                this.d.work_state4 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
        }
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }

    Electric1(value) {
        this.d.CURRENT_VALUE1 = value;
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }
    Electric2(value) {
        this.d.CURRENT_VALUE2 = value;
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }
    Electric3(value) {
        this.d.CURRENT_VALUE3 = value;
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }
    Electric4(value) {
        this.d.CURRENT_VALUE4 = value;
        Controller.data=this.d.createCommand();
        this.client.sendMessage(Controller.data);
    }

    interval_state;
    interval() {
        let cli = this.client;
        this.interval_state=setInterval(function () {
            console.log(Controller.data);
            // this.client.sendMessage(Controller.data);
            cli.sendMessage(Controller.data);
        }, 1000);
    }

    cleanInter() {
        clearInterval(this.interval_state);
    }

}