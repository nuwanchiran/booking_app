const notifi_types = require("../config/params").default.notifi_types

export default [
    {
        title: "Save 10% or more by booking on the app.",
        desc: "Look for the orange “Mobile-only price” label to start saving",
        date: "2020/05/06",
        type: notifi_types.TIP
    },
    {
        title: "Your Rose Villa booking has been cancelled by the property owner",
        desc: "No rooms are available",
        date: "2020/10/06",
        type: notifi_types.INFO
    },
    {
        title: "You have recieved a message from Nilaveli Beach Paradise Hotel",
        desc: "Yes, 3 triple-size deluxe room are availble, when do you hope to get here ?",
        date: "2020/09/06",
        type: notifi_types.MESSAGE
    },
    {
        title: "You have recieved a message from Nilaveli Beach Paradise Hotel",
        desc: "Yes, 3 triple-size deluxe room are availble, when do you hope to get here ?",
        date: "2020/09/06",
        type: notifi_types.MESSAGE
    },
]