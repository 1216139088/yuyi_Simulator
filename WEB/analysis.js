class Analysis {
    static OPEN = ["oneOpen","secondOpen","thirdOpen","fourthOpen"];
    static STATUS = ["oneStatus","secondStatus","thirdStatus","fourthStatus"];
    static CURRNT = ["oneCurrrnt","secondCurrrnt","thirdCurrrnt","fourthCurrrnt"];
    static WIRING = ["oneWiring","secondWiring","thirdWiring","fourthWiring"];
    static ONOFF = ["oneONOFF","secondONOFF","thirdONOFF","fourthONOFF"];



    static analysis(data) {


        let data1=JSON.parse(JSON.stringify(data[0]));
        let data2=JSON.parse(JSON.stringify(data[1]));
        let data3=JSON.parse(JSON.stringify(data[2]));
        let data4=JSON.parse(JSON.stringify(data[3]));
        let dataArray = [data1["aeratorSource"], data2["aeratorSource"], data3["aeratorSource"]
                        , data4["aeratorSource"]];

        for (let i = 0; i < 4; i++) {
            switch (dataArray[i].substr(0, 2)) {
                case "00":
                    document.getElementById(this.OPEN[i]).innerHTML = "开启第" + (i+1) + "路";
                    document.getElementById(this.STATUS[i]).innerHTML = "关闭";
                    break;
                case "11":
                    document.getElementById(this.OPEN[i]).innerHTML = "关闭第" + (i+1) + "路";
                    document.getElementById(this.STATUS[i]).innerHTML = "开启";
                    break;
                case "22":
                    document.getElementById(this.OPEN[i]).innerHTML = "第" + (i+1) + "路故障";
                    document.getElementById(this.STATUS[i]).innerHTML = "故障";
                    break;
                case "55":
                    document.getElementById(this.OPEN[i]).innerHTML = "第" + (i+1) + "路电流异常";
                    document.getElementById(this.STATUS[i]).innerHTML = "电流异常";
                    break;
            }
            //电流
            document.getElementById(this.CURRNT[i]).innerHTML = dataArray[i].substr(2, 2);
            //接线
            switch (dataArray[i].substr(4, 2)) {
                case "22":
                    document.getElementById(this.WIRING[i]).innerHTML ="接线";
                    break;
                case "30":
                    document.getElementById(this.WIRING[i]).innerHTML ="没有接线";
                    break;
                case "31":
                    document.getElementById(this.WIRING[i]).innerHTML ="一路有电流";
                    break;
                case "32":
                    document.getElementById(this.WIRING[i]).innerHTML ="两路有电流";
                    break;
                case "33":
                    document.getElementById(this.WIRING[i]).innerHTML ="三路有电流";
                    break;
            }
            switch (dataArray[i].substr(6, 2)) {
                case "00":
                    document.getElementById(this.ONOFF[i]).innerHTML = "遥控";
                    break;
                case "11":
                    document.getElementById(this.ONOFF[i]).innerHTML = "手动关";
                    break;
                case "22":
                    document.getElementById(this.ONOFF[i]).innerHTML = "手动开";
                    break;
                case "33":
                    document.getElementById(this.ONOFF[i]).innerHTML = "按钮关";
                    break;
                case "44":
                    document.getElementById(this.ONOFF[i]).innerHTML = "按钮开";
                    break;
            }


        }

    }

}