class Utils {
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
