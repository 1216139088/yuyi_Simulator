class Lib {}

/**
 * 增氧机
 */
class Aerator {
  static WORK_STATUS_CLOSE = "00";
  static WORK_STATUS_OPEN = "11";
  static WORK_STATUS_DOWN = "22";
  static WORK_STATUS_EXCEPTION = "55";

  static LINE_NO = "30";
  static LINE_ONE = "31";
  static LINE_TWO = "32";
  static LINE_THREE = "33";

  static SWITCH_STATUS_REMOTE = "00";
  static SWITCH_MANUAL_CLOSE = "11";
  static SWITCH_MANUAL_OPEN = "22";
  static SWITCH_BUTTON_CLOSE = "33";
  static SWITCH_BUTTON_OPEN = "44";
  constructor(aeratorSource) {
    this.aeratorSource = aeratorSource;
  }
  get workStatusCode() {
    return this.aeratorSource.substr(0, 2);
  }
  //当前工作状态
  get currentWorkStatus() {
    let code = this.workStatusCode;
    switch (code) {
      case Aerator.WORK_STATUS_OPEN:
        return { code: Aerator.WORK_STATUS_OPEN, label: "开" };
      case Aerator.WORK_STATUS_CLOSE:
        return { code: Aerator.WORK_STATUS_CLOSE, label: "关" };
      case Aerator.WORK_STATUS_DOWN:
        return { code: Aerator.WORK_STATUS_DOWN, label: "故障" };
      case Aerator.WORK_STATUS_EXCEPTION:
        return { code: Aerator.WORK_STATUS_EXCEPTION, label: "电流异常" };
    }
  }
  get lineStatusCode() {
    return this.aeratorSource.substr(4, 2);
  }
  //当前线路状态
  get currentLineStatus() {
    let code = this.lineStatusCode;
    switch (code) {
      case Aerator.LINE_NO:
        return { code: Aerator.LINE_NO, label: "没接线" };
      case Aerator.LINE_ONE:
        return { code: Aerator.LINE_ONE, label: "1路有电流" };
      case Aerator.LINE_TWO:
        return { code: Aerator.LINE_TWO, label: "2路有电流" };
      case Aerator.LINE_THREE:
        return { code: Aerator.LINE_THREE, label: "3路有电流" };
    }
  }
  get switchStatusCode() {
    return this.aeratorSource.substr(6, 2);
  }
  //当前开关状态
  get currentSwitchStatus() {
    let code = this.switchStatusCode;
    switch (code) {
      case Aerator.SWITCH_BUTTON_CLOSE:
        return { code: Aerator.SWITCH_BUTTON_CLOSE, label: "按钮关" };
      case Aerator.SWITCH_BUTTON_OPEN:
        return { code: Aerator.SWITCH_BUTTON_OPEN, label: "按钮开" };
      case Aerator.SWITCH_MANUAL_OPEN:
        return { code: Aerator.SWITCH_MANUAL_OPEN, label: "手动开" };
      case Aerator.SWITCH_MANUAL_CLOSE:
        return { code: Aerator.SWITCH_MANUAL_CLOSE, label: "手动关" };
      case Aerator.SWITCH_STATUS_REMOTE:
        return { code: Aerator.SWITCH_STATUS_REMOTE, label: "遥控" };
    }
  }
  get maxElectricCode() {
    return this.aeratorSource.substr(2, 2);
  }
  //最大电流
  get maxElectric() {
    return parseInt(this.maxElectricCode, 16) / 10;
  }
  //工作状态为关
  isClose() {
    return this.workStatusCode == Aerator.WORK_STATUS_CLOSE;
  }
  //开
  isOpen() {
    return this.workStatusCode == Aerator.WORK_STATUS_OPEN;
  }
  //故障
  isDown() {
    return this.workStatusCode == Aerator.WORK_STATUS_DOWN;
  }
  //异常
  isException() {
    return this.workStatusCode == Aerator.WORK_STATUS_EXCEPTION;
  }

  //没接线
  isDisconnect() {
    return this.lineStatusCode == Aerator.LINE_NO;
  }
  //一路是否有电流
  isOne() {
    return this.lineStatusCode == Aerator.LINE_ONE;
  }
  //二路是否有电流
  isTwo() {
    return this.lineStatusCode == Aerator.LINE_TWO;
  }
  //三路是否有电流
  isThree() {
    return this.lineStatusCode == Aerator.LINE_THREE;
  }
  //  遥控
  isRemoteControl() {
    return this.switchStatusCode == Aerator.SWITCH_STATUS_REMOTE;
  }
  //手动关
  isManualClose() {
    return this.switchStatusCode == Aerator.SWITCH_MANUAL_CLOSE;
  }
  //手动开
  isManualOpen() {
    return this.switchStatusCode == Aerator.SWITCH_MANUAL_OPEN;
  }
  //按钮开
  isButtonOpen() {
    return this.switchStatusCode == Aerator.SWITCH_BUTTON_OPEN;
  }
  //按钮关
  isButtonClose() {
    return this.switchStatusCode == Aerator.SWITCH_BUTTON_CLOSE;
  }
}

class DevData {
  static DATA_SIZE = [0, 4, 16, 18, 22, 24, 26, 28, 76, 78, 86, 90];
  static DATA_SIZE_TWO = [0, 4, 16, 18, 20, 24, 26, 28, 30, 32, 34, 36];

  //设备 心跳/回复 的上传命令
  static COMMAND_DEV_STATUS_HB = "20";
  //设备断电时发送命令
  static COMMAND_DEV_STATUS_DOWN = "F0";
  //设备上电命令 这个命令的在校验码后加20位SIM卡识别码
  static COMMAND_DEV_STATUS_UP = "F1";
  //出厂测试回复
  static COMMAND_DEV_STATUS_TEST = "C2";

  constructor(buffer) {
     this.source = Utils.buf2hex(buffer);
    this.parse(this.source);

  }
  /**
   * 帧头
   * 0-4位
   * 用于识别数据包是控制器端发送到服务器端的
   * FCED 控制器端发送到服务器
   * FAEB 服务器发送到控制器端
   */
  get head() {
    return this.source.substr(0, 4);
  }
  /**
   * 地址码
   * 5-16
   * 表示为此控制器设备的地址，用于区别所接的设备
   */
  get addr() {
    return this.source.substr(4, 12);
  }
  /**
   * 数据长度
   * 17-18
   * 表示从序号开始到校验码的长度
   */
  get length() {
    return parseInt(this.source.substr(16, 2), 16);
  }
  /**
   * 错误次数
   *
   */
  get errorCount() {
    return parseInt(this.source.substr(18, 2), 16);
  }
  /**
   * 断线次数
   *
   */
  get closeCount() {
    return parseInt(this.source.substr(20, 2), 16);
  }

  /**
   * 版本号 23-24
   * 需要转换成10进制再除以10
   * 例如：1E，十进制为30，版本为3.0
   */

  get version() {
    return parseInt(this.source.substr(22, 2), 16) / 10;
  }
  /**
   * 信号强度
   * 25-26
   * 和服务器的之间的网络信号强度
   */
  get sign() {
    return parseInt(this.source.substr(24, 2), 16);
  }
  /**
   * 帧命令
   * 27-28
   * 长度为1个Byte，表示此帧数据的操作含义
   * 20: 设备 心跳/回复 的上传命令
   F0: 设备断电时发送命令
   F1: 设备上电命令 这个命令的在校验码后加20位SIM卡识别码
   C2: 出厂测试回复
   */
  get command() {
    return this.source.substr(26, 2);
  }

  /**
   *  //四路增氧机状态数据
   * 每八个1组一共四组，代表了4路增氧机状态。
   * 00: 工作状态(00关、11开、22故障、55电流异常)
     00: 最大电流(转成10进制再除以10)
     22: 接线(30: 没有接线、31:一路有电流、32:两路有电流、33: 三路有电流)
     00: 开关状态(00:遥控、11手动关、22手动开、33按钮关、44按钮开)
   * 如： 00002200
         11002200
         00002200
         00002200
   */
  get aeratorInfo() {

    let a_str = this.source.substr(28, 32);
    let i = 0,
      charArray = Array.from(a_str),
      result = [];
    while (i < 4) {
      let code = a_str.substr(i * 8, 8);
      result.push(new Aerator(code));
      i++;
    }
    // this.aeratorsStatus;
    return result;
  }

  /**
   * 温度
   * 代表了2路温度计状态
   */

  get temperature() {
    let code = this.source.substr(60, 8);
    return [
      parseInt(code.substr(0, 4), 16) / 10,
      parseInt(code.substr(4, 4), 16) / 10
    ];
  }

  /**
   * 溶氧值
   * @return number
   */
  get oxygen() {
    return parseInt(this.source.substr(68, 4), 16) / 10;
  }

  /**
   * 防盗报警
   * 防盗报警:  使能有报警是11 使能无报警是10 不使能是00
   * @return {string}
   */
  get alert() {
    return this.source.substr(72, 2);
  }

  /**
   * 声光报警(保留位)
   * @return {string}
   */
  get adlert() {
    return this.source.substr(74, 2);
  }
  get data() {
    return this.source.substr(28, 48);
  }
  get chk() {
    return this.source.substr(76, 2);
  }

  /**
   * 推送失败
   * 无回应Publish OK次数，主动重启
   */
  get noAckCount() {
    return this.source.substr(78, 2);
  }

  /**
   * 重启时长
   * 记录了多次重启中用时最大的时间
   */
  get maxRebootTime() {
    return this.source.substr(80, 4);
  }
  /**
   * 看门狗次数
   */
  get watchDogCount() {
    return this.source.substr(84, 2);
  }
  /**
   * 发送心跳数
   * 控制箱发送心跳次数，F1时重置次数.F1不发此值
   */
  get hbCount() {
    let result = this.source.substr(86, 4);
    return result != null ? result : "0000";
  }

  /**
   * 通信卡号
   * F1: 设备上电命令 这个命令的在校验码后加20位SIM卡识别码
   * 8986结尾
   * @return {string}
   */
  get cardNumber() {
    return this.source.substr(86, 4);
  }
  //是否设备心跳回复命令
  get isDevHeartBeat() {
    return this.command == DevData.COMMAND_DEV_STATUS_HB;
  }
  //是否设备断电命令
  get isDevDown() {
    return this.command == DevData.COMMAND_DEV_STATUS_DOWN;
  }
  //是否设备上电命令
  get isDevUp() {
    return this.command == DevData.COMMAND_DEV_STATUS_UP;
  }
  //是否设备测试命令
  get isDevTest() {
    return this.command == DevData.COMMAND_DEV_STATUS_TEST;
  }
  parse(data) {
    /* let result = [];
    for (let i = 0, size = DevData.DATA_SIZE.length - 1; i < size; i++) {
      result[i] = data.substring(
        DevData.DATA_SIZE[i],
        DevData.DATA_SIZE[i + 1]
      );
    }*/
    let inboundMetaData = {};

    inboundMetaData["head"] = this.head;

    inboundMetaData["addr"] = this.addr;

    inboundMetaData["length"] = this.length;

    inboundMetaData["errorCount"] = this.errorCount;
    inboundMetaData["closeCount"] = this.closeCount;

    inboundMetaData["version"] = this.version;

    inboundMetaData["sign"] = this.sign;

    inboundMetaData["command"] = this.command;
    inboundMetaData["aeratorInfo"] = this.aeratorInfo;
    inboundMetaData["temperature"] = this.temperature;
    inboundMetaData["oxygen"] = this.oxygen;
    // inboundMetaData["data"] = this.data;
    inboundMetaData["chk"] = this.chk;
    inboundMetaData["hbcount"] = this.hbCount;
    inboundMetaData["noAckCount"] = this.noAckCount;
    inboundMetaData["maxRebootTime"] = this.maxRebootTime;
    inboundMetaData["watchDogCount"] = this.watchDogCount;
    // inboundMetaData["source"] = data;
    this.metaData = inboundMetaData;
  }
}
