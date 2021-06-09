export default {
    install: (app) => {
        app.config.globalProperties.$log = function () {
            console.log("custom plugin")
        }
    }
}