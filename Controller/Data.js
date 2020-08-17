class Data {
    //帧头
    static HEAD = "FCED";
    //地址
    _address = "00000address";
    //数据长度
    _length = "00";
    //错误次数
    _error_numbers = "00";
    //断开次数
    _close_numbers = "00";
    //版本号
    _version = "00";
    //信号强度
    _signal = "00";
    //
    _command = Data.DATA_CODE;
    //帧命令
    static UP_CODE = "F1";
    static DATA_CODE = "20";
    static DOWN_CODE = "F0";
    //
    //工作状态

    //
    _work_state1 = Data.WORK_STATE_CLOSE_CODE;
    _work_state2 = Data.WORK_STATE_CLOSE_CODE;
    _work_state3 = Data.WORK_STATE_CLOSE_CODE;
    _work_state4 = Data.WORK_STATE_CLOSE_CODE;
    //开
    static WORK_STATE_OPEN_CODE = "11";
    //关
    static WORK_STATE_CLOSE_CODE = "00";
    //故障
    static WORK_STATE_ERROR_CODE = "22";
    //电流异常
    static WORK_STATE_ABNORMAL_CODE = "55";

    //最大电流
    _CURRENT_VALUE1 = "00";
    _CURRENT_VALUE2 = "00";
    _CURRENT_VALUE3 = "00";
    _CURRENT_VALUE4 = "00";

    //接线
    _wiring1 = Data.WIRING_ALL;
    _wiring2 = Data.WIRING_ALL;
    _wiring3 = Data.WIRING_ALL;
    _wiring4 = Data.WIRING_ALL;
    //接线
    static WIRING_ALL = "22";
    //没有接线
    static WIRING_NO = "30";
    //一路有电流
    static WIRING_ONE = "31";
    //二路有电流
    static WIRING_TWO = "32";
    //三路有电流
    static WIRING_THREE = "33";

    //开关状态
    _switch1 = Data.SWITCH_STATE_REMOTE;
    _switch2 = Data.SWITCH_STATE_REMOTE;
    _switch3 = Data.SWITCH_STATE_REMOTE;
    _switch4 = Data.SWITCH_STATE_REMOTE;
    //遥控
    static SWITCH_STATE_REMOTE = "00";
    //手动关
    static SWITCH_STATE_MANUAL_CLOSE = "11";
    //手动开
    static SWITCH_STATE_MANUAL_OPEN = "22";
    //按钮关
    static SWITCH_STATE_BUTTON_CLOSE = "33";
    //按钮开
    static SWITCH_STATE_BUTTON_OPEN = "44";

    //shuju



    //温度计
    _thermometer = "0000" + "0000";
    //溶氧仪
    _oxygen = "0000";
    //防盗报警
    _alarm = "00" + "00";
    //校验码
    _checkcode = "00";
    //sim
    _SIM="01234567890123456789"


    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get error_numbers() {
        return this._error_numbers;
    }

    set error_numbers(value) {
        this._error_numbers = value;
    }

    get close_numbers() {
        return this._close_numbers;
    }

    set close_numbers(value) {
        this._close_numbers = value;
    }

    get version() {
        return this._version;
    }

    set version(value) {
        this._version = value;
    }

    get signal() {
        return this._signal;
    }

    set signal(value) {
        this._signal = value;
    }

    get command() {
        return this._command;
    }

    set command(value) {
        this._command = value;
    }

    get work_state1() {
        return this._work_state1;
    }

    set work_state1(value) {
        this._work_state1 = value;
    }

    get work_state2() {
        return this._work_state2;
    }

    set work_state2(value) {
        this._work_state2 = value;
    }

    get work_state3() {
        return this._work_state3;
    }

    set work_state3(value) {
        this._work_state3 = value;
    }

    get work_state4() {
        return this._work_state4;
    }

    set work_state4(value) {
        this._work_state4 = value;
    }

    get CURRENT_VALUE1() {
        return this._CURRENT_VALUE1;
    }

    set CURRENT_VALUE1(value) {
        this._CURRENT_VALUE1 = value;
    }

    get CURRENT_VALUE2() {
        return this._CURRENT_VALUE2;
    }

    set CURRENT_VALUE2(value) {
        this._CURRENT_VALUE2 = value;
    }

    get CURRENT_VALUE3() {
        return this._CURRENT_VALUE3;
    }

    set CURRENT_VALUE3(value) {
        this._CURRENT_VALUE3 = value;
    }

    get CURRENT_VALUE4() {
        return this._CURRENT_VALUE4;
    }

    set CURRENT_VALUE4(value) {
        this._CURRENT_VALUE4 = value;
    }

    get wiring1() {
        return this._wiring1;
    }

    set wiring1(value) {
        this._wiring1 = value;
    }

    get wiring2() {
        return this._wiring2;
    }

    set wiring2(value) {
        this._wiring2 = value;
    }

    get wiring3() {
        return this._wiring3;
    }

    set wiring3(value) {
        this._wiring3 = value;
    }

    get wiring4() {
        return this._wiring4;
    }

    set wiring4(value) {
        this._wiring4 = value;
    }

    get switch1() {
        return this._switch1;
    }

    set switch1(value) {
        this._switch1 = value;
    }

    get switch2() {
        return this._switch2;
    }

    set switch2(value) {
        this._switch2 = value;
    }

    get switch3() {
        return this._switch3;
    }

    set switch3(value) {
        this._switch3 = value;
    }

    get switch4() {
        return this._switch4;
    }

    set switch4(value) {
        this._switch4 = value;
    }

    get thermometer() {
        return this._thermometer;
    }

    set thermometer(value) {
        this._thermometer = value;
    }

    get oxygen() {
        return this._oxygen;
    }

    set oxygen(value) {
        this._oxygen = value;
    }

    get alarm() {
        return this._alarm;
    }

    set alarm(value) {
        this._alarm = value;
    }

    get checkcode() {
        return this._checkcode;
    }

    set checkcode(value) {
        this._checkcode = value;
    }

    get SIM() {
        return this._SIM;
    }

    set SIM(value) {
        this._SIM = value;
    }

    createCommand() {

        let h = `${Data.HEAD}${this.address}`;
        let code = `${this.error_numbers}${this.close_numbers}${this.version}${this.signal}${this.command}` +
                    `${this.work_state1}${this.CURRENT_VALUE1}${this.wiring1}${this.switch1}`+
                    `${this.work_state2}${this.CURRENT_VALUE2}${this.wiring2}${this.switch2}`+
                    `${this.work_state3}${this.CURRENT_VALUE3}${this.wiring3}${this.switch3}`+
                    `${this.work_state4}${this.CURRENT_VALUE4}${this.wiring4}${this.switch4}`+
                    `${this.thermometer}${this.oxygen}${this.alarm}`;

        let length = this.len(code + "00");

        let chk = Utils.checkCode(`${h}${length}${code}`);

        return `${h}${length}${code}${chk}`.toUpperCase();

    }
    len(str) {
        let l = Utils.numberTohex(Math.round(str.length / 2));
        return l.length < 2 ? "0" + l : l;
    }
}

class Utils{
    /**
     * 整数转hex 并大写
     * @return string
     */
    static numberTohex(num) {
        return Number(num)
            .toString(16)
            .toUpperCase();
    }
    static numberTohexZero(num) {
        let v = Number(num)
            .toString(16)
            .toUpperCase();
        return v.length < 2 ? "0" + v : v;
    }
    /**
     * buffer转换为hex
     * @param buffer
     * @returns {string}
     */
    static buf2hex(buffer) {
        // buffer is an ArrayBuffer
        return Array.prototype.map
            .call(new Uint8Array(buffer), x => ("00" + x.toString(16)).slice(-2))
            .join("")
            .toUpperCase();
    }
    /**
     * 分组字符串
     * @param str
     * @param split 每组大小
     * @param len   总长度
     * @returns {[]}
     */
    static spilt(str, split, len) {
        let result = [];
        for (let i = 0, size = len / split; i < size; i++) {
            result[i] = str.substring(i * split, (i + 1) * split);
        }
        return result;
    }

    /**
     * 生成校验码
     * @param str
     * @returns {*}
     */
    static checkCode(str) {
        let strArray = this.spilt(str, 2, str.length);
        let result = strArray[0];
        let size = strArray.length;
        let i = 1;
        while (i < size) {
            let x = parseInt(result, 16);
            let y = parseInt(strArray[i], 16);

            let r = x ^ y;
            let strs = Number(r).toString(16);
            if (strs.length == 1) {
                strs = "0" + strs;
            }
            result = strs;
            i = i + 1;
        }

        if (result.length == 1) result = "0" + result;
        return result;
    }
    static hexToArrayBuffer(hex) {
        if (typeof hex !== "string") {
            throw new TypeError("Expected input to be a string");
        }

        if (hex.length % 2 !== 0) {
            throw new RangeError(
                "Expected string to be an even number of characters"
            );
        }

        var view = new Uint8Array(hex.length / 2);

        for (var i = 0; i < hex.length; i += 2) {
            view[i / 2] = parseInt(hex.substring(i, i + 2), 16);
        }

        return view.buffer;
    }
    static encode(str){
        return new TextEncoder().encode(str)
    }
    static decode(str){
        return new TextDecoder().decode(str)
    }
}

class command {
    static DATA
    //上电
    sendAckMessageWithUp(addr) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.UP_CODE;
        command.DATA = data.createCommand() + data.SIM;
        console.log("上电"+command.DATA);
        return command.DATA;
    }
    //断电
    sendAckMessageWithDown(addr) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.DOWN_CODE;
        command.DATA = data.createCommand();
        console.log("断电"+command.DATA);
        return command.DATA;
    }

    sendSwitchMessage(addr, isOpen = false, channel = 1, electric,switch_state) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.DATA_CODE;
        switch (channel) {
            case 1:
                if (isOpen) {
                    data.work_state1 = Data.WORK_STATE_OPEN_CODE;
                } else {
                    data.work_state1 = Data.WORK_STATE_CLOSE_CODE;
                }
                data.CURRENT_VALUE1 = electric;
                data.switch1 = switch_state;
                break;
            case 2:
                if (isOpen) {
                    data.work_state2 = Data.WORK_STATE_OPEN_CODE;
                } else {
                    data.work_state2 = Data.WORK_STATE_CLOSE_CODE;
                }
                data.CURRENT_VALUE2 = electric;
                data.switch2 = switch_state;
                break;
            case 3:
                if (isOpen) {
                    data.work_state3 = Data.WORK_STATE_OPEN_CODE;
                } else {
                    data.work_state3 = Data.WORK_STATE_CLOSE_CODE;
                }
                data.CURRENT_VALUE3 = electric;
                data.switch2 = switch_state;
                break;
            case 4:
                if (isOpen) {
                    data.work_state4 = Data.WORK_STATE_OPEN_CODE;
                } else {
                    data.work_state4 = Data.WORK_STATE_CLOSE_CODE;
                }
                data.CURRENT_VALUE4 = electric;
                data.switch2 = switch_state;
                break;

        }
        command.DATA = data.createCommand();
        console.log("开关"+command.DATA);
        return command.DATA;
    }

    sendERROR(addr, channel) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.DATA_CODE;
        switch (channel) {
            case 1:
                data.work_state1 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 2:
                data.work_state2 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 3:
                data.work_state3 = Data.WORK_STATE_ERROR_CODE;
                break;
            case 4:
                data.work_state4 = Data.WORK_STATE_ERROR_CODE;
                break;
        }
        command.DATA = data.createCommand();
        console.log("故障"+command.DATA);
        return command.DATA;
    }

    sendClose(addr, channel) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.DATA_CODE;
        switch (channel) {
            case 1:
                data.work_state1 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 2:
                data.work_state2 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 3:
                data.work_state3 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
            case 4:
                data.work_state4 = Data.WORK_STATE_ABNORMAL_CODE;
                break;
        }
        command.DATA = data.createCommand();
        console.log("电流异常"+command.DATA);
        return command.DATA;
    }


    sendWiring(addr,channel,wiring) {
        let data = new Data();
        data.address = "00000000" + addr;
        data.command = Data.DATA_CODE;
        switch (channel) {
            case 1:
                data.switch1 = wiring;
                break;
            case 2:
                data.switch1 = wiring;
                break;
            case 3:
                data.switch1 = wiring;
                break;
            case 4:
                data.switch1 = wiring;
                break;
        }
        command.DATA = data.createCommand();
        console.log("接线"+command.DATA);
        return command.DATA;
    }


}

