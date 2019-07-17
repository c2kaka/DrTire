import Toast from "./toast"

let currentToast;
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                OnClose: () => {
                    currentToast = null;
                }
            });
        }
    }
}

//helpers
function createToast({Vue, message, propsData, OnClose}) {
    const Constructor = Vue.extend(Toast);
    let toast = new Constructor({propsData});
    toast.$slots.default = [message];
    toast.$mount();
    toast.$on('close', OnClose);
    document.body.appendChild(toast.$el);
    return toast;
}