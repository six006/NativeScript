﻿import frame = require("ui/frame");

export function navigate(args) {
    frame.topmost().navigate("ui-tests-app/segmented-bar/clean");
}