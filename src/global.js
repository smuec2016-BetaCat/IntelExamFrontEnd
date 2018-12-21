export default {
    // example for global data
    // user: {},
    // setUser(object) {
    //     this.user = object
    // }

    isPc() {
        let [userAgentInfo, flag, Agents] = [
            navigator.userAgent,
            true,
            ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
        ]
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    }
}
