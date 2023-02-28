define(["require", "exports", "./classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as HeroClasses from "./classes/Hero";
    // const Hero = 123;
    const ironman = new Hero_1.Hero("Ironman", 10, 55);
    console.log(ironman);
    console.log(ironman.power);
});
