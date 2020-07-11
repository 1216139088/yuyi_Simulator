class Sender {
  static HEAD = "FAEB";
  //开命令
  static STATE_OPEN_CODE = "11";
  //关命令
  static STATE_CLOSE_CODE = "00";
  //接收设备刚上电 需要回复
  static UP_CODE = "F1";
  //接收设备上传信息 需要回复
  static DATA_CODE = "A0";
  //控制操作命令
  static OP_CODE = "06";
  //设备类型
  //设备类型保留值
  static DEV_TYPE_DEFAULT_CODE = "00";
  //普通增氧
  static DEV_TYPE_NOR_CODE = "A0";
  //变频增氧
  static DEV_TYPE_ADV_CODE = "B0";
  SN = "000000";
  //0000C60920110030001100300011003000110030000000000000000001780101561300
  //FAEB0000000011880900000000A000000021
  /**
   * 创建命令
   * @param type
   * @return hexString
   */
  createCommand(type) {}
  /**
   * 生成命令code
   * 参数是hex类型
   * @param clientId
   * @param devType
   * @param cmd
   * @param channel
   * @param state
   * @param electric
   * @return {string}
   */
  createCommandCode(
    addr,
    devType = Sender.DEV_TYPE_DEFAULT_CODE,
    cmd = Sender.DATA_CODE,
    channel = "00",
    state = "00",
    electric = "00"
  ) {
    let h = `${Sender.HEAD}${addr}`;
    let code = `${devType}${this.SN}${cmd}${channel}${state}${electric}`;
    let length = this.len(code + "00");
    // console.log(h + code);
    let chk = Utils.checkCode(`${h}${length}${code}`);

    return `${h}${length}${code}${chk}`.toUpperCase();
  }

  len(str) {
    let l = Utils.numberTohex(Math.round(str.length / 2));
    return l.length < 2 ? "0" + l : l;
  }

  sendMessage(addr, command) {
    let topic = this.createTopic(addr);
    client.publish(
      topic,
      new Uint8Array(Utils.hexToArrayBuffer(command)),
      function(a, b) {
        console.log(a, b);
      }
    );
  }

  /**
   * 发送开关命令
   * @param addr     id
   * @param isOpen   是否开
   * @param channel  通道  1-4 增氧机 5-6 温度计 7 溶氧仪 8-9 报警器
   * @param electric 设置最大电流
   */
  sendSwitchMessage(addr, isOpen = true, channel = 1, electric) {
    let message = this.createCommandCode(
      addr,
      Sender.DEV_TYPE_NOR_CODE,
      Sender.OP_CODE,
      Utils.numberTohexZero(channel),
      isOpen ? Sender.STATE_OPEN_CODE : Sender.STATE_CLOSE_CODE,
      electric !== undefined ? Utils.numberTohexZero(electric) : undefined
    );
    this.sendMessage(addr, message);
  }
  createTopic(addr) {
    return `/c/${addr.substr(2)}`;
  }

  /**
   * 上传信息回复
   * @param addr
   * todo:是否加入hbcount
   */
  sendAckMessage(addr) {
    let message = this.createCommandCode(addr, undefined, Sender.DATA_CODE);
    this.sendMessage(addr, message);
  }

  /**
   * 上电回复
   * @param addr
   */
  sendAckMessageWithUp(addr) {
    let message = this.createCommandCode(addr, undefined, Sender.UP_CODE);
    this.sendMessage(addr, message);
  }
}
