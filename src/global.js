export default {
    // example for global data
    // user: {},
    // setUser(object) {
    //     this.user = object
    // }
    teacher:{

    },
    setTeacher(object){
        this.teacher = object
    },
    information:{

    },
    setInformation(object){
        this.information = object
    },
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
