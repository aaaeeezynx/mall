import { customRef } from 'vue';

export default function (initValue: string, delay: number) {
    let timr: number
    let msg = customRef((track, trigger) => {
        return {
            get() {
                track()
                return initValue
            },
            set(value) {
                clearTimeout(timr)
                timr = setTimeout(() => {
                    console.log(value)
                    initValue = value
                    trigger()
                }, delay)
            }
        }
    })
    return { msg }
}